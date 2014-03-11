from google.appengine.ext import ndb


class BaseModel(ndb.Model):
    def default(self, o): return o.to_dict()

    # def to_dict(self):
    #    return dict([(p, unicode(getattr(self, p))) for p in self._properties])


class Post(BaseModel):
    text = ndb.StringProperty()
    link = ndb.StringProperty()

class Contest(BaseModel):
    name = ndb.StringProperty()
    title = ndb.StringProperty()
    description = ndb.StringProperty()

    website_link = ndb.StringProperty()

    facebook_post = ndb.StructuredProperty(Post)

    tags = ndb.IntegerProperty(repeated = True)



class Company(BaseModel):
    name = ndb.StringProperty()
    title = ndb.StringProperty()
    description = ndb.StringProperty()
    facebook_link = ndb.StringProperty()
    website_link = ndb.StringProperty()
    tags = ndb.IntegerProperty(repeated=True)

    pages = ndb.StructuredProperty(Contest, repeated=True)


class User(BaseModel):
    cookie_id = ndb.StringProperty(required=True)

    name = ndb.StringProperty()
    email = ndb.StringProperty()

    gold = ndb.IntegerProperty()
    is_admin = ndb.IntegerProperty()

    created = ndb.DateTimeProperty(auto_now_add=True)
    updated = ndb.DateTimeProperty(auto_now=True)

    facebook_id = ndb.StringProperty()
    facebook_profile_url = ndb.StringProperty()
    facebook_access_token = ndb.StringProperty()

    companies = ndb.StructuredProperty(Company, repeated=True)


    @classmethod
    def byId(cls, id):
        return cls.query(cls.id == id).get()

    @classmethod
    def buyFor(cls, userid):
        dbuser = User.byId(userid)
        dbuser.gold = 1
        dbuser.put()

    @classmethod
    def byToken(cls, token):
        return cls.query(cls.access_token == token).get()


class Postback(BaseModel):
    jwtPostback = ndb.TextProperty()
    orderId = ndb.StringProperty()
    price = ndb.StringProperty()
    currencyCode = ndb.StringProperty()
    time = ndb.DateTimeProperty(auto_now_add=True)
