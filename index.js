const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/dev');

//class Models
require('./models/User');

//service
require('./services/passport');

mongoose.connect(keys.mongoURI, {
  useMongoClient: true
});

//initialize instance of express
const app = express();
app.use(
  cookieSession({
    maxAge: 2592000000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());


//routes
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
