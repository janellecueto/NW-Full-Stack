from django.http import Http404, HttpResponse

from django.shortcuts import render, redirect

from django.views.generic import DetailView, ListView

from .models import User

class UserListView(ListView):
    model = User
    template_name = 'users/index.html'

    def get_context_data(self, **kwargs):
        context = super(UserListView, self).get_context_data(**kwargs)

        # In real life we'd retrieve this from the session.
        context['name'] = 'Adonis'
        
        return context

class UserDetailView(DetailView):
    model = User
    template_name = 'users/detail.html'

def add(request):

    # context = { 'header' : 'This is the add view!'}

    # return render(request, 'users/add.html', context)
    if request.method == 'POST':
        complete = True
        missing = None

        for key in ['first-name', 'last-name', 'email', 'age']:
            if not request.POST[key]:
                complete = False
                missing = key
        
        if not complete:
            return render(request, 'users/add.html', {'error': "Error: Please include data for {0}".format(missing) })
        else:
            User(
                first_name=request.POST['first-name'],
                last_name=request.POST['last-name'],
                email=request.POST['email'],
                age=request.POST['age']
            ).save()

        return redirect('users:index')
    else:
        return render(request, 'users/add.html', {'header': 'GET'})
