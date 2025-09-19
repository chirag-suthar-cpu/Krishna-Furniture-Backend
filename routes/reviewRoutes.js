// // import express from "express";
// // import { getReviews, createReview, upload } from "../controllers/reviewController.js";

// // const router = express.Router();

// // // GET all reviews
// // router.get("/", getReviews);

// // // POST a new review with optional image
// // router.post("/", upload.single("image"), createReview);

// // export default router;








// const express = require('express');
// const router = express.Router();
// const reviewController = require('../controllers/reviewController');
// const fileUpload = require('express-fileupload');

// router.use(fileUpload());

// // GET /api/reviews
// router.get('/', reviewController.getReviews);

// // POST /api/reviews
// router.post('/', reviewController.createReview);

// module.exports = router;






const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

router.get('/', reviewController.getReviews);
router.post('/', reviewController.createReview);

module.exports = router;
