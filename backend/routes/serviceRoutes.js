const express = require("express");
const router = express.Router();

const servicesData = [
  {
    _id: "1",
    title: "Personal Training",
    description: "One-on-one guidance to reach your fitness goals faster.",
    image: "/images/personal-training.jpg"
  },
  {
    _id: "2",
    title: "Group Classes",
    description: "Fun and energetic workouts with other fitness enthusiasts.",
    image: "/images/group-classes.jpg"
  },
  {
    _id: "3",
    title: "Nutrition Plans",
    description: "Customized diet plans for a healthier lifestyle.",
    image: "/images/nutrition-plans.jpg"
  }
];

router.get("/", (req, res) => {
  res.json(servicesData);
});

module.exports = router;
