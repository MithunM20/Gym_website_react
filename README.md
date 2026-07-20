### Gym Website 
A modern full-stack Gym website built using the MERN stack (MongoDB, Express.js, React.js, Node.js).
The site features authentication, service listings, pricing plans, reviews, and more.
Backend is hosted on Render, frontend on Vercel.

Live Demo: gym-website-react-zeta.vercel.app

Features
Authentication: Login & Signup integrated with MongoDB.

Hero Section: Eye-catching quote and image.

Services: Dynamic list fetched from backend API.

About Us: Informative section about the gym.

Pricing Plans: Fetched and displayed from backend.

Reviews: User testimonials, dynamically loaded.

Responsive Navbar & Footer: Seamless navigation and info.

Modern UI: Built with React.

## Tech Stack
Frontend: React JS (hosted on Vercel)

Backend: Node.js, Express.js (hosted on Render)

Database: MongoDB (for authentication)

API: RESTful endpoints for services, pricing, reviews

 ## Getting Started
1. Clone the repo
bash
git clone https://github.com/MithunM20/Gym_website_react.git
cd Gym_website_react
2. Install dependencies
For the backend

cd backend
npm install

For the frontend
bash
cd ../frontend
npm install
3. Set up environment variables
Create a .env file in the backend folder:

text
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
4. Run locally
Backend:

bash
cd backend
npm run dev
Frontend:

bash
cd frontend
npm start
Visit http://localhost:3000 in your browser.

## API Endpoints
POST /api/auth/login — User login

POST /api/auth/signup — User signup

GET /api/services — Get services list

GET /api/pricing — Get pricing plans

GET /api/reviews — Get user reviews

## Deployment
Live Site: gym-website-react-zeta.vercel.app

Frontend: Vercel

Backend: Render





💬 Contact
For any questions, reach out at mithunmnair103@gmail.com.
