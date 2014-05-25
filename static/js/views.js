(function () {
    "use strict";
    window.APP = window.APP || {Routers: {}, Collections: {}, Models: {}, Views: {}};

    APP.Views['/'] = Backbone.View.extend({
        initialize: function (options) {
        },

        render: function () {
            this.$el.html(evutils.render('templates/shared/start.jinja2'));

            return this;
        }
    });

    APP.Views['/how-it-works'] = Backbone.View.extend({
        initialize: function (options) {
        },

        render: function () {
            this.$el.html(evutils.render('templates/shared/how-it-works.jinja2'));
            return this;
        }
    });

    APP.Views['/contact'] = Backbone.View.extend({
        initialize: function (options) {
        },

        render: function () {
            this.$el.html(evutils.render('templates/shared/contact.jinja2'));
            return this;
        }
    });

    APP.Views['/about'] = Backbone.View.extend({
        initialize: function (options) {
        },

        render: function () {
            this.$el.html(evutils.render('templates/shared/about.jinja2'));
            return this;
        }
    });
    APP.Views['/terms'] = Backbone.View.extend({
        initialize: function (options) {
        },

        render: function () {
            this.$el.html(evutils.render('templates/shared/terms.jinja2'));
            return this;
        }
    });
    APP.Views['/privacy'] = Backbone.View.extend({
        initialize: function (options) {
        },

        render: function () {
            this.$el.html(evutils.render('templates/shared/privacy.jinja2'));
            return this;
        }
    });
    APP.Views['/refunds'] = Backbone.View.extend({
        initialize: function (options) {
        },

        render: function () {
            this.$el.html(evutils.render('templates/shared/refunds.jinja2'));
            return this;
        }
    });
    APP.Views['/categories'] = Backbone.View.extend({
        initialize: function (options) {
        },

        render: function () {
            this.$el.html(evutils.render('templates/shared/categories.jinja2'));
            return this;
        }
    });
    APP.Views['/companies'] = Backbone.View.extend({
        initialize: function (options) {
        },

        render: function () {
            this.$el.html(evutils.render('templates/shared/companies.jinja2'));
            return this;
        }
    });
    APP.Views['/companies/:url_title'] = Backbone.View.extend({
        initialize: function (options) {
            this.company_url_title = options.args[0];
        },

        render: function () {

            models.getCompanyByUrlTitle(this.company_url_title, function (company) {
                evutils.setModal(evutils.render('templates/shared/company.jinja2', {'company': company}));
            });
            return this;
        }
    });
    APP.Views['/account'] = Backbone.View.extend({
        initialize: function (options) {
        },

        render: function () {

            var self = this;
            models.getUser(function (user) {
                self.$el.html(evutils.render('templates/shared/account.jinja2', {'user': user}));
                user.getCompanies(function (companies) {
                    //TODO HOW TO INSERT AFTER?
                    self.$el.find('.company-thumbs').html(evutils.render('templates/shared/company-thumbs.jinja2',
                        {'companies': companies, 'createcompany': true, 'showEditButtons': true }));
                });

            });
            return self;
        }
    });
    APP.Views['/new-page'] = Backbone.View.extend({
        initialize: function (options) {
        },

        render: function () {

            var self = this;
            models.getUser(function (user) {
                self.$el.html(evutils.render('templates/shared/new-page.jinja2', {'user': user}));
                user.getUnstartedPages(function (companies) {
                    self.$el.find('.company-thumbs').html(evutils.render('templates/shared/company-thumbs.jinja2',
                        {'companies': companies, 'createcompany': false, 'showEditButtons': false, 'newPage': true }));
                });

            });
            return self;
        }
    });
    APP.Views['/new-page/:url_title'] = Backbone.View.extend({
        initialize: function (options) {
            this.company_url_title = options.args[0];
        },

        render: function () {
            var self = this;
            models.getUser(function (user) {
                user.getUnstartedPages(function (companies) {
                    self.page = _.where(companies, { url_title: self.company_url_title })[0];
                    if (self.page) {
                        self.$el.html(evutils.render('templates/shared/edit-page.jinja2',
                            {'company': self.page, 'creating': true}));
                    }
                    else {
                        APP.router.navigate('account', {trigger: true});
                    }
                });
            });
            return self;
        },
        events: {
            'submit #create-company-form': 'createCompany'
        },
        createCompany: function (evt) {
            var data = $(evt.target).serializeObject();
            var company = $.extend(this.page, data);
            models.getUser(function (user) {
                user.createCompany(company, function (data) {
                    APP.goto('account');
                });
            });
            return false;
        }
    });

    APP.Views['/companies/:url_title/edit'] = Backbone.View.extend({
        initialize: function (options) {
            this.company_url_title = options.args[0];
        },

        render: function () {
            var self = this;
            models.getUser(function (user) {
                user.getCompanies(function (companies) {
                    self.page = _.where(companies, { url_title: self.company_url_title })[0];
                    if (self.page) {
                        self.$el.html(evutils.render('templates/shared/edit-page.jinja2',
                            {'company': self.page, 'creating': false}));
                    }
                    else {
                        APP.router.navigate('account', {trigger: true});
                    }
                });
            });
            return self;
        },
        events: {
            'submit #create-company-form': 'createCompany'
        },
        createCompany: function (evt) {
            var data = $(evt.target).serializeObject();
            var company = $.extend(this.page, data);
            models.getUser(function (user) {
                user.createCompany(company, function (data) {
                    APP.goto('account');
                });
            });
            return false;
        }
    });

    APP.Views.Header = Backbone.View.extend({
        initialize: function (options) {
            this.path = options.path;
        },

        render: function () {
            var self = this;
            models.getUser(function (user) {
                self.$el.html(evutils.render('templates/shared/header.jinja2', {'path': self.path, 'user': user}));

            });

            return self;
        }
    });

    APP.Views.Footer = Backbone.View.extend({
        initialize: function (options) {
            this.path = options.path;
        },

        render: function () {
            this.$el.html(evutils.render('templates/shared/footer.jinja2', {'path': this.path}));
            return this;
        }
    });

}());
