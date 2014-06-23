window.models = new (function () {
    "use strict";
    var self = this;

    var companyCache = {};
    var ContestModel = function (contest) {
        contest.tags = contest.tags || [];
        contest.tagsString = contest.tags.join(', ');
        return contest;
    };

    var CompanyModel = function (company) {
        company.page_id = +company.page_id;
        if (!company.contests) {
            company.contests = [];
        }
        else {
            for (var i = 0; i < company.contests.length; i++) {
                company.contests[i] = ContestModel(company.contests[i]);
            }
        }
        return company
    };

    self.company = {};
    self.company.getCompaniesContests = function (companies) {
        return  _.filter(_.flatten(_.map(companies, function (company) {
            return company.contests;
        })), function (company) {
            return !!company;
        });
    };

    self.company.getCompaniesContestByUid = function (companies, uid) {
        var currentContests = self.company.getCompaniesContests(companies);
        return _.where(currentContests, {uid: uid})[0];
    };

    function getCompanies(ids, callback) {
        var companies = [];
        var requiredCompanyIds = [];
        for (var i = 0; i < ids.length; i++) {
            var id = ids[i];
            if (companyCache[id]) {
                companies.push(companyCache[id])
            }
            else {
                requiredCompanyIds.push(id)
            }
        }
        if (requiredCompanyIds.length >= 1) {
            $.ajax({
                "url": "/lib/getcompanies",
                "data": {'ids': requiredCompanyIds},
                "success": function (data) {
                    for (var i = 0; i < data.length; i++) {
                        companies.push(CompanyModel(data[i]));
                    }
                    callback(companies);
                },
                "type": "GET",
                "cache": false,
                "error": function (xhr, error, thrown) {
                    if (error == "parsererror") {
                    }
                }
            });
        }
        else {
            callback(companies);
        }
    }

    var UserModel = function (userJSON) {

        var FbPages = [];
        userJSON.getCompanies = function (callback) {
            facebookWrapper.getFaceBookPages(function (data) {
                var pages = data.data;
                FbPages = pages;
                var companyids = _.map(pages, function (page) {
                    return  page.page_id
                });
                getCompanies(companyids, callback)

            })
        };
        userJSON.getContests = function (callback, errorcallback) {
            userJSON.getCompanies(function (companies) {
                callback(self.company.getCompaniesContests(companies));
            });
        };

        userJSON.createCompany = function (data, callback, errorcallback) {
            data.url_title = evutils.urlencode(data.name);
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
                    errorcallback(error)
                }
            });
            companyCache[data.page_id] = CompanyModel(data);
        };

        userJSON.createContest = function (data, callback, errorcallback) {
            if (typeof callback == 'undefined') {
                callback = function (data) {
                }
            }
            $.ajax({
                "url": "/lib/createcontest",
                "data": data,
                "success": function (contest) {
                    contest = ContestModel(contest);
                    userJSON.getCompanies(function (companies) {
                        var company = _.where(companies, { page_id: contest.page_id })[0];
                        finder:
                            for (var j = 0; j < companies.length; j++) {
                                var companiesContests = companies[j].contests;
                                for (var i = 0; i < companiesContests.length; i++) {
                                    var companiesContest = companiesContests[i];
                                    if (companiesContest.uid === contest.uid) {
                                        companies[j].contests.splice(i, 1);
                                        break finder;
                                    }
                                }
                            }
                        company.contests.unshift(contest);

                        callback(contest);
                    });
                },
                "type": "GET",
                "cache": false,
                "error": function (xhr, error, thrown) {
                    if (error == "parsererror") {
                    }
                    errorcallback(error);
                }
            });
        };

        userJSON.getUnstartedPages = function (callback) {

            userJSON.getCompanies(function (companies) {
                var idToCompanyMap = {};
                for (var i = 0; i < companies.length; i++) {
                    var page = companies[i];
                    idToCompanyMap[page.page_id] = page;
                }
                var unstartedpages = _.filter(FbPages, function (page) {
                    return !idToCompanyMap[page.page_id];
                });
                for (var i = 0; i < unstartedpages.length; i++) {
                    var company = unstartedpages[i];
                    company.url_title = evutils.urlencode(company.name);
                }
                callback(unstartedpages);
            })
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
            }));
        }
    };

    self.clearCompanyCache = function () {
        companyCache = {};
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

    self.getContestByUid = function (uid, callback) {
    };

    self.getPageOfCompanies = function () {

    };

    self.getCompanyByUrlTitle = function (url_title, callback) {
        $.ajax({
            "url": "/lib/getcompanies",
            "data": {'url_title': url_title},
            "success": function (data) {
                callback(CompanyModel(data));
            },
            "type": "GET",
            "cache": false,
            "error": function (xhr, error, thrown) {
                if (error == "parsererror") {
                }
            }
        });
    };


    self.deleteAllTestData = function (callback) {
        $.ajax({
            "url": "/lib/deletealltestdata",
            "data": {},
            "success": function (data) {
                callback(data);
            },
            "type": "GET",
            "cache": false,
            "error": function (xhr, error, thrown) {
                if (error == "parsererror") {
                }
            }
        });
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
