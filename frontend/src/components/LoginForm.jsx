import { useState } from "react";
import axios from "axios";

export default function LoginForm() {
  const [data, setData] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/login`, data);
      console.log("User logged in:", res.data);
      alert("Login successful!");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        className="w-full border p-2 rounded"
        name="email"
        placeholder="Email"
        type="email"
        value={data.email}
        onChange={handleChange}
        required
      />
      <input
        className="w-full border p-2 rounded"
        name="password"
        placeholder="Password"
        type="password"
        value={data.password}
        onChange={handleChange}
        required
      />
      <button className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">
        Login
      </button>
    </form>
  );
}
