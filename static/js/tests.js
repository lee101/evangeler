describe("game", function () {

    it('should let you login', function (done) {
        FB.login = function(callback, params){
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
        facebookWrapper.fb_login(function(user){
            expect(user.email).toBe('test');
            done();
        });
    });

//    it('should let you log out', function (done) {
//    });
//
//    it('should let you unlock levels', function (done) {
//    });

});
