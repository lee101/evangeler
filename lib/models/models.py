from google.appengine.ext import ndb
import fixtures

class BaseModel(ndb.Model):
    def default(self, o): return o.to_dict()


    # def to_dict(self):
    # return dict([(p, unicode(getattr(self, p))) for p in self._properties])


class Post(BaseModel):
    text = ndb.StringProperty()
    link = ndb.StringProperty()


class Company(BaseModel):
    page_id = ndb.StringProperty()
    name = ndb.StringProperty()
    url_title = ndb.StringProperty()
    description = ndb.StringProperty()
    about = ndb.StringProperty()

    pic = ndb.StringProperty()

    facebook_link = ndb.StringProperty()
    website_link = ndb.StringProperty()
    twitter_name = ndb.StringProperty()
    google_link = ndb.StringProperty()

    tags = ndb.StringProperty(repeated=True)
    status = ndb.IntegerProperty()  # draft live deleted

    # contests = ndb.StructuredProperty(Contest, repeated=True)
    @classmethod
    def getCompaniesByKeys(cls, keys):
        return cls.query(cls.key.IN(keys)).fetch()

    @classmethod
    def getCompaniesByIds(cls, ids):
        return cls.query(cls.page_id.IN(ids)).fetch()

    @classmethod
    def deleteByFacebookId(cls, id):
        return cls.query(cls.page_id == id).delete()

    @classmethod
    def getByPageId(cls, id):
        return cls.query(cls.page_id == id).get()

    @classmethod
    def getByUrlTitle(cls, title):
        return cls.query(cls.url_title == title).get()

    @classmethod
    def randomOrder(cls, seed):
        return cls.query()


    @classmethod
    def deleteTestData(cls):
        companies = cls.query(cls.facebook_link == 'test').fetch(1000)
        for company in companies:
            Contest.hardDeleteByCompany(company)
        ndb.delete_multi([m.key for m in companies])


    @classmethod
    def getAllTitles(cls):
        all_titles = []

        if len(all_titles) <= 0:
            all_titles = map(lambda x: x.url_title, cls.query().fetch(50000, projection=[cls.url_title]))
        return all_titles


class Contest(BaseModel):
    url_title = ndb.StringProperty()
    uid = ndb.StringProperty()
    type = ndb.IntegerProperty()
    status = ndb.IntegerProperty(default=fixtures.STATUS['DRAFT'])  # draft live deleted finished

    title = ndb.StringProperty()
    about = ndb.StringProperty()

    description = ndb.StringProperty()
    tags = ndb.StringProperty(repeated=True)

    duration = ndb.IntegerProperty()
    launched = ndb.DateTimeProperty()

    company_key = ndb.KeyProperty(kind=Company)
    website_link = ndb.StringProperty()

    created = ndb.DateTimeProperty(auto_now_add=True)
    updated = ndb.DateTimeProperty(auto_now=True)


    @classmethod
    def getByCompanyKey(cls, id):
        return cls.query(cls.key == id).fetch()

    @classmethod
    def getByUrlTitle(cls, title):
        return cls.query(cls.url_title == title).get()

    @classmethod
    def getByUID(cls, uid):
        return cls.query(cls.uid == uid).get()

    @classmethod
    def hardDeleteByCompany(cls, company):
        ndb.delete_multi([m.key for m in cls.query(cls.company_key == company.key).fetch(10000)])


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

    @classmethod
    def deleteTestData(cls):
        return ndb.delete_multi([m.key for m in cls.query(cls.facebook_id == 'test').fetch(1000)])
