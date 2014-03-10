(function () {
    "use strict";
    window.APP = window.APP || {Routers: {}, Collections: {}, Models: {}, Views: {}};
    APP.routerViews = {};
    APP.goto = function (name) {
        APP.router.navigate(name, {trigger: true});
        $(this).toggleClass('active');
        return false
    };

    function animateTo(data) {
        var width = $(document).width();


        var $mainbody = $('#mainbody');
        var speed = 500;
        $mainbody.animate({
            left: -width
        }, speed, null, function () {

            $mainbody.html(data);
            $mainbody.css({left: width});
            $mainbody.animate({left: 0}, speed)
        });
    }

    function refresh() {
        APP.footer.path = location.pathname;
        APP.header.path = location.pathname;
        $('#headerbody').html(APP.header.render().el);
        $('#footerbody').html(APP.footer.render().el);
    }

    var Router = Backbone.Router.extend({
        // Define routes
        'routes': {
            "": "home",
            "how-it-works": "howitworks"
        },
        // These callbacks get called when navigate is called with
        // trigger = true
        'howitworks': function () {
//            this.removeView();

            APP.routerCurrentPage = 'howitworks';
            var currentView = new APP.Views.HowItWorks();
            APP.routerViews[APP.routerCurrentPage] = currentView;
            refresh();
            animateTo(currentView.render().el);
        },
        'home': function () {
//            this.removeView();

            var reRender = APP.routerCurrentPage !== 'Home';
            APP.routerCurrentPage = 'Home';
            var currentView = new APP.Views.Home();
            APP.routerViews[APP.routerCurrentPage] = currentView;
            refresh();
            animateTo(currentView.render().el);
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
        APP.header = new APP.Views.Header({path: location.pathname});
        APP.footer = new APP.Views.Footer({path: location.pathname});
        Backbone.history.start({
            pushState: true,
            silent: true
        });
    });
}());
