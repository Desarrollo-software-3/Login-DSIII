from djongo import models

class CustomUser(models.Model):
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)
    admin = models.BooleanField(default=False)

    class Meta:
        app_label = 'auth'
