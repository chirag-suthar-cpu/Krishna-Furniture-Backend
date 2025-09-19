// // import Review from "../models/Review.js";
// // import multer from "multer";
// // import path from "path";
// // import fs from "fs";

// // // Setup multer for image upload
// // const storage = multer.diskStorage({
// //   destination: function (req, file, cb) {
// //     const dir = "uploads/";
// //     if (!fs.existsSync(dir)) fs.mkdirSync(dir);
// //     cb(null, dir);
// //   },
// //   filename: function (req, file, cb) {
// //     cb(null, Date.now() + path.extname(file.originalname));
// //   }
// // });
// // export const upload = multer({ storage });

// // export const getReviews = async (req, res) => {
// //   try {
// //     const reviews = await Review.find().sort({ createdAt: -1 });
// //     res.json(reviews);
// //   } catch (err) {
// //     res.status(500).json({ error: "Failed to fetch reviews" });
// //   }
// // };

// // export const createReview = async (req, res) => {
// //   try {
// //     const { name, rating, message } = req.body;
// //     let imageUrl = null;
// //     if (req.file) {
// //       imageUrl = "/" + req.file.path;
// //     }
// //     const newReview = new Review({ name, rating, message, imageUrl });
// //     await newReview.save();
// //     res.status(201).json(newReview);
// //   } catch (err) {
// //     console.error(err);
// //     res.status(500).json({ error: "Failed to submit review" });
// //   }
// // };








// const Review = require('./models/Review');
// const path = require('path');
// const fs = require('fs');

// exports.getReviews = async (req, res) => {
//   try {
//     const reviews = await Review.find().sort({ createdAt: -1 });
//     res.json(reviews);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to fetch reviews' });
//   }
// };

// exports.createReview = async (req, res) => {
//   try {
//     const { name, rating, message } = req.body;
//     let imageUrl = '';

//     if (req.files && req.files.image) {
//       const image = req.files.image;
//       const uploadPath = path.join(__dirname, '../uploads', image.name);

//       await image.mv(uploadPath); // move uploaded file
//       imageUrl = `/uploads/${image.name}`;
//     }

//     const review = new Review({
//       name,
//       rating,
//       message,
//       imageUrl,
//     });

//     await review.save();
//     res.status(201).json({ success: true, review });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Failed to submit review' });
//   }
// };










const Review = require('../models/Review');
const path = require('path');
const fs = require('fs');

exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
};

exports.createReview = async (req, res) => {
  try {
    const { name, rating, message } = req.body;

    let imageUrl = '';
    if (req.files && req.files.image) {
      const image = req.files.image;
      const uploadDir = path.join(__dirname, '../uploads');
      if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

      const filename = Date.now() + path.extname(image.name);
      const uploadPath = path.join(uploadDir, filename);

      await image.mv(uploadPath);
      imageUrl = `/uploads/${filename}`;
    }

    const review = new Review({ name, rating, message, imageUrl });
    await review.save();

    res.status(201).json({ success: true, review });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to submit review' });
  }
};
