const express = require('express');
const router = express.Router();

// Temporary static review data
const reviews = [
  { name: "Amit Kumar", review: "Best gym in town! The trainers are amazing and supportive." },
  { name: "Sneha Sharma", review: "Clean environment and well-maintained equipment." },
  { name: "Rahul Verma", review: "Great place to work out. Friendly atmosphere!" }
];

// GET all reviews
router.get('/', (req, res) => {
  res.json(reviews);
});

module.exports = router;
