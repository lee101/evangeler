(function () {
    "use strict";
    window.APP = window.APP || {Routers: {}, Collections: {}, Models: {}, Views: {}};
    APP.routerViews = {};
    APP.goto = function (name) {
        APP.router.navigate(name, {trigger: true});
        $(this).toggleClass('active');
        return false
    };
    APP.delete_cookie = function (name) {
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
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
        //scroll to top
        $("html, body").animate({ scrollTop: 0 }, "slow");
    }

    APP.refresh = function () {
        APP.footer.path = location.pathname;
        APP.header.path = location.pathname;
        $('#headerbody').html(APP.header.render().el);
        $('#footerbody').html(APP.footer.render().el);
    }
    APP.currentView = location.pathname;
    function defaultHandler(pathname) {
        return function () {
            if (APP.currentView == pathname && prerenderedPages[APP.currentView]) {
                return;
            }
            APP.currentView = pathname;
            APP.refresh();
            animateTo(new APP.Views[pathname]().render().el);
        }
    }

    var prerenderedPages = {
        "/": "home",
        "/how-it-works": "how-it-works",
        "/about": "about",
        "/contact": "contact",
        "/terms": "terms",
        "/privacy": "privacy",
        "/refunds": "refunds"
    };
    var routes = {};
    $.each(prerenderedPages, function (key, value) {
        routes[key.substring(1)] = value;
    });
    jQuery.extend(routes, {
        'account': 'account'
    });

    var Router = Backbone.Router.extend({
        // Define routes
        'routes': routes,
        'home': defaultHandler('/'),
        'how-it-works': defaultHandler('/how-it-works'),
        'about': defaultHandler('/about'),
        'contact': defaultHandler('/contact'),
        'terms': defaultHandler('/terms'),
        'privacy': defaultHandler('/privacy'),
        'refunds': defaultHandler('/refunds'),
        'account': defaultHandler('/account')
    });

    $(document).ready(function () {
        APP.router = new Router();
        APP.header = new APP.Views.Header({path: location.pathname});
        APP.footer = new APP.Views.Footer({path: location.pathname});
        Backbone.history.start({
            pushState: true
//            silent: true
        });
    });
}());
