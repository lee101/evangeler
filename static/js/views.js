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
            this.$el.html( nunjucks.render('templates/shared/how-it-works.jinja2'));
            return this;
        }
    });

    APP.Views['/contact'] = Backbone.View.extend({
        initialize: function (options) {
        },

        render: function () {
            this.$el.html( nunjucks.render('templates/shared/contact.jinja2'));
            return this;
        }
    });

    APP.Views['/about'] = Backbone.View.extend({
        initialize: function (options) {
        },

        render: function () {
            this.$el.html( nunjucks.render('templates/shared/about.jinja2'));
            return this;
        }
    });
    APP.Views['/terms'] = Backbone.View.extend({
        initialize: function (options) {
        },

        render: function () {
            this.$el.html( nunjucks.render('templates/shared/terms.jinja2'));
            return this;
        }
    });
    APP.Views['/privacy'] = Backbone.View.extend({
        initialize: function (options) {
        },

        render: function () {
            this.$el.html( nunjucks.render('templates/shared/privacy.jinja2'));
            return this;
        }
    });
    APP.Views['/refunds'] = Backbone.View.extend({
        initialize: function (options) {
        },

        render: function () {
            this.$el.html( nunjucks.render('templates/shared/refunds.jinja2'));
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
            models.getUser(function(user){
                self.$el.html(nunjucks.render('templates/shared/header.jinja2', {'path': self.path, 'user': user, 'window':true}));

            });

            return self;
        }
    });

    APP.Views.Footer = Backbone.View.extend({
        initialize: function (options) {
            this.path = options.path;
        },

        render: function () {
            this.$el.html( nunjucks.render('templates/shared/footer.jinja2', {'path': this.path}));
            return this;
        }
    });

}());
