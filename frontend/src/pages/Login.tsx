// src/pages/login.jsx
import React from "react";
import LoginForm from "../components/LoginForm"; // adjust path if needed

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Login to ResumeAI</h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
