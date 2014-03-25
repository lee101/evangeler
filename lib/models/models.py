from google.appengine.ext import ndb


class BaseModel(ndb.Model):
    def default(self, o): return o.to_dict()

    # def to_dict(self):
    #    return dict([(p, unicode(getattr(self, p))) for p in self._properties])


class Post(BaseModel):
    text = ndb.StringProperty()
    link = ndb.StringProperty()


class Company(BaseModel):
    facebook_id = ndb.StringProperty()
    name = ndb.StringProperty()
    title = ndb.StringProperty()
    description = ndb.StringProperty()

    facebook_link = ndb.StringProperty()
    website_link = ndb.StringProperty()

    tags = ndb.IntegerProperty(repeated=True)
    status = ndb.IntegerProperty()  # draft live deleted

    # contests = ndb.StructuredProperty(Contest, repeated=True)
    @classmethod
    def getCompaniesByKeys(cls, keys):
        return cls.query(cls.key.IN(keys)).fetch()

    @classmethod
    def deleteByFacebookId(cls, id):
        return cls.query(cls.facebook_id == id).delete()

    @classmethod
    def getByFbId(cls, id):
        return cls.query(cls.facebook_id == id).get()


class Contest(BaseModel):
    url_key = ndb.StringProperty()

    name = ndb.StringProperty()
    title = ndb.StringProperty()
    description = ndb.StringProperty()

    type = ndb.IntegerProperty()
    status = ndb.IntegerProperty()  # draft live deleted finished

    website_link = ndb.StringProperty()

    facebook_post = ndb.StructuredProperty(Post)

    tags = ndb.IntegerProperty(repeated=True)

    company_key = ndb.KeyProperty(kind=Company)

    created = ndb.DateTimeProperty(auto_now_add=True)
    updated = ndb.DateTimeProperty(auto_now=True)


class User(BaseModel):
    cookie_id = ndb.StringProperty(required=True)

    name = ndb.StringProperty()
    email = ndb.StringProperty()

    is_admin = ndb.IntegerProperty()

    created = ndb.DateTimeProperty(auto_now_add=True)
    updated = ndb.DateTimeProperty(auto_now=True)

    facebook_id = ndb.StringProperty()
    facebook_profile_url = ndb.StringProperty()
    facebook_access_token = ndb.StringProperty()

    @classmethod
    def byId(cls, id):
        return cls.query(cls.cookie_id == id).get()

    @classmethod
    def byFacebookId(cls, id):
        return cls.query(cls.facebook_id == id).get()
