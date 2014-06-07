(function () {
    "use strict";
    window.APP = window.APP || {Routers: {}, Collections: {}, Models: {}, Views: {}};

    APP.Views['/launch/reshare'] = Backbone.View.extend({
        initialize: function (options) {
        },

        render: function () {
            var self = this;
            models.getUser(function (user) {
                user.getCompanies(function (companies) {
                    self.$el.html(evutils.render('templates/shared/launch-reshare.jinja2', {
                        'user': user,
                        'companies': companies
                    }));
                    window.setTimeout(self.addValidation, 1000);
                });
            });
            return self;
        },
        events: {
            'submit #contest-details-form': 'createContest'
        },
        addValidation: function () {

            $('#contest-details-form').validate({
                rules: {
                    title: {
                        minlength: 5,
                        maxlength: 100,
                        required: true
                    },
                    about: {
                        minlength: 10,
                        required: true
                    },
                    website_link: {
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
        createContest: function (evt) {
            var data = $(evt.target).serializeObject();
            evutils.formatTags(data);
            $.extend(data, {type: CONTESTS.RESHARE});
        }
    });
}());
