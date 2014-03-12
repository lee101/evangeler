(function () {
    "use strict";
    window.APP = window.APP || {Routers: {}, Collections: {}, Models: {}, Views: {}};

    APP.Views.Home = Backbone.View.extend({
        // the constructor
        initialize: function (options) {
//            this.note = options.note;
        },

        // populate the html to the dom
        render: function () {
            this.$el.html(nunjucks.render('templates/shared/start.jinja2'));

            return this;
        }
    });

    APP.Views.HowItWorks = Backbone.View.extend({
        // the constructor
        initialize: function (options) {
//            this.note = options.note;
        },

        // populate the html to the dom
        render: function () {
            this.$el.html( nunjucks.render('templates/shared/how-it-works.jinja2'));
            return this;
        }
    });

    APP.Views.Contact = Backbone.View.extend({
        // the constructor
        initialize: function (options) {
//            this.note = options.note;
        },

        // populate the html to the dom
        render: function () {
            this.$el.html( nunjucks.render('templates/shared/contact.jinja2'));
            return this;
        }
    });

    APP.Views.About = Backbone.View.extend({
        // the constructor
        initialize: function (options) {
//            this.note = options.note;
        },

        // populate the html to the dom
        render: function () {
            this.$el.html( nunjucks.render('templates/shared/about.jinja2'));
            return this;
        }
    });
    APP.Views.Terms = Backbone.View.extend({
        // the constructor
        initialize: function (options) {
//            this.note = options.note;
        },

        // populate the html to the dom
        render: function () {
            this.$el.html( nunjucks.render('templates/shared/terms.jinja2'));
            return this;
        }
    });
    APP.Views.Privacy = Backbone.View.extend({
        // the constructor
        initialize: function (options) {
//            this.note = options.note;
        },

        // populate the html to the dom
        render: function () {
            this.$el.html( nunjucks.render('templates/shared/privacy.jinja2'));
            return this;
        }
    });
    APP.Views.Refunds = Backbone.View.extend({
        // the constructor
        initialize: function (options) {
//            this.note = options.note;
        },

        // populate the html to the dom
        render: function () {
            this.$el.html( nunjucks.render('templates/shared/refunds.jinja2'));
            return this;
        }
    });

    APP.Views.Header = Backbone.View.extend({
        // the constructor
        initialize: function (options) {
            this.path = options.path;
        },

        // populate the html to the dom
        render: function () {
            var self = this;
            models.getUser(function(user){
                self.$el.html(nunjucks.render('templates/shared/header.jinja2', {'path': self.path, 'user': user, 'window':true}));

            });

            return self;
        }
    });

    APP.Views.Footer = Backbone.View.extend({
        // the constructor
        initialize: function (options) {
            this.path = options.path;
        },

        // populate the html to the dom
        render: function () {
            this.$el.html( nunjucks.render('templates/shared/footer.jinja2', {'path': this.path}));
            return this;
        }
    });

}());
