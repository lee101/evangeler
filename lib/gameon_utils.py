import os
import json
import datetime
import random
import re
import string
from time import mktime
import urllib
from models.models import BaseModel

class GameOnUtils(object):
    debug = os.environ.get('SERVER_SOFTWARE', '').startswith('Development/')

    @classmethod
    def json_serializer(cls, obj):

        """Default JSON serializer."""
        import calendar, datetime

        if isinstance(obj, datetime.datetime):
            if obj.utcoffset() is not None:
                obj = obj - obj.utcoffset()
        millis = int(
            calendar.timegm(obj.timetuple()) * 1000 +
            obj.microsecond / 1000
        )
        return millis

    class MyEncoder(json.JSONEncoder):

        def default(self, obj):
            if isinstance(obj, datetime.datetime):
                return int(mktime(obj.timetuple()))
            if isinstance(obj, BaseModel):
                obj.key = None
                obj.id = None
                return obj.to_dict()

            return obj.__dict__ #json.JSONEncoder.default(self, obj.__dict__)


    @staticmethod
    def random_string(size=6, chars=string.ascii_letters + string.digits):
        """ Generate random string """
        return ''.join(random.choice(chars) for _ in range(size))


    @staticmethod
    def removeNonAscii(s):
        return "".join(i for i in s if ord(i) < 128)

    @classmethod
    def urlEncode(cls, s):
        s = cls.removeNonAscii(s.replace(" ", "-").lower())
        # s = s.translate(string.maketrans("", "", ), '!@#;:\',./<>?')
        s = re.sub("[\.\t\,\:;\(\)'@!\\\?#/<>\s]", "", s, 0, 0)
        return urllib.quote_plus(s)
