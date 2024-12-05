import React, { useState } from "react";
import { register } from "../api/api";

function Register() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData);
      alert("Registration successful! You can now login.");
    } catch (error) {
      alert("Registration failed.");
    }
  };

  return (
    <div className="p-6 bg-lightBg dark:bg-darkBg min-h-screen">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <h2 className="text-2xl mb-4">Register</h2>
        <input
          type="text"
          placeholder="Name"
          className="input"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="input"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="input"
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <button type="submit" className="btn-primary mt-4">Register</button>
      </form>
    </div>
  );
}

export default Register;
