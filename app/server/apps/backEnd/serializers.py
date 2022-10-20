from rest_framework import serializers
from .models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


class MusicSerializer(serializers.ModelSerializer):

    image = serializers.ImageField(required=False)
    file = serializers.FileField(required=False)
        
    class Meta:
        model = Music
        fields = ['id', 'title', 'file', 'image', 'author']
        depth = 10


class PostSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Post
        fields = '__all__'
        depth = 10


class Post_ImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post_Images
        fields = ['image']
        depth = 10


class Post_MusicsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post_Musics
        fields = ['music']
        depth = 10


class PlaylistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Playlist
        fields = '__all__'
        depth = 10


class Playlist_MusicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Playlist_Music
        fields = '__all__'
        depth = 10


class User_PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = User_Post
        fields = '__all__'
        depth = 10


class User_SubscribeSerializer(serializers.ModelSerializer):
    class Meta:
        model = User_Subscribe
        fields = '__all__'
        depth = 10
