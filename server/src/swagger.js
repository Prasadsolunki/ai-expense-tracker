import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "AI Expense Tracker API",
      version: "1.0.0",
      description: "API documentation for AI Expense Tracker",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: [path.resolve(__dirname, "../routes/*.js")], // 👈 Points to your authRoutes.js
};

const swaggerSpec = swaggerJsDoc(options);
export { swaggerUi, swaggerSpec };
