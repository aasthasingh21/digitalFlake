const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String 
});

userSchema.plugin(plm); // we have provided serialize/deserialized users in app.js so with this we provide them in the userSchema

module.exports = mongoose.model("User", userSchema);