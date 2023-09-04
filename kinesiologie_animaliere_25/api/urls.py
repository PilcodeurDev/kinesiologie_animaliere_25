from rest_framework import routers
from .views import ArticleViewSet

router = routers.DefaultRouter()
router.register(r'api/articles', ArticleViewSet, 'articles')

urlpatterns = router.urls
