// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : 'App ID', // your App ID
        'clientSecret'    : 'App Secret', // your App Secret
        'callbackURL'     : 'http://localhost:3000/auth/facebook/callback',
        'profileFields'   : ['id', 'displayName', 'name', 'gender' , 'email', 'photos']
        // 'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email'

    }

};
