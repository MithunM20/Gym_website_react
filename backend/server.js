const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/images", express.static("public/images"));


// DB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err));

// Routes
const authRoutes = require('./routes/auth');
const servicesRoutes = require('./routes/serviceRoutes');
const pricingRoutes = require("./routes/pricing");
const reviewRoutes= require('./routes/reviews.js');

app.use('/api/auth', authRoutes);
app.use('/api/services', servicesRoutes);
app.use("/api/pricing", pricingRoutes);
app.use('/api/reviews', reviewRoutes);

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
