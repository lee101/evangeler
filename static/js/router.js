(function () {
    "use strict";
    window.APP = window.APP || {Routers: {}, Collections: {}, Models: {}, Views: {}};
    APP.routerViews = {};
    var history = [];
    APP.goto = function (name) {
        history.push(name);
        APP.router.navigate(name, {trigger: true});
//		$(this).toggleClass('active');
        return false
    };
    APP.delete_cookie = function (name) {
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    };


    function animateTo(data, rightOrLeft) {

        var width = $(document).width();


        var $mainbody = $('#mainbody');
        var speed = 500;
        if (rightOrLeft === "right") {
            $mainbody.animate({left: -width}, speed, null, function () {

                $mainbody.html(data);
                $mainbody.css({left: width});
                $mainbody.animate({left: 0}, speed)
            });
        }
        else {
            $mainbody.animate({left: width}, speed, null, function () {

                $mainbody.html(data);
                $mainbody.css({left: -width});
                $mainbody.animate({left: 0}, speed)
            });
        }

        //scroll to top
        $("html, body").animate({ scrollTop: 0 }, "slow");
    }

    APP.refresh = function () {
        APP.footer.path = location.pathname;
        APP.header.path = location.pathname;
        $('#headerbody').html(APP.header.render().el);
        $('#footerbody').html(APP.footer.render().el);
    };

    var modalPages = {
        '/companies/:url_title': 1,
        'companies/edit/:url_title': 1
    };


    var isViewingModal = false;
    APP.currentView = location.pathname;
    function defaultHandler(pathname) {
        return function () {
            var args = arguments;
            if (APP.currentView == pathname && prerenderedPages[APP.currentView]) {
                return;
            }

            function handle() {
                evutils.history.add();
                APP.currentView = pathname;
                if (modalClosing) {
                    modalClosing = false;
                    return;
                }
                APP.refresh();
                if (modalPages[pathname]) {
                    isViewingModal = true;
                    new APP.Views[pathname]({args: args})
                        .render();
                } else {
                    isViewingModal = false;
                    if (evutils.history.goingback) {
                        animateTo(new APP.Views[pathname]({args: args}).render().el, "left");
                    } else {
                        animateTo(new APP.Views[pathname]({args: args}).render().el, "right");
                    }
                }
            }

            facebookWrapper.onEverythingLoaded(function () {

                //if its not prerendered it requires login
                if (!prerenderedPages[APP.currentView]) {
                    facebookWrapper.ifLoggedInElse(function () {
                            handle();
                        }, function () {
                            //TODO login to view this page modal
                        }
                    );
                }
                else {
                    handle();
                }
            });

        }
    }

    var prerenderedPages = {
        "/": "home",
        "/how-it-works": "how-it-works",
        "/categories": "categories",
        "/companies": "companies",
        "/companies/:url_title": "companies/:url_title",
        "/company": "company",
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
        'account': 'account',
        'companies/edit/:url_title': 'companies/edit/:url_title',
        'new-page': 'new-page'
    });

    var Router = Backbone.Router.extend({
        // Define routes
        'routes': routes,
        'home': defaultHandler('/'),
        'how-it-works': defaultHandler('/how-it-works'),
        'categories': defaultHandler('/categories'),
        'companies': defaultHandler('/companies'),
        'companies/edit/:url_title': defaultHandler('/companies/edit/:url_title'),
        'companies/:url_title': defaultHandler('/companies/:url_title'),
        'company': defaultHandler('/company'),
        'about': defaultHandler('/about'),
        'contact': defaultHandler('/contact'),
        'terms': defaultHandler('/terms'),
        'privacy': defaultHandler('/privacy'),
        'refunds': defaultHandler('/refunds'),
        'new-page': defaultHandler('/new-page'),
        'account': defaultHandler('/account')
    });

    var modalClosing = false;
    $(document).ready(function () {
        var $modal = $('#modal');
        $modal.on('hide.bs.modal', function ModalClose() {
            var previousState = evutils.history.previousState();
            if (isViewingModal) {
                modalClosing = true;
                APP.router.navigate(previousState, {trigger: true});
            }
        });

        APP.router = new Router();
        APP.header = new APP.Views.Header({path: location.pathname});
        APP.footer = new APP.Views.Footer({path: location.pathname});
        Backbone.history.start({
            pushState: true
//            silent: true
        });
    });
}());
