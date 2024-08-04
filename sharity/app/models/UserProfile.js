// models/UserProfile.js
import mongoose from 'mongoose';

const UserProfileSchema = new mongoose.Schema({
  name: String,
  donationHistory: [
    {
      transactionId: String,
      amount: Number,
      date: Date,
    },
  ],
});

export default mongoose.models.UserProfile || mongoose.model('UserProfile', UserProfileSchema);
