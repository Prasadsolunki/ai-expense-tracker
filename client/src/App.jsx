import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Login from "@/components/auth/Login";
import Register from "@/components/auth/Register";
import Dashboard from "@/components/Dashboard";
import ProtectedRoute from "@/components/routes/ProtectedRoute";
import { Routes, Route } from "react-router-dom";

function App(){
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <main>
              <Hero />
              <Features />
              <Testimonials />
              <FAQ />
            </main>
            <Footer />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </div>
  );
}

export default App;
