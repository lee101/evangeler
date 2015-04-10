(function () {
    "use strict";
    window.APP = window.APP || {Routers: {}, Collections: {}, Models: {}, Views: {}};


    function editReshareContestViewFactory(editing) {
        return Backbone.View.extend({
            initialize: function (options) {
                this.uid = options.args[0];
                if (!APP.currentReshareUID) {
                    APP.currentReshareUID = evutils.uid();
                }
                else {

                }
            },

            render: function () {
                var self = this;
                self.editing = editing;
                models.getUser(function (user) {
                    user.getCompanies(function (companies) {
                        var currentContest = models.company.getCompaniesContestByUid(companies, self.uid);
                        self.$el.html(evutils.render('templates/shared/launch-reshare.jinja2', {
                            'user': user,
                            'companies': companies,
                            'creating': !self.editing,
                            'currentContest': currentContest
                        }));
                        window.setTimeout(self.addValidation, 1000);
                    });
                });
                return self;
            },
            events: {
                'submit #contest-details-form': 'createContest'
//            'blur #contest-details-form': 'saveContest'
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
                var $launchBtn = $('.mm-launch-btn');
                evutils.setElementLoading($launchBtn);

                var contest = $('#contest-details-form').serializeObject();
                evutils.formatTags(contest);
                $.extend(contest, {
                    type: fixtures.CONTESTS.RESHARE,
                    uid: this.uid || APP.currentReshareUID,
                    launching: true
                });
                models.getUser(function (user) {
                    user.createContest(contest, function (contest) {
                        evutils.setElementDone($launchBtn);
                        APP.currentReshareUID = null;
                        APP.goto('account');
                    });
                });
                return false;
            }
        });
    }

    APP.Views['/launch/reshare'] = editReshareContestViewFactory(false);

    APP.Views['/contests/:uid/:url_title/edit'] = editReshareContestViewFactory(true);
}());
