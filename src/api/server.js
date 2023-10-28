const express = require('express');
const dotenv = require('dotenv');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const app = express();
require('./v1/controllers/address-controller')
// Load environment variables from .env file
dotenv.config();

// Parse JSON body
app.use(express.json());
// app.use(bodyParser.json());

// Routes
const apiRoutes = require('./v1/routes/index');
const { errorMiddleware } = require('./v1/middlewares/error-middleweara');
app.use('/api/v1', apiRoutes);
// Error handling middleware
app.use(errorMiddleware);


//swager

const specs = swaggerJsdoc({
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Mathsolver API',
    }
  },
  apis: [
    './v1/routes/*.js'
  ],
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
