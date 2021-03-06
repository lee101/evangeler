#!/usr/bin/env python
import json
import os
import urllib

from google.appengine.ext.ndb import Cursor
import webapp2
import jinja2

from Models import *
from lib import gameon
from lib.models import fixtures
from ws import ws
from lib.gameon_utils import GameOnUtils
from lib.models.models import Company, Contest


JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

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
            'urlencode': urllib.quote_plus,
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


class ContestCategoriesHandler(BaseHandler):
    def get(self):
        self.render('templates/contest-categories.jinja2')


class AboutHandler(BaseHandler):
    def get(self):
        self.render('templates/about.jinja2')


class ContactHandler(BaseHandler):
    def get(self):
        self.render('templates/contact.jinja2')


class RefundsHandler(BaseHandler):
    def get(self):
        self.render('templates/refunds.jinja2')


class CompaniesHandler(BaseHandler):
    def get(self):
        url_title = self.request.get('url_title')

        curs = Cursor(urlsafe=self.request.get('cursor'))
        page_size = 60
        if ws.debug:
            page_size = 1
        companies, next_curs, more = Company.randomOrder(1).fetch_page(page_size, start_cursor=curs)

        if more and next_curs:
            next_page_cursor = next_curs.urlsafe()
        else:
            next_page_cursor = None
        extraParams = {
            'companies': companies,
            'next_page_cursor': next_page_cursor,
            'url_title': url_title,
        }
        self.render('templates/companies.jinja2', extraParams)


class CompanyHandler(BaseHandler):
    def get(self, url_title):
        extraParams = {
            'company': Company.getByUrlTitle(url_title),
            'url_title': url_title,
        }
        self.render('templates/company.jinja2', extraParams)


class SitemapHandler(webapp2.RequestHandler):
    def get(self):
        self.response.headers['Content-Type'] = 'text/xml'
        company_titles = Company.getAllTitles()
        contest_titles = Contest.getAllTitles()
        template_values = {
            'company_titles': company_titles,
            'contest_titles': contest_titles
        }
        template = JINJA_ENVIRONMENT.get_template('templates/sitemap.xml')
        self.response.write(template.render(template_values))


class NotFoundHandler(BaseHandler):
    def get(self):
        self.response.set_status(404)
        self.render('templates/404.jinja2')


class SlashMurdererApp(webapp2.RequestHandler):
    def get(self, url):
        self.redirect(url)


app = ndb.toplevel(
    webapp2.WSGIApplication([
                                ('/', MainHandler),
                                ('(.*)/$', SlashMurdererApp),
                                ('/tests', TestHandler),
                                ('/privacy', PrivacyHandler),
                                ('/terms', TermsHandler),
                                ('/how-it-works', HowHandler),
                                ('/contest-categories', ContestCategoriesHandler),
                                ('/about', AboutHandler),
                                ('/contact', ContactHandler),
                                ('/refunds', RefundsHandler),
                                ('/sitemap', SitemapHandler),
                                ('/companies', CompaniesHandler),

                                # non prerendered pages
                                ('/account', MainHandler),
                                ('/new-page', MainHandler),
                                ('/new-page/..*', MainHandler),
                                ('/launch/reshare', MainHandler),
                                ('/launch/hashtag', MainHandler),
                                ('/companies/..*/edit', MainHandler),
                                ('/contests/..*/..*/edit', MainHandler),

                                ('/companies/(..*)', CompanyHandler),

                            ] + gameon.routes + [
                                ('/.*', NotFoundHandler),
                            ]
                            , debug=ws.debug, config=config))
