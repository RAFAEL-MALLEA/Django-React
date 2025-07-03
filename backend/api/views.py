from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


@api_view(['GET'])
def ping(request):
    """Simple ping endpoint to test API connectivity"""
    return Response({'message': 'pong'}, status=status.HTTP_200_OK)


@api_view(['GET'])
def demo(request):
    """Demo endpoint with sample data"""
    return Response({
        'message': 'Hello from Django API!',
        'status': 'success',
        'data': {
            'backend': 'Django',
            'frontend': 'React',
            'database': 'SQLite'
        }
    }, status=status.HTTP_200_OK)
