from django.shortcuts import render

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import CustomUser
import json

@csrf_exempt
def login(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')
        
        try:
            print("postts")
            print(email)
            print(password)
            # new_user = CustomUser.objects.create(email="nuevo@correo.com", password="pass")
            print(CustomUser.objects.all())
            # print(new_user)
            user = CustomUser.objects.get(email=email)
            print(user)
            if user.password == password:
                # Autenticación exitosa
                print("E ",user.email,"P ",user.password, "A ", user.admin)
                return JsonResponse({'message': 'Inicio de sesión exitoso'})
            else:
                return JsonResponse({'error': 'Credenciales incorrectas'})
        except CustomUser.DoesNotExist:
            return JsonResponse({'error': 'Usuario no encontrado'})
    else:
        return JsonResponse({'error': 'Método no permitido'})
