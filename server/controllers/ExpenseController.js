import Expense from "../models/Expense.js";

export const addExpense = async (req, res) => {
  try {
    const newExpense = new Expense(req.body);
    const saved = await newExpense.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: "Failed to add expense", error });
  }
};

export const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch expenses", error });
  }
};
