/*  Google AUTH  */
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();
const session = require('express-session');


passport.use(new GoogleStrategy({
    clientID: "64931160981-q5sb22qr5aclg7pllcnb3s2k5fg76nep.apps.googleusercontent.com", //GOOGLE_CLIENT_ID,
    clientSecret:  "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",  // GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      userProfile=profile;
      return done(null, userProfile);
  }
));
 
app.get('/auth/google', 
  passport.authenticate('google', { scope : ['profile', 'email'] }));
 
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/error' }),
  function(req, res) {
    // Successful authentication, redirect success.
    res.redirect('/success');
  });
  