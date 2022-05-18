
# django rest framework
# django
from app.messages.models import Message
from app.messages.serializers import MessageSerializer
from rest_framework import mixins, status, viewsets
from rest_framework.permissions import IsAuthenticated

# serializers


class MessagesViewset(mixins.ListModelMixin,
                      mixins.CreateModelMixin,
                      mixins.RetrieveModelMixin,
                      mixins.UpdateModelMixin,
                      viewsets.GenericViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    permission_classes = [IsAuthenticated]


