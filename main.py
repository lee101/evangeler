#!/usr/bin/env python
import json

from Models import *
from lib import gameon
from ws import ws
import os
import webapp2
import jinja2
import fixtures
from lib.gameon_utils import GameOnUtils

JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'])

config = {'webapp2_extras.sessions': dict(secret_key='93986c9cdd240540f70efaea56a9e3f2')}


class BaseHandler(webapp2.RequestHandler):
    def render(self, view_name, extraParams={}):
        template_values = {
            'fixtures': fixtures,
            'ws': ws,
            'json': json,
            'GameOnUtils': GameOnUtils,
            'path': self.request.path,
            'url': self.request.uri,
            # 'facebook_app_id': FACEBOOK_APP_ID,
            # 'glogin_url': users.create_login_url(self.request.uri),
            # 'glogout_url': users.create_logout_url(self.request.uri),
            # 'num_levels': len(LEVELS)
        }
        template_values.update(extraParams)

        template = JINJA_ENVIRONMENT.get_template(view_name)
        self.response.write(template.render(template_values))


class MainHandler(BaseHandler):
    def get(self):
        noads = self.request.get('noads', False)
        self.render('templates/index.jinja2', {'noads': noads})


class TestHandler(BaseHandler):
    def get(self):
        self.render('templates/tests.jinja2')


class PrivacyHandler(BaseHandler):
    def get(self):
        self.render('templates/privacy.jinja2')


class TermsHandler(BaseHandler):
    def get(self):
        self.render('templates/terms.jinja2')


class HowHandler(BaseHandler):
    def get(self):
        self.render('templates/how-it-works.jinja2')


class CategoriesHandler(BaseHandler):
    def get(self):
        self.render('templates/categories.jinja2')


class AboutHandler(BaseHandler):
    def get(self):
        self.render('templates/about.jinja2')


class ContactHandler(BaseHandler):
    def get(self):
        self.render('templates/contact.jinja2')


class RefundsHandler(BaseHandler):
    def get(self):
        self.render('templates/refunds.jinja2')


class SitemapHandler(webapp2.RequestHandler):
    def get(self):
        self.response.headers['Content-Type'] = 'text/xml'
        template_values = {
        }
        template = JINJA_ENVIRONMENT.get_template('templates/sitemap.xml')
        self.response.write(template.render(template_values))


class NotFoundHandler(BaseHandler):
    def get(self):
        self.response.set_status(404)
        self.render('templates/404.jinja2')


app = ndb.toplevel(webapp2.WSGIApplication([
                                               ('/', MainHandler),
                                               ('/tests', TestHandler),
                                               ('/privacy', PrivacyHandler),
                                               ('/terms', TermsHandler),
                                               ('/how-it-works', HowHandler),
                                               ('/categories', CategoriesHandler),
                                               ('/about', AboutHandler),
                                               ('/contact', ContactHandler),
                                               ('/refunds', RefundsHandler),
                                               ('/sitemap', SitemapHandler),
                                               # non prerendered pages
                                               ('/account', MainHandler),
                                               ('/new-page', MainHandler),
                                               ('/launch/reshare', MainHandler),

                                           ] + gameon.routes + [
                                               ('/.*', NotFoundHandler),
                                           ]
                                           , debug=ws.debug, config=config))
