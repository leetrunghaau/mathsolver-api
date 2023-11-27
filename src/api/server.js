const express = require('express');
const dotenv = require('dotenv');
var cors = require('cors')
const app = express();


// Load environment variables from .env file
dotenv.config();
// Parse JSON body
app.use(express.json());
// app.use(bodyParser.json());
// Routes
const apiRoutes = require('./v1/routes/index');
const { errorMiddleware } = require('./v1/middlewares/error-middleweara');
app.use('/api/v1', cors() ,apiRoutes);
// Error handling middleware
app.use(errorMiddleware);



// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
