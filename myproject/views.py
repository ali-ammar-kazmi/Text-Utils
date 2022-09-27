from django.shortcuts import render
import string

def index(request):
	return render(request,'index.html')

def about(request):
	text = request.POST.get('text','')
	upper = request.POST.get('UpperCase','off')
	lower = request.POST.get('LowerCase','off')
	title = request.POST.get('TitleCase','off')
	switch = request.POST.get('SwapCase','off')
	space = request.POST.get('WhiteSpace','off')
	punctuation = request.POST.get('Punctuations','off')
	if(text != ''):		
		if (upper == 'on'):
			text=text.upper()
		if (lower == 'on'):
			text=text.lower()
		if (title == 'on'):
			text=text.title()
		if (switch == 'on'):
			text=text.swapcase()
		if punctuation == 'on':
			punctuations = string.punctuation
			result = ''
			for char in text:
				if char not in punctuations:
					result += char
			text=result
		if space == 'on':
			result=''
			length=len(text)
			for i in range(length):
				if i+1 < length and text[i] == ' ' and text[i+1] == ' ':
					continue
				result += text[i]
			text=result
		analyzed = text
		charCount=len(analyzed)
		wordCount=len(analyzed.strip().split())
	params={'analyzed_text':analyzed, 'wordCount':wordCount, 'charCount':charCount}
	return render(request,'about.html',params)