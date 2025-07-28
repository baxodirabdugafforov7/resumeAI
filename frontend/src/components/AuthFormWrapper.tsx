// src/components/AuthFormWrapper.tsx
import React from "react";

const AuthFormWrapper = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-6">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default AuthFormWrapper;
