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
            "how-it-works": "howitworks",
            "about": "about",
            "contact": "contact",
            "terms": "terms",
            "privacy": "privacy"
        },
        'home': function () {
            this.view(new APP.Views.Home());
        },
        'howitworks': function () {
            this.view(new APP.Views.HowItWorks());
        },
        'about': function () {
            this.view(new APP.Views.About());
        },
        'contact': function () {
            this.view(new APP.Views.Contact());
        },
        'terms': function () {
            this.view(new APP.Views.Terms());
        },
        'privacy': function () {
            this.view(new APP.Views.Privacy());
        },
        'view': function(currentView) {
            refresh();
            animateTo(currentView.render().el);
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
