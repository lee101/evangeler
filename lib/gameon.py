#!/usr/bin/env python

from models.models import *
from google.appengine.api import users
from gameon_utils import GameOnUtils
import os
import webapp2
import facebook
from webapp2_extras import sessions
import utils
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
    """Provides access to the active Facebook user in self.current_user

    The property is lazy-loaded on first access, using the cookie saved
    by the Facebook JavaScript SDK to determine the user ID of the active
    user. See http://developers.facebook.com/docs/authentication/ for
    more information.
    """

    @property
    def current_user(self):
        #===== Google Auth
        user = users.get_current_user()
        if user:
            dbUser = User.byId(user.user_id())
            if dbUser:
                return dbUser
            else:

                dbUser = User()
                dbUser.id = user.user_id()
                dbUser.name = user.nickname()
                dbUser.email = user.email().lower()
                dbUser.put()
                return dbUser

        #===== FACEBOOK Auth
        if self.session.get("user"):
            # User is logged in
            return User.byId(self.session.get("user")["id"])
        else:
            # Either used just logged in or just saw the first page
            # We'll see here
            fbcookie = facebook.get_user_from_cookie(self.request.cookies,
                                                     FACEBOOK_APP_ID,
                                                     FACEBOOK_APP_SECRET)
            if fbcookie:
                # Okay so user logged in.
                # Now, check to see if existing user
                user = User.byId(fbcookie["uid"])
                if not user:
                    # Not an existing user so get user info
                    graph = facebook.GraphAPI(fbcookie["access_token"])
                    profile = graph.get_object("me")
                    user = User(
                        key_name=str(profile["id"]),
                        id=str(profile["id"]),
                        name=profile["name"],
                        profile_url=profile["link"],
                        access_token=fbcookie["access_token"]
                    )
                    user.put()
                elif user.access_token != fbcookie["access_token"]:
                    user.access_token = fbcookie["access_token"]
                    user.put()
                    # User is now logged in
                self.session["user"] = dict(
                    name=user.name,
                    profile_url=user.profile_url,
                    id=user.id,
                    access_token=user.access_token
                )
                return user
                #======== use session cookie user
        anonymous_cookie = self.request.cookies.get('wsuser', None)
        if anonymous_cookie is None:
            cookie_value = utils.random_string()
            self.response.set_cookie('wsuser', cookie_value, max_age=15724800)
            anon_user = User()
            anon_user.cookie_user = 1
            anon_user.id = cookie_value
            anon_user.put()
            return anon_user
        else:
            anon_user = User.byId(anonymous_cookie)
            if anon_user:
                return anon_user
            cookie_value = utils.random_string()
            self.response.set_cookie('wsuser', cookie_value, max_age=15724800)
            anon_user = User()
            anon_user.cookie_user = 1
            anon_user.id = cookie_value
            anon_user.put()
            return anon_user

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
        currentUser = self.current_user
        self.response.headers['Content-Type'] = 'application/json'
        self.response.out.write(json.dumps(currentUser.to_dict(), cls=GameOnUtils.MyEncoder))




class IsGoldHandler(BaseHandler):
    def get(self):
        currentUser = self.current_user
        if currentUser.gold:
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


class LogoutHandler(BaseHandler):
    def get(self):
        if self.current_user is not None:
            self.session['user'] = None


class TestsHandler(BaseHandler):
    def get(self):
        try:
            self.render('templates/tests.jinja2')
        except Exception as e:
            logging.error(e)


routes = [
    ('/lib/getuser', GetUserHandler),
    ('/lib/isgold', IsGoldHandler),
    ('/lib/tests', TestsHandler),

]
