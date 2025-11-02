import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  userId: String,
  title: String,
  category: String,
  amount: Number,
  paymentMode: String,
  date: Date,
  note: String,
}, { timestamps: true });

export default mongoose.model("Expense", expenseSchema);
