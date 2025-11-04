import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "../config/db.js";
import { swaggerUi, swaggerSpec } from "./swagger.js";
import expenseRoutes from "../routes/expenseRoutes.js";
import authRoutes from "../routes/authRoutes.js";


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

connectDB();

app.use("/api/expenses", expenseRoutes);
app.use("/api/auth", authRoutes);
app.use("/uploads", express.static("uploads"));


app.get("/", (req, res) => res.send("API running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
