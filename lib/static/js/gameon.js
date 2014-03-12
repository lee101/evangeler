var UserModel = function (userJSON) {



    userJSON.deleteAllScores = function (callback) {
        if (typeof callback == 'undefined') {
            callback = function (data) {
            }
        }
        $.ajax({
            "url": "/lib/deleteallscores",
            "data": {},
            "success": function (data) {
                callback(data)
            },
            "type": "GET",
            "cache": false,
            "error": function (xhr, error, thrown) {
                if (error == "parsererror") {
                }
            }
        });
        userJSON.scores = [];
    };
    if (userJSON.facebook_profile_url) {
        userJSON.is_signed_in = true;
        userJSON.is_signed_out = false;
    }
    else {
        userJSON.is_signed_in = false;
        userJSON.is_signed_out = true;
        return userJSON;
    }

    return userJSON;
};
var models = new (function () {
    "use strict";
    var self = this;

    self.getUser = function (callback) {
        if (self.user) {
            callback(self.user);
        }
        else {

            $.ajax({
                "url": "/lib/getuser",
                "data": {},
                "success": function (user) {
                    self.user = UserModel(user);
                    callback(self.user);
                },
                "type": "GET",
                "cache": false,
                "error": function (xhr, error, thrown) {
                    if (error == "parsererror") {
                    }
                }
            });
        }
    };
    self.getOrCreateNewUser = function (options, callback) {
        $.ajax({
            "url": "/lib/getorcreatenewuser",
            "data": options,
            "success": function (user) {
                self.user = UserModel(user);
                callback(self.user);
            },
            "type": "GET",
            "cache": false,
            "error": function (xhr, error, thrown) {
                if (error == "parsererror") {
                }
            }
        });
        //TODO update client user
    };


//    self.getUser(function (user) {
//        $(document).ready(function () {
//        });
//    });

    return self;
})();
