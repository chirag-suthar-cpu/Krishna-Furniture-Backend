// // // require('dotenv').config();
// // // const express = require('express');
// // // const cors = require('cors');
// // // const helmet = require('helmet');
// // // const morgan = require('morgan');
// // // const connectDB = require('./config/db');
// // // const contactRoutes = require('./routes/contactRoutes');

// // // const app = express();

// // // // Connect to MongoDB
// // // connectDB();

// // // // Middleware
// // // app.use(helmet());
// // // app.use(cors()); // allow frontend requests
// // // app.use(express.json({ limit: '20kb' }));
// // // app.use(morgan('dev'));

// // // // Routes
// // // app.use('/api/contact', contactRoutes);
// // // app.get('/api/health', (req, res) => res.json({ ok: true }));

// // // const PORT = process.env.PORT || 5001;
// // // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





// // require('dotenv').config();
// // const express = require('express');
// // const cors = require('cors');
// // const helmet = require('helmet');
// // const morgan = require('morgan');
// // const connectDB = require('./config/db');
// // const contactRoutes = require('./routes/contactRoutes');
// // const reviewRoutes = require('./routes/reviewRoutes'); // <- naya review routes
// // const path = require('path');

// // const app = express();

// // // Connect to MongoDB
// // connectDB();

// // // Middleware
// // app.use(helmet());
// // app.use(cors()); // allow frontend requests
// // app.use(express.json({ limit: '20kb' }));
// // app.use(express.urlencoded({ extended: true })); // for form data
// // app.use(morgan('dev'));

// // // Serve uploaded images
// // app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // // Routes
// // app.use('/api/contact', contactRoutes);
// // app.use('/api/reviews', reviewRoutes); // <- naya route for reviews
// // app.get('/api/health', (req, res) => res.json({ ok: true }));

// // const PORT = process.env.PORT || 5001;
// // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));








// // require('dotenv').config();
// // const express = require('express');
// // const cors = require('cors');
// // const helmet = require('helmet');
// // const morgan = require('morgan');
// // const connectDB = require('./config/db');
// // const contactRoutes = require('./routes/contactRoutes');
// // const reviewRoutes = require('./routes/reviewRoutes');
// // const path = require('path');
// // const fileUpload = require('express-fileupload');

// // const app = express();

// // // Connect to MongoDB
// // connectDB();

// // // Middleware
// // app.use(helmet());
// // app.use(cors()); // allow frontend requests
// // app.use(express.json({ limit: '20kb' }));
// // app.use(express.urlencoded({ extended: true })); // for form data
// // app.use(morgan('dev'));
// // app.use(fileUpload()); // to handle image uploads

// // // Serve uploaded images
// // app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // // Routes
// // app.use('/api/contact', contactRoutes);
// // app.use('/api/reviews', reviewRoutes);

// // // Health check
// // app.get('/api/health', (req, res) => res.json({ ok: true }));

// // // Start server
// // const PORT = process.env.PORT || 5001;
// // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));













// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const helmet = require('helmet');
// const morgan = require('morgan');
// const path = require('path');
// const fileUpload = require('express-fileupload');

// const connectDB = require('./config/db');
// const contactRoutes = require('./routes/contactRoutes');
// const reviewRoutes = require('./routes/reviewRoutes');

// const app = express();

// // Connect to MongoDB
// connectDB();

// // Middleware
// app.use(helmet());
// app.use(cors()); // allow frontend requests
// app.use(express.json({ limit: '20kb' }));
// app.use(express.urlencoded({ extended: true }));
// app.use(fileUpload()); // handle image uploads
// app.use(morgan('dev'));

// // Serve uploaded images statically
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Routes
// app.use('/api/contact', contactRoutes);
// app.use('/api/reviews', reviewRoutes);

// // Health check
// app.get('/api/health', (req, res) => res.json({ ok: true }));

// // Start server
// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));












// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const helmet = require('helmet');
// const morgan = require('morgan');
// const connectDB = require('./config/db');
// const contactRoutes = require('./routes/contactRoutes');
// const reviewRoutes = require('./routes/reviewRoutes');
// const path = require('path');
// const fileUpload = require('express-fileupload');

// const app = express();

// // Connect to MongoDB
// connectDB();

// // Middleware
// app.use(helmet());
// app.use(cors());
// app.use(express.json({ limit: '20kb' }));
// app.use(express.urlencoded({ extended: true }));
// app.use(morgan('dev'));
// app.use(fileUpload()); // for image uploads

// // Serve uploaded images
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Routes
// app.use('/api/contact', contactRoutes);
// app.use('/api/reviews', reviewRoutes);

// // Health check
// app.get('/api/health', (req, res) => res.json({ ok: true }));

// // Start server
// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));













// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const helmet = require('helmet');
// const morgan = require('morgan');
// const connectDB = require('./config/db');
// const contactRoutes = require('./routes/contactRoutes');
// const reviewRoutes = require('./routes/reviewRoutes');
// const path = require('path');
// const fileUpload = require('express-fileupload');

// const app = express();

// // Connect to MongoDB
// connectDB();

// // Middleware
// app.use(helmet());

// // ✅ CORS: Frontend origin ko allow karna
// app.use(cors({
//   origin: 'http://localhost:3000', // front-end ka URL
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   credentials: true
// }));

// app.use(express.json({ limit: '20kb' }));
// app.use(express.urlencoded({ extended: true }));
// app.use(morgan('dev'));
// app.use(fileUpload()); // for image uploads

// // ✅ Serve uploaded images
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Routes
// app.use('/api/contact', contactRoutes);
// app.use('/api/reviews', reviewRoutes);

// // Health check
// app.get('/api/health', (req, res) => res.json({ ok: true }));

// // Start server
// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));






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
app.use(cors({
  origin: 'https://krishna-furniture-frontend.vercel.app', // Vercel frontend URL
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
