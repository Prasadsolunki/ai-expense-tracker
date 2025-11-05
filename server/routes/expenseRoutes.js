import express from "express";
import { addExpense, getExpenses } from "../controllers/ExpenseController.js";
import { protect } from "../src/middleware/authMiddleware.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Expenses
 *   description: Manage user expenses
 */

/**
 * @swagger
 * /api/expenses:
 *   post:
 *     summary: Add a new expense
 *     tags: [Expenses]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Grocery shopping"
 *               amount:
 *                 type: number
 *                 example: 45.5
 *               category:
 *                 type: string
 *                 example: "Food"
 *               date:
 *                 type: string
 *                 format: date
 *                 example: "2025-11-05"
 *     responses:
 *       201:
 *         description: Expense added successfully
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 */
router.post("/", protect, addExpense);

/**
 * @swagger
 * /api/expenses:
 *   get:
 *     summary: Get all expenses of the logged-in user
 *     tags: [Expenses]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of expenses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   title:
 *                     type: string
 *                   amount:
 *                     type: number
 *                   category:
 *                     type: string
 *                   date:
 *                     type: string
 *                     format: date
 *                   user:
 *                     type: string
 *       401:
 *         description: Unauthorized
 */
router.get("/", protect, getExpenses);

export default router;
