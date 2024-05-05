# from django.db import models
# from django.contrib.auth import get_user_model

# class UserHistory(models.Model):
#     user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
#     original_text = models.CharField(max_length=255)
#     summarized_text = models.CharField(max_length=255)
#     timestamp = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return f"{self.user.username} - {self.action} - {self.summarized} -{self.timestamp}"


