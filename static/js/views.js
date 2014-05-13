(function () {
    "use strict";
    window.APP = window.APP || {Routers: {}, Collections: {}, Models: {}, Views: {}};

    APP.Views['/'] = Backbone.View.extend({
        initialize: function (options) {
        },

        render: function () {
            this.$el.html(nunjucks.render('templates/shared/start.jinja2'));

            return this;
        }
    });

    APP.Views['/how-it-works'] = Backbone.View.extend({
        initialize: function (options) {
        },

        render: function () {
            this.$el.html(nunjucks.render('templates/shared/how-it-works.jinja2'));
            return this;
        }
    });

    APP.Views['/contact'] = Backbone.View.extend({
        initialize: function (options) {
        },

        render: function () {
            this.$el.html(nunjucks.render('templates/shared/contact.jinja2'));
            return this;
        }
    });

    APP.Views['/about'] = Backbone.View.extend({
        initialize: function (options) {
        },

        render: function () {
            this.$el.html(nunjucks.render('templates/shared/about.jinja2'));
            return this;
        }
    });
    APP.Views['/terms'] = Backbone.View.extend({
        initialize: function (options) {
        },

        render: function () {
            this.$el.html(nunjucks.render('templates/shared/terms.jinja2'));
            return this;
        }
    });
    APP.Views['/privacy'] = Backbone.View.extend({
        initialize: function (options) {
        },

        render: function () {
            this.$el.html(nunjucks.render('templates/shared/privacy.jinja2'));
            return this;
        }
    });
    APP.Views['/refunds'] = Backbone.View.extend({
        initialize: function (options) {
        },

        render: function () {
            this.$el.html(nunjucks.render('templates/shared/refunds.jinja2'));
            return this;
        }
    });
    APP.Views['/categories'] = Backbone.View.extend({
        initialize: function (options) {
        },

        render: function () {
            this.$el.html(nunjucks.render('templates/shared/categories.jinja2'));
            return this;
        }
    });
    APP.Views['/companies'] = Backbone.View.extend({
        initialize: function (options) {
        },

        render: function () {
            this.$el.html(nunjucks.render('templates/shared/companies.jinja2'));
            return this;
        }
    });
    APP.Views['/companies/:url_title'] = Backbone.View.extend({
        initialize: function (options) {
            this.company_url_title = options.args[0];
        },

        render: function () {

            models.getCompanyByUrlTitle(this.company_url_title, function (company) {
                evutils.setModal(nunjucks.render('templates/shared/company.jinja2', {'company': company}));
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
                self.$el.html(nunjucks.render('templates/shared/account.jinja2', {'user': user, 'window': true}));
                user.getCompanies(function (companies) {
                    //TODO HOW TO INSERT AFTER?
                    self.$el.find('.company-thumbs').html(nunjucks.render('templates/shared/company-thumbs.jinja2',
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
                self.$el.html(nunjucks.render('templates/shared/new-page.jinja2', {'user': user, 'window': true}));
                user.getUnstartedPages(function (companies) {
                    self.$el.find('.company-thumbs').html(nunjucks.render('templates/shared/company-thumbs.jinja2',
                        {'companies': companies, 'createcompany': false, 'showEditButtons': false }));
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
                    var page = _.where(companies, { url_title: this.company_url_title })[0];
                    self.$el.html(nunjucks.render('templates/shared/create-new-page.jinja2',
                        {'page': page, 'window': true}));
                });
            });
            return self;
        }
    });

    APP.Views.Header = Backbone.View.extend({
        initialize: function (options) {
            this.path = options.path;
        },

        render: function () {
            var self = this;
            models.getUser(function (user) {
                self.$el.html(nunjucks.render('templates/shared/header.jinja2', {'path': self.path, 'user': user, 'window': true}));

            });

            return self;
        }
    });

    APP.Views.Footer = Backbone.View.extend({
        initialize: function (options) {
            this.path = options.path;
        },

        render: function () {
            this.$el.html(nunjucks.render('templates/shared/footer.jinja2', {'path': this.path}));
            return this;
        }
    });

}());
