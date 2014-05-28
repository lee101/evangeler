(function () {
	"use strict";
	var companyCache = {};
	var CompanyModel = function (company) {
		company.page_id = +company.page_id;
		return company
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
			companyCache[data.page_id] = data;
		};

		userJSON.createContest = function (data, callback, errorcallback) {
			if (typeof callback == 'undefined') {
				callback = function (data) {
				}
			}
			$.ajax({
				"url": "/lib/createcontest",
				"data": data,
				"success": function (data) {
					callback(data)
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


	window.models = new (function () {
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
})();
