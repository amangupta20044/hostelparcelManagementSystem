const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const http = require('http');
const db = require('./config/db');

dotenv.config();
const app = express();
const server = http.createServer(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Import Routes
const authRoutes = require('./routes/authRoutes');
const parcelRoutes = require('./routes/parcelRoutes');
const adminRoutes = require('./routes/adminRoutes');
const complaintRoutes = require('./routes/complaintRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const returnRoutes = require('./routes/returnRoutes');
const notifyRoutes = require('./routes/notifyRoutes');







// Use Routes
app.use('/', authRoutes);
app.use('/parcels', parcelRoutes);
app.use('/admin', adminRoutes);
app.use('/complaints', complaintRoutes);
app.use('/check', dashboardRoutes);
app.use('/feedback', feedbackRoutes);
app.use('/returns', returnRoutes);
app.use('/notify', notifyRoutes);

// Default route
app.get('/', (req, res) => res.redirect('/login'));

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
