// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : '114706539031197', // your App ID
        'clientSecret'    : '8d20971b0312ff3e117c8ebf93cbd9c6', // your App Secret
        'callbackURL'     : 'http://localhost:3000/auth/facebook/callback',
        'profileFields'   : ['id', 'displayName', 'name', 'gender' , 'email']
        // 'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email'

    }

};
