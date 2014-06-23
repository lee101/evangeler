(function () {
    "use strict";
    window.APP = window.APP || {Routers: {}, Collections: {}, Models: {}, Views: {}};
    APP.routerViews = {};
    APP.goto = function (name) {
        APP.router.navigate(name, {trigger: true});
        return false
    };

    APP.backto = function (name) {
        if (evutils.history.getPreviousState() == name) {
            window.history.back();
            return false;
        }
        else {
            return APP.goto(name);
        }
    };

    $(document).on('click', 'a:not([data-bypass])', function (e) {
        var href = $(this).prop('href');
        var root = location.protocol + '//' + location.host + '/';
        if (root === href.slice(0, root.length)) {
            e.preventDefault();
            APP.goto(href.slice(root.length));
        }
    });
    APP.delete_cookie = function (name) {
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    };

    var currentView;

    function animateTo(view, rightOrLeft) {
        var width = $(document).width();

        var $mainbody = $('#mainbody');
        var speed = 500;
        if (rightOrLeft === "right") {
            $mainbody.animate({left: -width}, speed, null, function () {
                if (currentView) {
                    currentView.close();
                }

                currentView = view;
                $mainbody.html(view.render().el);
                $mainbody.css({left: width});
                $mainbody.animate({left: 0}, speed)
            });
        }
        else {
            $mainbody.animate({left: width}, speed, null, function () {
                if (currentView) {
                    currentView.close();
                }

                currentView = view;
                $mainbody.html(view.render().el);
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
        '/companies/:url_title': 1
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
                    if (!evutils.modalHidden) {
                        evutils.hideModal();
                    }
                    else if (evutils.history.goingback) {
                        animateTo(new APP.Views[pathname]({args: args}), "left");
                    } else {
                        animateTo(new APP.Views[pathname]({args: args}), "right");
                    }
                }
            }

            facebookWrapper.onEverythingLoaded(function () {

                //if its not prerendered it requires login
                if (!prerenderedPages[APP.currentView]) {
                    facebookWrapper.ifLoggedInElse(function () {
                            handle();
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
        "/contest-categories": "contest-categories",
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
        'companies/:url_title/edit': 'companies/:url_title/edit',
        'new-page': 'new-page',
        'new-page/:url_title': 'new-page/:url_title',
        'launch/reshare': 'launch/reshare',
        'contests/:uid/:url_title/edit': 'contests/:uid/:url_title/edit'
    });

    var Router = Backbone.Router.extend({
        // Define routes
        'routes': routes,
        'home': defaultHandler('/'),
        'how-it-works': defaultHandler('/how-it-works'),
        'contest-categories': defaultHandler('/contest-categories'),
        'companies': defaultHandler('/companies'),
        'companies/:url_title/edit': defaultHandler('/companies/:url_title/edit'),
        'companies/:url_title': defaultHandler('/companies/:url_title'),
        'company': defaultHandler('/company'),
        'about': defaultHandler('/about'),
        'contact': defaultHandler('/contact'),
        'terms': defaultHandler('/terms'),
        'privacy': defaultHandler('/privacy'),
        'refunds': defaultHandler('/refunds'),
        'new-page': defaultHandler('/new-page'),
        'new-page/:url_title': defaultHandler('/new-page/:url_title'),
        'launch/reshare': defaultHandler('/launch/reshare'),
        'contests/:uid/:url_title/edit': defaultHandler('/contests/:uid/:url_title/edit'),
        'account': defaultHandler('/account')
    });


    var modalClosing = false;
    $(document).ready(function () {
        var $modal = $('#modal');
        $modal.on('hide.bs.modal', function ModalClose() {
            if (isViewingModal) {
                modalClosing = true;
                window.history.back();
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
