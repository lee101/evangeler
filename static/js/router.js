(function () {
    "use strict";
    window.APP = window.APP || {Routers: {}, Collections: {}, Models: {}, Views: {}};
    APP.routerViews = {};

    var Router = Backbone.Router.extend({
        // Define routes
        'routes': {
            "": "home",
            "how-it-works": "howitworks"
        },
        // These callbacks get called when navigate is called with
        // trigger = true
        'howitworks': function () {
            this.removeView();

            APP.routerCurrentPage = 'howitworks';
            var currentView = new APP.Views.HowItWorks();
            APP.routerViews[APP.routerCurrentPage] = currentView;

            $('.mm-background').html(currentView.render().el);
        },
        'home': function () {
            this.removeView();

            var reRender = APP.routerCurrentPage !== 'Home';
            APP.routerCurrentPage = 'Home';
            var currentView = new APP.Views.Home();
            APP.routerViews[APP.routerCurrentPage] = currentView;
            $('.mm-background').html(currentView.render().el);
        },
        'removeView': function () {
            if (!APP.routerViews) {
                APP.routerViews = {};
                return;
            }
            var view = APP.routerViews[APP.routerCurrentPage];
            if (typeof view !== 'undefined' && typeof view.remove === 'function') {
                view.remove();
            }
        }
    });

    $(document).ready(function () {
        APP.router = new Router();
        Backbone.history.start({
            pushState: true,
            silent: true
        });
    });
}());
