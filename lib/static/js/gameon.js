
var UserModel = function (userJSON) {

    userJSON.saveScore = function (game_mode, score, callback) {
        if (typeof callback == 'undefined') {
            callback = function (data) {
            }
        }
        $.ajax({
            "url": "/lib/savescore",
            "data": {game_mode: game_mode, score: score},
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
        userJSON.scores.push({'game_mode': game_mode, 'score': score});
        reorderScores();
    };

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



    self.getUser(function (user) {
        $(document).ready(function () {
        });
    });

    return self;
})();
