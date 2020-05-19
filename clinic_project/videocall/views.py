from django.shortcuts import render

# Create your views here.
def req(request):
	return render(request,'videocall/sample.html')