from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse,JsonResponse
import os
import xml.etree.ElementTree as ET
from django.conf import settings
from .templatetags import custom_filter
import codecs

def index(request):
    context = {}
    return render(request, 'news/index.html', context=context)

@csrf_exempt
@csrf_exempt
def my_view(request):
    # XML 数据文件的目录路径
    xml_dir = os.path.join(r'\django_news', 'xml_data')
    matched_files = []  # 存储匹配到的XML文件
    print('*'*50)
    # if request
    username = request.POST.get('text')
    print(username)
    # 遍历目录中的XML文件
    for file_name in os.listdir(xml_dir):
        if file_name.endswith('.xml'):
            file_path = os.path.join(xml_dir, file_name)
            with codecs.open(file_path, 'r', encoding='utf-8', errors='ignore') as xml_file:
                content = xml_file.read()
            # 在这里根据需要进行 XML 数据的处理
            # 例如，使用 xml.etree.ElementTree 解析 XML 文件
            if username in content:
                # root = ET.fromstring(content)
                root = ET.fromstring(content)
                # 进行匹配操作，将匹配到的文件添加到 matched_files 列表中

                # 使用XPath表达式查找所有的<Content>元素
                content_elements = root.findall(".//Content")

                # 提取所有<Content>元素的文本内容
                content_list = [element.text for element in content_elements]

                # 打印所有<Content>元素的文本内容
                s = '<br>'.join(content_list)
                # 进行匹配操作，将匹配到的文件添加到 matched_files 列表中
                matched_files.append([file_name, s])
    # print(matched_files)
    # 将匹配到的文件路径列表传递给前端
    contexts = {'matched_files': matched_files}
    print(contexts)

    if request.method == "POST":
        return JsonResponse(contexts)
    return render(request, 'news/index.html', {'matched_files': matched_files})