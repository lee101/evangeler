describe("evangeler", function () {

    it('should let you login', function (done) {
        facebookWrapper.fb_login(function (user) {
            expect(user.email).toBe('test');
            done();
        });
    });
    it('should let you log out and back in', function (done) {
        facebookWrapper.fb_logout(function () {
            expect(gameon.user).toBeFalsy();
        });
        facebookWrapper.fb_login(function (user) {
            expect(user.email).toBe('test');
            done();
        });
    });

});
describe("lib", function () {

    it('should let you create a company', function (done) {
        expect(models.user).toBeTruthy();

        models.getUser(function (user) {
            var page_id = 159201617592591;

            user.createCompany({
                name: 'Word Smashing',
                description: 'description',
                facebook_link: 'test',
                tags: [1, 2],
                status: STATUS.DRAFT,
                pic: wordsmashing.pic,
                about: wordsmashing.about,

                page_id: page_id
            }, function (data) {
                expect(data).toBe('success');
                models.getUser(function (user) {
                    user.getCompanies(function (companies) {
                        expect(companies[0].page_id).toBe(page_id);
                        user.getUnstartedPages(function (pages) {
                            var containsWS = false;
                            _.each(pages, function (page) {
                                if (page.page_id == page_id) {
                                    containsWS = true
                                }
                            });
                            expect(containsWS).toBeFalsy();
                            done()
                        })
                    });
                })
            })

        })
    });


});

describe("evutils", function () {

    it('should format tags', function () {
        var obj = {};
        obj.tags = 'test, amount ,  of tags , asdf';
        evutils.formatTags(obj);
        expect(obj.tags).toEqual(['test', 'amount', 'of tags', 'asdf']);
    });

});


describe("the site", function () {

    it('should let you navigate to new page', function (done) {
        APP.goto('account');
        APP.goto('new-page');
        APP.goto('new-page/multiplication-master');
        window.setTimeout(function () {
            $('#create-company-form').submit();
            APP.goto('categories');
            APP.goto('launch/reshare');

            done();
        }, 2000);
    });

    it('should have eventually created data', function (done) {
        window.setTimeout(function () {
            models.getCompanyByUrlTitle('multiplication-master', function (company) {
                expect(company.url_title).toBe('multiplication-master');
                done();
            });
        }, 2000);
    });


    it('should go back to /tests afterwards', function () {
        APP.goto('tests');
    });

});

