// Here we run a very simple test of the Graph API after login is successful.
// This testAPI() function is only called in those cases.
function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function (response) {
        console.log('Good to see you, ' + response.name + '.');
    });
}

window.fbAsyncInit = function () {
    FB.init({
        appId: '138831849632195',                        // App ID from the app dashboard
        channelUrl: '//evangeler.appspot.com/channel.html', // Channel file for x-domain comms
        status: true, // check login status
        cookie: true, // enable cookies to allow the server to access the session
        xfbml: true  // parse XFBML
    });

    //Fetch the status so that we can log out.
    //You must have the login status before you can logout,
    //and if you authenticated via oAuth (server side), this is necessary.
    //If you logged in via the JavaScript SDK, you can simply call FB.logout()
    //once the login status is fetched, call handleSessionResponse
    FB.getLoginStatus();

    // Here we subscribe to the auth.authResponseChange JavaScript event. This event is fired
    // for any authentication related change, such as login, logout or session refresh. This means that
    // whenever someone who was previously logged out tries to log in again, the correct case below
    // will be handled.
    FB.Event.subscribe('auth.authResponseChange', function (response) {
        // Here we specify what we do with the response anytime this event occurs.
        if (response.status === 'connected') {
            // The response object is returned with a status field that lets the app know the current
            // login status of the person. In this case, we're handling the situation where they
            // have logged in to the app.

            if (response.authResponse) {
                access_token = response.authResponse.accessToken; //get access token
                user_id = response.authResponse.userID; //get FB UID
            }
            FB.api('/me', function (resp) {
                console.log('Good to see you, ' + resp.name + '.');
                user_name = resp.name;
                //add logout button
                $('#loginlogout').html('<p>Hi, ' + user_name + '<a class="btn btn-danger" onclick="fb_logout();">Log Out</a></p>');

                if (loginModalIsOpen) {
                    modal.close();
                }
                {%
                    if 'buy' in url or
                    'campaign' in url %
                }
                //only for buy page

                //window.location.reload();
                buybtn = $('#paypalbuyform')
                if (buybtn) {
                    buybtn.attr('data-callback', 'http://www.evangeler.com/ipn/' + user_id)
                }
                $('#logintobuy').html('Hi, ' + user_name + ' Your purchase will be asscociated with your Facebook account!')
                $('#buybutton').prop('disabled', false);
                $('#ppbuy').css({display: 'block'});
                $.ajax({
                    "url": "/isgold",
                    "data": {"access_token": access_token},
                    "success": function (text) {
                        if (text == "success") {
                            $('#mustsignin').css({'display': 'none'});
                            $('#donesharing').css({'display': 'none'});
                            $('#campaign-for-free').css({'display': 'none'});
                            $('#gametable').css({'display': 'block'});
                        } else {
                            $('#mustsignin').css({'display': 'none'});
                            $('#campaign-for-free').html('Get Evangeler Campaign for Free! <br/>Just click below to share us and click done!');
                        }
                    },
                    "type": "GET",
                    "cache": false,
                    "error": function (xhr, error, thrown) {
                        if (error == "parsererror") {
                            console.log("JSON data from " +
                                "server could not be parsed. This is caused by a JSON formatting error.");
                        }
                    }
                });
                {%
                    endif %
                }

            });


            console.log(response);
        } else if (response.status === 'not_authorized') {
            // In this case, the person is logged into Facebook, but not into the app, so we call
            // FB.login() to prompt them to do so.
            // In real-life usage, you wouldn't want to immediately prompt someone to login
            // like this, for two reasons:
            // (1) JavaScript created popup windows are blocked by most browsers unless they
            // result from direct interaction from people using the app (such as a mouse click)
            // (2) it is a bad experience to be continually prompted to login upon page load.
            FB.login();
        } else {
            // In this case, the person is not logged into Facebook, so we call the login()
            // function to prompt them to do so. Note that at this stage there is no indication
            // of whether they are logged into the app. If they aren't then they'll see the Login
            // dialog right after they log in to Facebook.
            // The same caveats as above apply to the FB.login() call here.
            FB.login();
        }
    });
};
access_token = 0;
function fb_login() {
    FB.login(function (response) {

        if (response.authResponse) {
            console.log('Welcome!  Fetching your information.... ');
            //console.log(response); // dump complete info
            access_token = response.authResponse.accessToken; //get access token
            user_id = response.authResponse.userID; //get FB UID

            FB.api('/me', function (response) {
                user_email = response.email; //get user email
            });

        } else {
            //user hit cancel button
            console.log('User cancelled login or did not fully authorize.');

        }
    }, {
        scope: 'publish_stream,email'
    });
}
function fb_logout() {
    FB.getLoginStatus(function (ret) {
        /// are they currently logged into Facebook?
        if (ret.authResponse) {
            //they were authed so do the logout
            FB.logout(function (response) {
                // user is now logged out
                $('#loginlogout').html('<button class="btn btn-danger" onclick="loginmodal()" type="button">Log In</button>');
                //only for buy page
                $('#logintobuy').html('Log in with Facebook or Google!<br/><br/>' +
                    '<a style="margin:10px;" href="{{ glogin_url }}" title="Login With Google"><img src="/img/google-icon-64.png" alt="Google Login"/></a>' +
                    '<a href="#" onclick="fb_login();return false" title="Login With Facebook"><img src="/img/facebook-icon-64.png" alt="Facebook Login"/></a><br/><br/>' +
                    'Your purchase will be asscociated with your account.<br/><br/>');
                $('#buybutton').prop('disabled', true);

            });
        } else {
            ///do something if they aren't logged in
            //or just get rid of this if you don't need to do something if they weren't logged in
            fb_login();
        }
    });
    // if (access_token){
    //   window.location.href = 'https://www.facebook.com/logout.php?next=
    {
        {
            url
        }
    }
&
    access_token = '+access_token;
    // }
    // else {
    //   window.location.href = 'https://www.facebook.com/logout.php?next=
    {
        {
            url
        }
    }
&
    access_token =
    {
    {
        current_user.access_token
    }
}
';
// }
}
