var wordsmashing = {"page_id": 159201617592591, "name": "Word Smashing", "access_token": "CAALmwptiDqQBADqbRdObolhnZB9HPcqHFjegWqyFs2QJ98sMSoEqoG6In9ff0gJEJYbKSEwQLNVx1Wv7ZCvh6U8pLDDYVfuRPb9CJZA3p937g6L3ZCOgZCjtKziCWsmZCrhpmPGJvHWzZBQmFLdu49QGb750hv24jOO72Eve5SkMl2DXCE81QGQis9bXJIRHEgZD", "about": "Try this Fun and Addicting Word puzzle game. Do It!", "description": "Word Smashing is a fun and addicting word puzzle game, where you slide letters around to create as many words as possible, without running out of board space! Try this fun, word puzzle now at http:\/\/www.wordsmashing.com ", "categories": [], "keywords": null, "pic": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn2\/t1.0-1\/c0.3.180.180\/s100x100\/954810_159202914259128_1730933275_a.png", "website": "http:\/\/www.wordsmashing.com"};


describe("tests", function () {

    it('should let you mock things', function (done) {

        //Mock Facebook
        FB = {};
        FB.init = function (params) {
        };

        FB.login = function (callback, params) {
            callback({
                authResponse: {
                    accessToken: 'test',
                    userID: 'test'
                }
            })
        };
        FB.api = function (place, callback) {
            callback({
                email: 'test',
                name: 'test',
                link: 'test'
            })
        };
        FB.logout = function (callback) {
            callback({
                authResponse: {
                    accessToken: 'test',
                    userID: 'test'
                }
            })
        };
        FB.getLoginStatus = function (callback) {
            callback({
                authResponse: {
                    accessToken: 'test',
                    userID: 'test'
                },
                status: 'connected'
            })
        };
        facebookWrapper.getFaceBookPages = function (callback) {
            callback({
                "data": [
                    {"page_id": 721564427863714, "name": "Evangeler", "access_token": "CAALmwptiDqQBADO0SQ0XfxSQKcuLgBpAouBu25HMBAld1zzEnuS8dZAD5xyuscQQ5iWl325zyZBhaXRI20emyaMPZBygLBZAU3ZCPHLuExqu1c9aVsD3kA5ultGiHQzZBKYZAX4R7cDZCXHtiqSv5C6bUBZBaERrEwj12usS4K94YgeKLuW6ZBa92tRSC4B3yVR4kZD", "about": "Create Viral Marketing Campaigns! Promote Your Product With The Power Of The People! Free For A Limited Time!", "description": "", "categories": [
                        {"id": 164886566892249, "name": "Advertising Agency"},
                        {"id": 170992992946914, "name": "Marketing Consultant"}
                    ], "keywords": null, "pic": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn2\/t1.0-1\/p100x100\/10003506_721564694530354_277872486_a.png", "website": "http:\/\/www.evangeler.com"},
                    {"page_id": 521217274665021, "name": "Multiplication master", "access_token": "CAALmwptiDqQBAFbRUygKt8ztbo71NqxIyXAMNLo5sG2ZBokOkegE5UiQUCQ3rqhwHbpMHXp1y7ZBg8uQmayoUr9AFfLjVaeOFSlgz3ZCZCImqaqJkpUf31Nljz1xiDfArZCwG4EZCPRJS6d75F8FILXbaCLrt2OnQY5zuNXfmZC96TzQZBmPEnQVBXkJXjMdkvAZD", "about": "Multiplication Master is a Fun way of learning maths and to train your brain.\nTry This Addicting game now at http:\/\/www.multiplicationmaster.com", "description": "", "categories": [], "keywords": null, "pic": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-frc3\/t1.0-1\/p100x100\/1901620_521219981331417_1375363601_a.png", "website": "http:\/\/www.multiplicationmaster.com"},
                    {"page_id": 334374070033245, "name": "Addicting Word Games", "access_token": "CAALmwptiDqQBAF6hjzCsxIvWlSXEU0EOkn45zLMRVdnrCAR3x0M50ZCJUuh36v77A5nqF0IctvbmZBP7NyF1G1r6MeTpwSge0F0JMWueyNZCirU6K0AcISmxpTBhPYiGaeM4dMZBUf2dKQ45xdqYyYmqaZAuSc7PhPDpDFRwwdmRprINXP4yiSctVGG0SSZCYZD", "about": "Addicting Word Games! Play Addicting Word Games Now At http:\/\/www.addictingwordgames.com", "description": "Addicting word games is a site where you can find 100's of fun addicting word games, have fun playing all the word games you love!\nCheck it out at http:\/\/www.addictingwordgames.com ", "categories": [], "keywords": null, "pic": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn2\/t1.0-1\/c12.12.155.155\/s100x100\/1170812_336418986495420_355624667_a.png", "website": "http:\/\/www.addictingwordgames.com"},
                    wordsmashing,
                    {"page_id": 337972272904903, "name": "Shopping Smart", "access_token": "CAALmwptiDqQBANNUONFlPqFapIXykncZBdXKXZCpZBwlOtvMHNPLYvXDJXWVI6lzxxSf8ZBSXBZAsINRA35xcVGjFruYnkXSNSErKLi9MAk6vtLfRx3urUwO8AXNDIZBqE3uxqrQEtZB0i08v0AEjKKaNxW7T9Pfnc1CRLLxino3IAnmb5JCu2bWr0u7mZAsjosZD", "about": "Want to buy online? Head to www.ShoppingSmart.co.nz where you can find clothing, jewellery, shoes, dresses, bags and more from all of new Zealands top brands. Compare prices get the best deal!", "description": "", "categories": [], "keywords": null, "pic": "https:\/\/fbcdn-profile-a.akamaihd.net\/static-ak\/rsrc.php\/v2\/yY\/r\/fmYdZvdquYb.png", "website": "http:\/\/www.shoppingsmart.co.nz"}
                ]
            })
        };


        $(document).ready(window.fbAsyncInit);
        done()
    });

});

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
                title: 'Word Smashing',
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

describe("the site", function () {

    it('should let you navigate to new page', function (done) {
        expect(models.user).toBeTruthy();
        
    });

});

