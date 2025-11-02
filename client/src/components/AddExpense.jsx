import React, { useState } from "react";
import api from "../api/axios";

export default function AddExpense() {
  const [form, setForm] = useState({
    userId: "user123",
    title: "",
    category: "Food",
    amount: "",
    paymentMode: "Cash",
    date: new Date().toISOString().slice(0,10),
    note: "",
  });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...form,
        amount: Number(form.amount),
        date: form.date,
      };
      const res = await api.post("/expenses", payload);
      setMsg("Expense added ✅");
      setForm({ ...form, title: "", amount: "", note: "" });
    } catch (err) {
      console.error(err);
      setMsg("Failed to add expense ❌");
    }
  };

  return (
    <div style={{maxWidth:600, margin:"1rem auto", padding:16}}>
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label><br/>
          <input name="title" value={form.title} onChange={handleChange} required />
        </div>
        <div>
          <label>Category</label><br/>
          <select name="category" value={form.category} onChange={handleChange}>
            <option>Food</option><option>Travel</option><option>Rent</option><option>Other</option>
          </select>
        </div>
        <div>
          <label>Amount</label><br/>
          <input name="amount" type="number" value={form.amount} onChange={handleChange} required />
        </div>
        <div>
          <label>Date</label><br/>
          <input name="date" type="date" value={form.date} onChange={handleChange} required />
        </div>
        <div>
          <label>Payment Mode</label><br/>
          <select name="paymentMode" value={form.paymentMode} onChange={handleChange}>
            <option>Cash</option><option>Card</option><option>UPI</option>
          </select>
        </div>
        <div>
          <label>Note</label><br/>
          <input name="note" value={form.note} onChange={handleChange} />
        </div>
        <button type="submit" style={{marginTop:10}}>Save</button>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  );
}
