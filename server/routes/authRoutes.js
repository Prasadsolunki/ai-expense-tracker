import express from "express";
import upload from "../src/middleware/uploadMiddleware.js";
import { registerUser, loginUser } from "../controllers/authController.js";

const router = express.Router();
/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: User authentication
 */
/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               profilePic:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: User already exists
 */
router.post("/register", upload.single("profilePic"), registerUser); // 👈 added upload

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Log in existing user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login success, returns JWT token
 *       401:
 *         description: Invalid credentials
 */
router.post("/login", loginUser);

export default router;
