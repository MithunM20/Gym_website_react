const express = require("express");
const router = express.Router();

const pricingPlans = [
  {
    id: 1,
    name: "Basic Plan",
    price: "₹999/month",
    features: ["Access to gym equipment", "1 Trainer session/month", "Locker facility"]
  },
  {
    id: 2,
    name: "Standard Plan",
    price: "₹1499/month",
    features: ["Access to gym equipment", "5 Trainer sessions/month", "Diet plan", "Locker facility"]
  },
  {
    id: 3,
    name: "Premium Plan",
    price: "₹2499/month",
    features: ["Unlimited trainer sessions", "Personalized diet plan", "Locker + Steam room", "Priority support"]
  }
];

router.get("/", (req, res) => {
  res.json(pricingPlans);
});

module.exports = router;
