import React, { useState } from "react";
import "./Login.css";

const Login: React.FC = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Both fields are required.");
      return;
    }
    // TODO: Add login logic here (API call)
    alert("Login successful!");
  };

  return (
    <div className="login-container">
      <h2 className="login-title">
        Log In to Texter
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          className="login-input"
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          className="login-input"
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        {error && (
          <div className="login-error">
            {error}
          </div>
        )}
        <button
          className="login-button"
          type="submit"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;