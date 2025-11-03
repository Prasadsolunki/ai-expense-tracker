import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import AddExpense from "@/components/AddExpense";

function App(){
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <section className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="mb-4 text-2xl font-semibold">Quick Add Expense</h2>
          <AddExpense />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
