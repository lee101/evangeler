(function () {
    "use strict";
    window.APP = window.APP || {Routers: {}, Collections: {}, Models: {}, Views: {}};

    APP.Views['/new-page'] = Backbone.View.extend({
        initialize: function (options) {
        },

        render: function () {

            var self = this;
            models.getUser(function (user) {
                self.$el.html(evutils.render('templates/shared/new-page.jinja2', {'user': user}));
                user.getUnstartedPages(function (companies) {
                    self.$el.find('.company-thumbs').html(evutils.render('templates/shared/company-thumbs.jinja2',
                        {'companies': companies, 'createcompany': false, 'showEditButtons': false, 'newPage': true }));
                });

            });
            return self;
        }
    });


    function editPageViewFactory(editing) {
        return Backbone.View.extend({
            initialize: function (options) {
                this.company_url_title = options.args[0];
            },

            render: function () {
                var self = this;
                self.editing = editing;
                models.getUser(function (user) {
                    var getFunc = 'getUnstartedPages';
                    if (self.editing) {
                        getFunc = 'getCompanies';
                    }
                    user[getFunc](function renderCompanyForm(companies) {
                        self.page = _.where(companies, { url_title: self.company_url_title })[0];
                        if (self.page) {
                            self.$el.html(evutils.render('templates/shared/edit-page.jinja2',
                                {'company': self.page, 'creating': !self.editing}));
                            window.setTimeout(self.addValidation, 1000);
                        }
                        else {
                            APP.router.navigate('account', {trigger: true});
                        }
                    });
                });
                return self;
            },
            addValidation: function () {

                $('#create-company-form').validate({
                    rules: {
                        about: {
                            minlength: 10,
                            required: true
                        },
                        description: {
                            minlength: 3,
                            required: false
                        },
                        website_link: {
                            url: true,
                            required: true
                        },
                        google_link: {
                            url: true,
                            required: false
                        }
                    },
                    highlight: function (element) {
                        $(element).closest('.form-group').addClass('has-error');
                    },
                    unhighlight: function (element) {
                        $(element).closest('.form-group').removeClass('has-error');
                    },
                    errorElement: 'span',
                    errorClass: 'help-block',
                    errorPlacement: function (error, element) {
                        if (element.parent('.input-group').length) {
                            error.insertAfter(element.parent());
                        } else {
                            error.insertAfter(element);
                        }
                    }
                });
            },
            events: {
                'submit #create-company-form': 'createCompany'
            },
            createCompany: function (evt) {
                var data = $(evt.target).serializeObject();
                var company = $.extend(this.page, data);
                models.getUser(function (user) {
                    user.createCompany(company, function (data) {
                        APP.goto('account');
                        if (typeof APP.testCallback === 'function') {
                            APP.testCallback();
                        }
                    });
                });
                return false;
            }
        });
    }
    APP.Views['/new-page/:url_title'] = editPageViewFactory(false);

    APP.Views['/companies/:url_title/edit'] = editPageViewFactory(true);


}());
