window.fbAsyncInit = function () {
    FB.init({
        appId: '816673458359972',                        // App ID from the app dashboard
        channelUrl: '//evangeler.appspot.com/channel.html', // Channel file for x-domain comms
        status: true, // check login status
        cookie: true, // enable cookies to allow the server to access the session
        xfbml: true  // parse XFBML
    });
};

window.facebookWrapper = (function () {
    "use strict";
    var self = this;
    self.facebook_access_token = 0;
    self.fb_login = function () {
        FB.login(function (response) {

            if (response.authResponse) {
                console.log('Welcome!  Fetching your information.... ');

                self.facebook_access_token = response.authResponse.accessToken; //get access token
                var facebook_id = response.authResponse.userID; //get FB UID

                FB.api('/me', function (response) {
                    var email = response.email;
                    var facebook_profile_url = response.link;
                    var name = response.name;
                    models.getUser(function (user) {

                        if (user.is_signed_out || user.facebook_id !== facebook_id) {
                            //signed out or in as a different user
                            models.getOrCreateNewUser({
                                'facebook_id': facebook_id,
                                'facebook_access_token': self.facebook_access_token,
                                'facebook_profile_url': facebook_profile_url,
                                'email': email,
                                'name': name
                            }, function(user) {
                                APP.refresh();

                            });
                        }
                        else {
                            user.saveAccessToken(self.facebook_access_token);
                        }
                    })
                });

            } else {
                //user hit cancel button
                console.log('User cancelled login or did not fully authorize.');

            }
        }, {
            scope: 'publish_stream,email,manage_pages'//,publish_actions
        });
    };

    self.fb_logout = function () {
        FB.getLoginStatus(function (ret) {
            /// are they currently logged into Facebook?
            if (ret.authResponse) {
                //they were authed so do the logout
                FB.logout(function (response) {
                    // user is now logged out
                    $('#loginlogout').html('<button class="btn btn-danger" onclick="loginmodal()" type="button">Log In</button>');


                });
            } else {
                ///do something if they aren't logged in
                //or just get rid of this if you don't need to do something if they weren't logged in
                self.fb_login();
            }
        });
    };
    return self;
})();
