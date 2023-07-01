const express = require('express');
const dotenv = require('dotenv');
const app = express();

// Load environment variables from .env file
dotenv.config();

// Parse JSON body
app.use(express.json());
// app.use(bodyParser.json());

// Routes
const apiRoutes = require('./v1/routes/index');
const { errorMiddleware } = require('./v1/middlewares/errorMiddleweara');

app.use('/api', apiRoutes);
// Error handling middleware
app.use(errorMiddleware);
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ message: 'Internal server error' });
//   // res.status(500).json({ message: err.stack });
// });

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
