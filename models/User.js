const mongoose = require('mongoose');
const { Schema } = mongoose;

//User Schema
const userSchema = new Schema({
  googleID: String
});

mongoose.model('users', userSchema);
