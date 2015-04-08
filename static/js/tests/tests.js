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
            var page_id = wordsmashing.page_id;

            user.createCompany({
                name: 'Word Smashing',
                description: 'description',
                facebook_link: 'test',
                tags: [1, 2, "asdf"],
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
    beforeEach(function () {
        jasmine.clock().install();
        jasmine.clock().tick(1001);
    });
    afterEach(function () {
        jasmine.clock().uninstall();
    });

    it('should let you navigate to new page', function (done) {
        APP.goto('account');
        jasmine.clock().tick(2001);

        APP.goto('new-page');
        jasmine.clock().tick(2001);

        APP.goto('new-page/multiplication-master');
        jasmine.clock().tick(2001);

        $('#create-company-form').submit();
        jasmine.clock().tick(2001);

        APP.goto('contest-categories');
        jasmine.clock().tick(2001);

        APP.goto('launch/reshare');
        jasmine.clock().tick(2001);


        $('#contestTitle').val('test multiplication master contest');
        $('#contestAbout').val('test multiplication master contest');
        $('#contest-details-form').submit();
        done();
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

