import User from "../models/User.js";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// Register
export const registerUser = async (req, res) => {
  const { name, email, password} = req.body;
  const profilePic = req.file ? `/uploads/${req.file.filename}` : ""; 
  try {
    const userExists = await User.findOne({ email });
    if(userExists) return res.status(400).json({ message: "User already exists" });

    const user = await User.create({ name, email, password, profilePic});
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      profilePic: user.profilePic,
      token: generateToken(user._id),
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Login
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if(user && await user.matchPassword(password)){ 
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        message: "Login Successfully",
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    // Generate token
    const token = crypto.randomBytes(20).toString("hex");

    // Save token + expiry
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 15 * 60 * 1000; // 15 min
    await user.save();

    // Setup email transporter (using Gmail for example)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail
        pass: process.env.EMAIL_PASS, // your App Password
      },
    });

    const resetUrl = `http://localhost:5173/reset-password/${token}`;

    const mailOptions = {
      to: user.email,
      from: process.env.EMAIL_USER,
      subject: "Password Reset - AI Expense Tracker",
      html: `
        <p>Hi ${user.name || "User"},</p>
        <p>You requested a password reset. Click below link to reset:</p>
        <a href="${resetUrl}">${resetUrl}</a>
        <p>This link will expire in 15 minutes.</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Reset link sent to your email" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error sending reset email" });
  }
};

// Reset password
export const resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }, // valid token
    });

    if (!user) return res.status(400).json({ message: "Invalid or expired token" });

    // Hash new password
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;

    // Clear reset token
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();
    res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error resetting password" });
  }
};
