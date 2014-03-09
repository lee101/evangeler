(function () {
    "use strict";
    window.APP = window.APP || {Routers: {}, Collections: {}, Models: {}, Views: {}};

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

}());
