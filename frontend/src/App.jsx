import React, { useState } from "react";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";

export default function App() {
  const [view, setView] = useState("login");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          {view === "login" ? "Login" : "Register"}
        </h1>

        {view === "login" ? <LoginForm /> : <RegisterForm />}

        <p className="mt-4 text-sm text-center">
          {view === "login" ? (
            <>
              Don't have an account?{" "}
              <button
                className="text-blue-600 underline"
                onClick={() => setView("register")}
              >
                Register
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                className="text-blue-600 underline"
                onClick={() => setView("login")}
              >
                Login
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
