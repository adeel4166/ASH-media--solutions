from django.shortcuts import render
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse
from django.conf import settings
from .models import Contact

def index(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def services(request):
    return render(request, 'services.html')
def contact(request):
    if request.method == "POST":
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')

        # Save to database
        Contact.objects.create(name=name, email=email, message=message)

        # Send email (safe handling)
        subject = f"New Contact from {name}"
        email_message = f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"

        try:
            send_mail(subject, email_message, settings.EMAIL_HOST_USER, 
                      ['adeelkhan4128@gmail.com'])
        except BadHeaderError:
            return HttpResponse('Invalid header found.')
        except Exception as e:
            print("Email error:", e)  # just log error, don't stop form save

        return render(request, 'contact.html', {'success': True})

    return render(request, 'contact.html')




def home(request):
    success = False
    if request.method == "POST":
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')

        # Email Content
        subject = f"Message from {name}"
        body = f"Sender Email: {email}\n\nMessage:\n{message}"

        # Send Email
        send_mail(
            subject,
            body,
            settings.DEFAULT_FROM_EMAIL,
            ['your_email@example.com'],  # jahan tum email receive karna chahte ho
            fail_silently=False,
        )
        success = True

    return render(request, 'index.html', {'success': success})
