require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(helmet());

// ✅ CORS for local dev + Vercel frontend
app.use(cors({
  origin: [
    'http://localhost:3000', // local dev
    'https://krishna-furniture-frontend.vercel.app' // deployed frontend
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json({ limit: '20kb' }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/reviews', reviewRoutes);

// Health check
app.get('/api/health', (req, res) => res.json({ ok: true }));

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
