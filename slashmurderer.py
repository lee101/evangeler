from google.appengine.ext import webapp
from google.appengine.ext.webapp.util import run_wsgi_app




application = webapp.WSGIApplication(
    [('(.*)/$', SlashMurdererApp)]
)


def main():
    run_wsgi_app(application)
