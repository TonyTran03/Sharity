// lib/user.js
const bcrypt = require('bcrypt');
const dbConnect = require('./dbConnect');
const mongoose = require('mongoose');

// Define User Schema and Model
const UserProfileSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const UserProfile = mongoose.models.UserProfile || mongoose.model('UserProfile', UserProfileSchema);

async function create(user, callback) {
  try {
    await dbConnect();

    // Check if a user with the same email already exists
    const withSameMail = await UserProfile.findOne({ email: user.email });
    if (withSameMail) {
      return callback(new Error('The user already exists'));
    }

    // Hash the user's password
    const hash = await bcrypt.hash(user.password, 10);
    user.password = hash;

    // Insert the new user into the database
    await UserProfile.create(user);
    callback(null);
  } catch (err) {
    callback(err);
  }
}

module.exports = create;
