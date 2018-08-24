const mongoose = require('mongoose');
const { Schema } = mongoose;

const reviewSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'provide reviewers name'],
      trim: true,
    },
    stars: {
      type: Number,
      min: [1, 'ratings must be: 1,2,3,4 or 5.'],
      max: [5, 'ratings must be: 1,2,3,4 or 5.'],
      required: true,
    },
    description: {
      type: String,
      required: [true, 'please detail your experience'],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Review', reviewSchema);
