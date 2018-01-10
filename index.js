const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

//class Models
require('./models/User');

//service
require('./services/passport');

mongoose.connect(keys.mongoURI, {
  useMongoClient: true
});

//initialize instance of express
const app = express();

//routes
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
