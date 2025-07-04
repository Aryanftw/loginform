import { useState } from "react";
import axios from "axios";

export default function RegisterForm() {
  const [data, setData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/register`, data);
      console.log("User created:", res.data);
      alert("Registered successfully!");
    } catch (err) {
      alert(err.response?.data?.message || "Register failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        className="w-full border p-2 rounded"
        name="name"
        placeholder="Name"
        value={data.name}
        onChange={handleChange}
        required
      />
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
      <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
        Register
      </button>
    </form>
  );
}
