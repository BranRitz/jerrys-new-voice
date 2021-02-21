
# docker-compose run api python manage.py makemigrations
# docker-compose run api python manage.py migrate

import uuid

from django.db import models
from django.conf import settings
from django.db.models import JSONField
from django.contrib.postgres.fields import ArrayField


class WordListLevels(models.Model):
    """
    Stores the different levels available for a session.
    """
    word_list_level_id = models.AutoField(primary_key=True)
    level_name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return 'Level ID: %s | Name: %s' % (self.word_list_level_id, self.level_name)


class WordListCategories(models.Model):
    """
    Stores the different categories available for a session.
    """
    word_list_category_id = models.AutoField(primary_key=True)
    category_name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return 'Category ID: %s | Name: %s' % (self.word_list_category_id, self.category_name)


class WordLists(models.Model):
    """
    Contains the different list of words, as well as information to identify these list of words.
    """
    word_list_id = models.AutoField(primary_key=True)
    category = models.ForeignKey(WordListCategories, to_field="category_name", null=True, blank=True,
                                 db_column="category_name", on_delete=models.SET_NULL)
    level = models.ForeignKey(WordListLevels, to_field="level_name", null=True, blank=True,
                              db_column="level_name", on_delete=models.SET_NULL)
    words = ArrayField(models.CharField(max_length=255))

    def __str__(self):
        return 'Word List ID: %s | Category: %s | Level: %s' % (self.word_list_id, self.category, self.level)


class UserProgresses(models.Model):
    """
    Tracks how far a user has gotten on the different word lists. Accumulates information across all sessions.
    """
    user_progress_id = models.AutoField(primary_key=True)
    word_list = models.ForeignKey(WordLists, on_delete=models.CASCADE)
    learning = ArrayField(models.CharField(max_length=255))
    mastered = ArrayField(models.CharField(max_length=255), default=list)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    completed = models.BooleanField(default=False)

    def __str__(self):
        return 'Progress ID: %s | Word List: %s | User: %s' % (self.user_progress_id, self.word_list, self.user)


class Sessions(models.Model):
    """
    Tracks and stores information related to a single session.
    """
    session_id = models.AutoField(primary_key=True)
    time_started = models.DateTimeField()
    time_ended = models.DateTimeField(null=True)
    attempts = JSONField(default=dict)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    word_list = models.ForeignKey(WordLists, on_delete=models.CASCADE)

    def __str__(self):
        return 'Session ID: %s | Word List: %s | User: %s' % (self.session_id, self.word_list, self.user)
