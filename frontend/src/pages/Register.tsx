// src/pages/register.jsx
import React from "react";
import RegisterForm from "../components/RegisterForm"; // adjust path if needed

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Create an Account</h2>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
