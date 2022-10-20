from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.


def upload_image(instance, filename):
    return 'images/{filename}'.format(filename=filename)


def upload_music(instance, filename):
    return 'musics/{filename}'.format(filename=filename)


class User(AbstractUser):
    first_name = models.CharField(max_length=50, blank=True, null=True)
    last_name = models.CharField(max_length=50, blank=True, null=True)
    phone = models.CharField(max_length=20, blank=True,
                             null=True)  # come back later, , unique=True
    email = models.EmailField(max_length=50, unique=True)
    pseudonym = models.CharField(max_length=20, blank=False, null=True)
    password = models.CharField(max_length=100, blank=False, null=False)
    image = models.ImageField(upload_to=upload_image, blank=True, null=True)
    is_active = models.BooleanField(default=True, blank=True, null=True)
    last_login = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    USERNAME_FIELD = 'email'
    username = None
    REQUIRED_FIELDS = []


class Music(models.Model):
    title = models.CharField(max_length=50, blank=False, null=False)
    file = models.FileField(upload_to=upload_music)
    image = models.ImageField(upload_to=upload_image)
    author = models.ForeignKey(User, on_delete=models.PROTECT)


class Post(models.Model):
    author = models.ForeignKey(
        User, on_delete=models.CASCADE)
    content = models.TextField(blank=True, null=True)
    create_date = models.DateTimeField(auto_now_add=True)
    change_date = models.DateTimeField(auto_now_add=True)


class Post_Images(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    image = models.ImageField(upload_to=upload_image)
    
    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['post', 'image'], name='post-image')
        ]


class Post_Musics(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    music = models.ForeignKey(Music, on_delete=models.PROTECT)
    
 


class Playlist(models.Model):
    title = models.CharField(max_length=50, blank=False, null=False)
    create_date = models.DateTimeField(auto_now_add=True)
    change_date = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to=upload_image)
    user = models.ForeignKey(User, on_delete=models.PROTECT)


class Playlist_Music(models.Model):
    music = models.ForeignKey(Music, on_delete=models.CASCADE)
    playlist = models.ForeignKey(Playlist, on_delete=models.CASCADE)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['playlist', 'music'], name='playlist-music')
        ]


class User_Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['user', 'post'], name='user-post')
        ]


class User_Subscribe(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    subscribe_user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='subscribe_user')

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['user', 'subscribe_user'], name='user-subscribe_user')
        ]
