        //Mock Facebook
        FB = {};
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
                }
            })
        };


        $(document).ready(window.fbAsyncInit);


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
                expect(models.user).toBeTruthy()

                models.getUser(function (user) {
                    user.createCompany({
                        name: 'test',
                        description: 'description',
                        title: 'title',
                        facebook_link: 'test',
                        tags: ['test', 'testtags'],
                        facebook_id: 'test'
                    }, function (data) {
                        expect(data).toBe('success');
                        models.getUser(function (user) {

                            expect(user.companies.length).toBe(1)
                            expect(user.companies[0].facebook_id).toBe('test')
                            done()
                        })

                    })
                })
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
