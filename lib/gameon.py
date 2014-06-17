#!/usr/bin/env python

import os
import json
import datetime

import webapp2
from webapp2_extras import sessions
import jinja2

from models.models import *
from gameon_utils import GameOnUtils

import models.fixtures


# application-specific imports

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


class CreateCompanyHandler(BaseHandler):
    def get(self):
        page_id = int(self.request.get('page_id'))
        company = Company.getByPageId(page_id)
        if not company:
            company = Company()

        company.page_id = page_id
        company.facebook_link = self.request.get('facebook_link')

        company.name = self.request.get('name')
        # TODO ensure url_title is unique
        company.url_title = self.request.get('url_title')
        company.description = self.request.get('description')
        company.about = self.request.get('about')

        company.pic = self.request.get('pic')

        company.website_link = self.request.get('website_link')
        company.status = int(self.request.get('status', 1))

        company.tags = self.request.get_all('tags[]')

        company.put()

        self.response.out.write('success')


class CreateContestHandler(BaseHandler):

    # @ndb.transactional(retries=5)
    def get(self):
        uid = self.request.get('uid')
        contest = Contest.getByUID(uid)
        if not contest:
            contest = Contest()
            contest.uid = uid

        if self.request.get('launching'):
            contest.launched = datetime.datetime.now()
            contest.status = fixtures.STATUS['LIVE']
        contest.duration = int(self.request.get('duration'))

        page_id = int(self.request.get('page_id'))
        if page_id:
            company = Company.getByPageId(page_id)
            contest.page_id = company.page_id


        contest.website_link = self.request.get('website_link')

        contest.type = int(self.request.get('type'))

        contest.title = self.request.get('title')
        contest.about = self.request.get('about')
        contest.url_title = GameOnUtils.urlEncode(contest.title)

        contest.description = self.request.get('description')
        contest.tags = self.request.get_all('tags[]')

        contest.put()

        self.response.headers['Content-Type'] = 'application/json'
        self.response.out.write(json.dumps(contest, cls=GameOnUtils.MyEncoder))


class GetCompanyHandler(BaseHandler):
    def get(self):

        ids = map(lambda id: int(id), self.request.get_all('ids[]'))
        if ids:
            companies = Company.getCompaniesByIds(ids)
            get_company_queries = dict()
            companyToContests = dict()
            for company in companies:
                get_company_queries[company.page_id] = Contest.getAsyncByCompany(company)

            for company in companies:
                companyToContests[company.page_id] = get_company_queries[company.page_id].get_result()

            companydicts = []
            for company in companies:
                company_to_dict = company.to_dict()
                company_to_dict['contests'] = companyToContests[company.page_id]
                companydicts.append(company_to_dict)

            self.response.headers['Content-Type'] = 'application/json'
            self.response.out.write(json.dumps(companydicts, cls=GameOnUtils.MyEncoder))

        else:
            url_title = self.request.get('url_title')

            company = Company.getByUrlTitle(url_title)
            self.response.headers['Content-Type'] = 'application/json'
            self.response.out.write(json.dumps(company, cls=GameOnUtils.MyEncoder))

class GetContestHandler(BaseHandler):
    def get(self):

        uid = self.request.get('uid')

        contest = Contest.getByUID(uid)

        self.response.headers['Content-Type'] = 'application/json'
        self.response.out.write(json.dumps(contest, cls=GameOnUtils.MyEncoder))


class DeleteAllTestDataHandler(BaseHandler):
    def get(self):
        Company.deleteTestData()
        User.deleteTestData()

        self.response.out.write('success')


routes = [
    ('/lib/getuser', GetUserHandler),
    ('/lib/getorcreatenewuser', GetOrCreateUserHandler),
    ('/lib/saveaccesstoken', SaveAccessTokenHandler),
    ('/lib/isgold', IsGoldHandler),
    ('/lib/createcompany', CreateCompanyHandler),
    ('/lib/createcontest', CreateContestHandler),
    ('/lib/getcompanies', GetCompanyHandler),
    ('/lib/getcontest', GetContestHandler),
    ('/lib/deletealltestdata', DeleteAllTestDataHandler),

]
