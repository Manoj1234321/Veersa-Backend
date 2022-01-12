const options = {
    swaggerDefinition: {
      openapi: "3.0.1",
      info: {
        title: "Veersa Backend",
        version: "1.0.0",
      },
      servers: [{
        url: "http://localhost:1257",
      }, ],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
          },
        },
      },
      security: [{
        bearerAuth: [],
      }, ]
    },
    apis: ["./routes/calenderRoutes/*.js"],
  };

  module.exports = options