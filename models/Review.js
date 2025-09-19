// // const mongoose = require('mongoose');

// // const reviewSchema = new mongoose.Schema({
// //   name: { type: String, required: true },
// //   rating: { type: Number, required: true },
// //   message: { type: String, required: true },
// //   imageUrl: { type: String }, // store path to uploaded image
// //   location: { type: String }, // optional
// // }, { timestamps: true });

// // module.exports = mongoose.model('Review', reviewSchema);









const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  message: { type: String, required: true },
  imageUrl: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);
