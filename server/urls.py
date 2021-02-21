from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    url('^api/v1/categories/(?P<category_id>.+)', views.CategoriesView.as_view()),
    url('^api/v1/categories', views.CategoryByIdView.as_view()),

    url('^api/v1/levels/(?P<level_id>.+)', views.LevelsView.as_view()),
    url('^api/v1/levels', views.LevelByIdView.as_view()),

    url('^api/v1/user-progresses/(?P<progress_id>.+)', views.UserProgressesView.as_view()),
    url('^api/v1/user-progresses', views.UserProgressByIdView.as_view()),

    url('^api/v1/sessions/(?P<session_id>.+)', views.SessionsView.as_view()),
    url('^api/v1/sessions', views.SessionByIdView.as_view()),

    url('^api/v1/word-lists/(?P<word_list_id>.+)', views.WordListsView.as_view()),
    url('^api/v1/word-lists', views.WordListByIdView.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
