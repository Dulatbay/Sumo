from django.shortcuts import render
from rest_framework.decorators import api_view
from .serializers import *
from rest_framework.exceptions import AuthenticationFailed
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.response import Response
from .models import *
from django.utils import timezone
import jwt
import datetime
from rest_framework.views import APIView
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import permissions
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import viewsets
from django.core.files.images import ImageFile
from django.core.files import *
import json
from django.core import serializers


# Create your views here.

def get_payload(req):
    token = req.COOKIES.get('jwt')
    if not token:
        raise AuthenticationFailed('User not authenticated')
    payload = jwt.decode(token, 'secret', algorithms=['HS256'])
    return payload

class Auth:
    @staticmethod
    @api_view(['POST'])
    def login(req):
        email = req.data['email']
        password = req.data['password']

        user = User.objects.filter(email=email).first()
        if user is None:
            raise AuthenticationFailed('User not found')

        print(user)
        if not user.check_password(password):
            raise AuthenticationFailed('Password incorrect')

        user.is_active = True
        user.last_login = timezone.now()

        user.save()

        payload = {
            'id': user.id
        }

        token = jwt.encode(payload, 'secret', algorithm='HS256')
        responce = Response()
        responce.set_cookie(key='jwt', value=token, httponly=True)
        responce.data = {
            'jwt': token
        }
        return responce

    @staticmethod
    @api_view(['POST'])
    def register(req):
        try:
            email = req.data['email']
            serializer = UserSerializer(data=req.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data)
        except:
            return Response({'error': 'Invalid error'})

    @staticmethod
    @api_view(['GET'])
    def check(req):
        try:
            payload = get_payload(req)
        except AuthenticationFailed:
            return Response({'error': 'Invalid token'}, status=404)
        except Exception:
            return Response({'error': 'unknown error'}, status=404)
        user = User.objects.filter(id=payload['id']).first()
        user.is_active = True
        user.last_login = datetime.datetime.now()
        user.save()
        serializer = UserSerializer(user)
        return Response(serializer.data)

    @staticmethod
    @api_view(['POST'])
    def logout(req):
        try:
            payload = get_payload(req)
            user = User.objects.filter(id=payload['id']).first()
            user.is_active = False
            user.save()
        except AuthenticationFailed:
            return Response({'error': 'Invalid token'})
        except Exception:
            return Response({'error': 'unknown error'})
        responce = Response()
        responce.delete_cookie('jwt')
        responce.data = {
            'message': 'Token has been deleted successfully'
        }
        return responce

class MusicView(APIView):
    def get(self, req, id):
        try:
            music = Music.objects.get(id=id)
            serializer = MusicSerializer(music)
            return Response(serializer.data)
        except Music.DoesNotExist:
            return Response('music not found', 404)
        except Exception as e:
            return Response('unknown error', 404)

    def post(self, req):
        payload = None
        try:
            payload = get_payload(req)
        except AuthenticationFailed:
            return Response({'error': 'User not authenticated'}, 403)
        except Exception as e:
            return Response({'error': 'unknown error'}, 403)
        file = File(req.data.get('file', None))
        if req.data.get('image') is not None:
            image = ImageFile(req.data.get('image', None))
            music.image = image
        title = req.data.get('title')
        music = Music()
        music.author = User.objects.get(id=payload['id'])
        music.title = title
        music.file = file
        music.save()
        return Response({'data': MusicSerializer(music).data})

    def put(self, req, id):
        pass

    def delete(self, req, id):
        pass

@api_view(['GET'])
def get_music_by_name(req):
    musics = Music.objects.filter(title__contains=req.GET.get('title', ''))
    serializer_musics = MusicSerializer(musics, many=True)
    return Response(serializer_musics.data)

@api_view(['GET'])
def get_music_by_author_id(req, id):
    user = MusicSerializer(Music.objects.select_related('author').filter(author=id), many=True).data
    return JsonResponse(list(user), safe=False)

class PostView(APIView):
    def post(self, req):
        try:
            payload = get_payload(req)
            content = req.POST.get('content', None)
            if content is None:
                return Response('Content is empty', 403)
            post = Post()
            print(payload['id'])
            post.author = User.objects.get(id=payload['id'])
            post.content = content
            post.save()
            allFiles = list(req.FILES.items())
            images = []
            audios = req.POST.getlist('music_id')
            musics = []
            for i in range(len(audios)):
                music = Music.objects.get(id=audios[i])
                musics.append(music.file.name)
                post_music = Post_Musics(
                    post=post, music=music)
                post_music.save()
            for i in range(len(allFiles)):
                value = allFiles[i][1]
                if (value.content_type.__contains__('image')):
                    post_image = Post_Images(post=post, image=value)
                    post_image.save()
                    images.append(value.name)
            return JsonResponse({'post': PostSerializer(post).data, 'images': images, 'audios': musics}, status=200, safe=200)
        except AuthenticationFailed:
            return Response({'error': 'user not authenticated'})

    def get(self, req, id):
        post = Post.objects.get(id=id)
        serializer = PostSerializer(post)
        return Response(serializer.data)

@api_view(['GET'])
def get_all_posts(req):
    posts = Post.objects.all()
    serializer = PostSerializer(posts, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_all_musics(req):
    musics = Music.objects.all()
    serializer = MusicSerializer(musics, many=True)
    return Response(serializer.data)

class PostDetailsView(APIView):
    def get(self, req, id):
        images = list(Post_ImagesSerializer(Post_Images.objects.select_related(
            'post').filter(post_id=id), many=True).data)
        audios = list(Post_MusicsSerializer(Post_Musics.objects.select_related(
            'post').filter(post_id=id), many=True).data)
        post = PostSerializer(Post.objects.get(id=id)).data
        return JsonResponse({'post': {'info': post, 'images': images, 'musics': audios}})


@api_view(['GET'])
def get_all_posts_detail(req):
    posts = list(PostSerializer(Post.objects.all(), many=True).data)
    for post in posts:
        post['musics'] = list(Post_MusicsSerializer(Post_Musics.objects.select_related(
            'post').filter(post_id=post["id"]), many=True).data)
        post["images"] = list(Post_ImagesSerializer(Post_Images.objects.select_related(
            'post').filter(post_id=post["id"]), many=True).data)
    return JsonResponse(posts, safe=False)