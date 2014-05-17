#!/usr/bin/env python

from models.models import *
from google.appengine.api import users
from gameon_utils import GameOnUtils
import os
import webapp2
import facebook
from webapp2_extras import sessions
import jinja2

import json
import jwt

# application-specific imports
from sellerinfo import SELLER_ID
from sellerinfo import SELLER_SECRET

FACEBOOK_APP_ID = "138831849632195"
FACEBOOK_APP_SECRET = "93986c9cdd240540f70efaea56a9e3f2"

config = {'webapp2_extras.sessions': dict(secret_key='93986c9cdd240540f70efaea56a9e3f2')}

JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'])


class BaseHandler(webapp2.RequestHandler):
    def current_user(self):

        anonymous_cookie = self.request.cookies.get('evangelerloggedin', None)
        if anonymous_cookie is None:
            return None
        else:
            user = User.byId(anonymous_cookie)
            if user:
                return user
            return None


    def render(self, view_name, extraParams={}):

        template_values = {
            # 'ws': ws,
            # 'facebook_app_id': FACEBOOK_APP_ID,
            # 'MEDIUM':MEDIUM,
            # 'EASY':EASY,
            # 'HARD':HARD,
            # 'glogin_url': users.create_login_url(self.request.uri),
            # 'glogout_url': users.create_logout_url(self.request.uri),
            # 'url':self.request.uri,
            # 'num_levels': len(LEVELS)
        }
        template_values.update(extraParams)

        template = JINJA_ENVIRONMENT.get_template(view_name)
        self.response.write(template.render(template_values))

    def dispatch(self):
        """
        This snippet of code is taken from the webapp2 framework documentation.
        See more at
        http://webapp-improved.appspot.com/api/webapp2_extras/sessions.html

        """
        self.session_store = sessions.get_store(request=self.request)
        try:
            webapp2.RequestHandler.dispatch(self)
        except:
            pass
        finally:
            self.session_store.save_sessions(self.response)

    @webapp2.cached_property
    def session(self):
        """
        This snippet of code is taken from the webapp2 framework documentation.
        See more at
        http://webapp-improved.appspot.com/api/webapp2_extras/sessions.html

        """
        return self.session_store.get_session()


class GetUserHandler(BaseHandler):
    def get(self):
        currentUser = self.current_user()
        if not currentUser:
            currentUser = User()
        self.response.headers['Content-Type'] = 'application/json'
        self.response.out.write(json.dumps(currentUser.to_dict(), cls=GameOnUtils.MyEncoder))


class GetOrCreateUserHandler(BaseHandler):
    def get(self):
        facebook_id = self.request.get('facebook_id')
        facebook_access_token = self.request.get('facebook_access_token')
        facebook_profile_url = self.request.get('facebook_profile_url')
        email = self.request.get('email')
        name = self.request.get('name')

        def get_or_create_user():
            user = User.byFacebookId(facebook_id)
            if user:
                self.response.set_cookie('evangelerloggedin', user.cookie_id, max_age=15724800)
                return user

            cookie_value = GameOnUtils.random_string()
            self.response.set_cookie('evangelerloggedin', cookie_value, max_age=15724800)
            user = User()
            user.cookie_id = cookie_value
            user.facebook_id = facebook_id
            user.facebook_access_token = facebook_access_token
            user.facebook_profile_url = facebook_profile_url
            user.email = email
            user.name = name
            user.put()
            return user

        user = get_or_create_user()


        user_to_dict = user.to_dict()

        self.response.headers['Content-Type'] = 'application/json'
        self.response.out.write(json.dumps(user_to_dict, cls=GameOnUtils.MyEncoder))


class IsGoldHandler(BaseHandler):
    def get(self):
        currentUser = self.current_user()
        if currentUser.gold:
            self.response.out.write('success')


class SaveAccessTokenHandler(BaseHandler):
    def get(self):
        currentUser = self.current_user()
        if currentUser:
            currentUser.facebook_access_token = self.request.get('facebook_access_token')
            currentUser.put()
            self.response.out.write('success')


class BuyHandler(BaseHandler):
    def get(self):
        # paymentAmount = "3.99"
        # CURRENCYCODE = "USD"
        # RETURNURL = "https://evangeler.appspot.com/buy"
        # CANCELURL = "https://evangeler.appspot.com/buy"

        self.render('buy.jinja2')

    def post(self):
        self.render('buy.jinja2')


class TestsHandler(BaseHandler):
    def get(self):
        try:
            self.render('templates/tests.jinja2')
        except Exception as e:
            logging.error(e)


class CreateCompanyHandler(BaseHandler):
    def get(self):
        company = Company.getByPageId(self.request.get('page_id'))
        if not company:
            company = Company()

        company.page_id = self.request.get('page_id')
        company.facebook_link = self.request.get('facebook_link')

        company.name = self.request.get('name')
        # TODO ensure url_title is unique
        company.url_title = GameOnUtils.urlEncode(company.name)
        company.description = self.request.get('description')
        company.about = self.request.get('about')

        company.pic = self.request.get('pic')

        company.website_link = self.request.get('website_link')
        company.status = int(self.request.get('status', 1))

        company.tags = self.request.get_all('tags[]')

        company.put()

        self.response.out.write('success')

class EditCompanyHandler(BaseHandler):
    def get(self):

        company = Company.getByPageId(self.request.get('page_id'))
        company.facebook_link = self.request.get('facebook_link')

        company.name = self.request.get('name')
        company.url_title = GameOnUtils.urlEncode(company.name)
        company.description = self.request.get('description')
        company.about = self.request.get('about')


        company.pic = self.request.get('pic')

        company.website_link = self.request.get('website_link')
        company.twitter_name = self.request.get('twitter_name')
        company.google_link = self.request.get('google_link')
        company.status = self.request.get('status')

        company.tags = self.request.get_all('tags[]')

        company.put()

        self.response.out.write('success')


class GetCompanyHandler(BaseHandler):
    def get(self):

        ids = self.request.get_all('ids[]')
        if ids:
            companies = Company.getCompaniesByIds(ids)
        else:
            url_title = self.request.get('url_title')

            companies = Company.getByUrlTitle(url_title)

        self.response.headers['Content-Type'] = 'application/json'
        self.response.out.write(json.dumps(companies, cls=GameOnUtils.MyEncoder))


routes = [
    ('/lib/getuser', GetUserHandler),
    ('/lib/getorcreatenewuser', GetOrCreateUserHandler),
    ('/lib/saveaccesstoken', SaveAccessTokenHandler),
    ('/lib/isgold', IsGoldHandler),
    ('/lib/tests', TestsHandler),
    ('/lib/createcompany', CreateCompanyHandler),
    ('/lib/editcompany', EditCompanyHandler),
    ('/lib/getcompanies', GetCompanyHandler),

]
