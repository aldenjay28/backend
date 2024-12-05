import React, { useState } from "react";
import { login } from "../api/api";

function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login(credentials);
      localStorage.setItem("token", data.token);
      alert("Login successful!");
    } catch (error) {
      alert("Login failed. Check your credentials.");
    }
  };

  return (
    <div className="p-6 bg-lightBg dark:bg-darkBg min-h-screen">
      <form onSubmit={handleLogin} className="max-w-md mx-auto">
        <h2 className="text-2xl mb-4">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="input"
          onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="input"
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        />
        <button type="submit" className="btn-primary mt-4">Login</button>
      </form>
    </div>
  );
}

export default Login;
