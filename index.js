const fs = require('fs');
const path = require('path');
const express = require('express');
const swaggerTools = require('swagger-tools');
const jsyaml = require('js-yaml');

const app = express();
const serverPort = 5000;

// swaggerRouter configuration
const options = {
  swaggerUi: path.join(__dirname, '/swagger.json'),
  controllers: path.join(__dirname, './controllers'),
  useStubs: process.env.NODE_ENV === 'development', // Conditionally turn on stubs (mock mode)
};

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
const spec = fs.readFileSync(path.join(__dirname, 'api/swagger.yaml'), 'utf8');
const swaggerDoc = jsyaml.safeLoad(spec);

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, (middleware) => {
  // Interpret Swagger resources and attach metadata to request
  app.use(middleware.swaggerMetadata());
  // Validate Swagger requests
  app.use(middleware.swaggerValidator());
  // Route validated requests to appropriate controller
  app.use(middleware.swaggerRouter(options));
  // Serve the Swagger documents and Swagger UI
  app.use(middleware.swaggerUi());
  // Start the server
  app.listen(serverPort);
});
