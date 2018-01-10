const passport = require('passport');

module.exports = app => {
  //route to google (OAuth) sign in/sign up
  app.get('/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('auth/google/callback',
    passport.authenticate('google')
  );
}
