from django.contrib import admin
from django.utils.html import format_html
from .models import Contact

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    # Columns jo admin table me show honge
    list_display = ('name', 'email_link', 'short_message', 'created_at')
    search_fields = ('name', 'email', 'message')
    list_filter = ('created_at',)
    ordering = ('-created_at',)
    readonly_fields = ('created_at',)

    # Email clickable banane ke liye
    def email_link(self, obj):
        return format_html('<a href="mailto:{}">{}</a>', obj.email, obj.email)
    email_link.short_description = 'Email'

    # Message ko short display karne ke liye
    def short_message(self, obj):
        return obj.message[:50] + "..." if len(obj.message) > 50 else obj.message
    short_message.short_description = 'Message'



admin.site.site_header = "ASH Media Solutions Admin"
admin.site.site_title = "ASH Media Solutions Dashboard"
admin.site.index_title = "Welcome to ASH Media Solutions Admin"
