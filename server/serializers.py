from rest_framework import serializers

from server.models import Sessions, UserProgresses, WordLists, WordListCategories, WordListLevels


class SessionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sessions
        fields = '__all__'


class UserProgressesSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProgresses
        fields = '__all__'


class WordListsSerializer(serializers.ModelSerializer):
    class Meta:
        model = WordLists
        fields = '__all__'


class WordListCategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = WordListCategories
        fields = '__all__'


class WordListLevelsSerializer(serializers.ModelSerializer):
    class Meta:
        model = WordListLevels
        fields = '__all__'
