import express from "express";
import { addExpense, getExpenses } from "../controllers/ExpenseController.js";
import { protect } from "../src/middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, addExpense);
router.get("/", protect, getExpenses);

export default router;
