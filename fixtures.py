import json


class Fixture(object):
    """docstring for Fixture"""

    def __init__(self):
        super(Fixture, self).__init__()

    def to_JSON(self):
        return json.dumps(self, default=lambda o: o.__dict__, sort_keys=True, indent=4)


STATUS = {
    'DRAFT':    1,
    'LIVE':     2,
    'FINISHED': 3,
    'DELETED':  4,
    'REFUNDED': 5,
}
