var UserModel = function (userJSON) {


    userJSON.createCompany = function (data, callback) {
        if (typeof callback == 'undefined') {
            callback = function (data) {
            }
        }
        $.ajax({
            "url": "/lib/createcompany",
            "data": data,
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
        userJSON.companies.push(data);
    };
    userJSON.deleteCompany = function (id, callback) {
        if (typeof callback == 'undefined') {
            callback = function (data) {
            }
        }
        $.ajax({
            "url": "/lib/deletecompany",
            "data": {facebook_id:id},
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
        userJSON.companies = _.filter(userJSON.companies, function(comp){
            return comp.facebook_id != id;
        });
    };

    userJSON.saveAccessToken = function (token, callback) {
        if (typeof callback == 'undefined') {
            callback = function (data) {
            }
        }
        $.ajax({
            "url": "/lib/saveaccesstoken",
            "data": {'facebook_access_token': token},
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
            callback(UserModel({
                cookie_id: null,
                facebook_id: null,
                facebook_profile_url: null,
                companies: [],
                facebook_access_token: null
            }))
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


    $.ajax({
        "url": "/lib/getuser",
        "data": {},
        "success": function (user) {
            self.user = UserModel(user);
        },
        "type": "GET",
        "cache": false,
        "error": function (xhr, error, thrown) {
            if (error == "parsererror") {
            }
        }
    });

    return self;
})();
