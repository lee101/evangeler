(function () {
    "use strict";
    window.APP = window.APP || {Routers: {}, Collections: {}, Models: {}, Views: {}};


    var Router = Backbone.Router.extend({
        // Define routes
        routes: {
            "": "home",
            "services": "services"
        },
        // These callbacks get called when navigate is called with
        // trigger = true
        services: function () {
            this.removeView();

            ISS.Var.routerCurrentPage = 'services';
            ISS.ViewInstances.SearchPanelView = new ISS.Views.SearchPanelView();
            ISS.Var.routerViews[ISS.Var.routerCurrentPage] = ISS.ViewInstances.SearchPanelView;
        },
        home: function () {
            this.removeView();

            var reRender = ISS.Var.routerCurrentPage !== 'Home';
            ISS.Var.routerCurrentPage = 'Home';
            ISS.ViewInstances.HomeView = new ISS.Views.HomeView({'reRender': reRender});
            ISS.Var.routerViews[ISS.Var.routerCurrentPage] = ISS.ViewInstances.HomeView;
        },
        removeView: function () {
            if (!ISS.Var.routerViews) {
                ISS.Var.routerViews = {};
                return;
            }
            var view = ISS.Var.routerViews[ISS.Var.routerCurrentPage];
            if (typeof view !== 'undefined' && typeof view.remove === 'function') {
                view.remove();
            }
        }
    });

    $(document).ready(function () {
        APP.router = new Router();
        Backbone.history.start({
            pushState: true
        });
    });
}());
