from django.db import models

class CompanyInfo(models.Model):
    mission = models.TextField()
    vision = models.TextField()
    objectives = models.TextField()

    def __str__(self):
        return "Company Information"