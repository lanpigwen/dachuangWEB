from django import template
import codecs

register = template.Library()

@register.filter
def filecontent(value):
    with codecs.open(value, 'r', encoding='utf-8', errors='ignore') as file:
        return file.read()

@register.filter
def escape(value):
    return value.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')