const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const employeeRoutes = require('./routes/employeeRoutes');
const managerRoutes = require('./routes/managerRoutes');
const timesheetRoutes = require('./routes/timesheetRoutes');
const ratingRoutes = require('./routes/ratingRoutes');
const authMiddleware = require('./middleware/auth');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/employees', employeeRoutes);
app.use('/api/managers', managerRoutes);
app.use('/api/timesheets', timesheetRoutes);
app.use('/api/ratings', ratingRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/timesheet', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => {
  console.log('MongoDB Connected');
}).catch((err) => {
  console.error('MongoDB Connection Error:', err);
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
