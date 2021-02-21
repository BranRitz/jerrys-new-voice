
from rest_framework.views import APIView

from server.models import WordListCategories, WordListLevels, WordLists, UserProgresses, Sessions
from server.serializers import WordListCategoriesSerializer, WordListLevelsSerializer, WordListsSerializer, \
    UserProgressesSerializer, SessionsSerializer


# ---- WordListCategories table management
class CategoryByIdView(APIView):
    """

    """
    def get(self, request, *args, **kwargs):
        pass

    def post(self, request, *args, **kwargs):
        pass

    def put(self, request, *args, **kwargs):
        pass


class CategoriesView(APIView):
    """

    """
    def get(self, request, *args, **kwargs):
        pass


# ---- WordListLevels table management
class LevelByIdView(APIView):
    """

    """
    def get(self, request, *args, **kwargs):
        pass

    def post(self, request, *args, **kwargs):
        pass

    def put(self, request, *args, **kwargs):
        pass


class LevelsView(APIView):
    """

    """
    def get(self, request, *args, **kwargs):
        pass


# ---- UserProgresses table management
class UserProgressByIdView(APIView):
    """

    """
    def get(self, request, *args, **kwargs):
        pass

    def post(self, request, *args, **kwargs):
        pass

    def put(self, request, *args, **kwargs):
        pass


class UserProgressesView(APIView):
    """

    """
    def get(self, request, *args, **kwargs):
        pass


# ---- Sessions table management
class SessionByIdView(APIView):
    """

    """
    def get(self, request, *args, **kwargs):
        pass

    def post(self, request, *args, **kwargs):
        pass

    def put(self, request, *args, **kwargs):
        pass


class SessionsView(APIView):
    """

    """
    def get(self, request, *args, **kwargs):
        pass


# ---- WordLists table management
class WordListByIdView(APIView):
    """

    """
    def get(self, request, *args, **kwargs):
        pass

    def post(self, request, *args, **kwargs):
        pass

    def put(self, request, *args, **kwargs):
        pass

    def delete(self, request, *args, **kwargs):
        pass


class WordListsView(APIView):
    """

    """
    def get(self, request, *args, **kwargs):
        pass
