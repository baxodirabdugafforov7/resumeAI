import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { useAuthStore } from "../stores/useAuthStore";

const RegisterForm: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const { register, loading } = useAuthStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    register(form); // form has { name, email, password }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-sm mx-auto">
      <h2 className="text-2xl font-bold text-center">Register</h2>

      <Input
        name="name"
        label="Full Name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <Input
        name="email"
        label="Email"
        type="email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <Input
        name="password"
        label="Password"
        type="password"
        value={form.password}
        onChange={handleChange}
        required
      />

      <Button type="submit" disabled={loading}>
        {loading ? "Registering..." : "Register"}
      </Button>
    </form>
  );
};

export default RegisterForm;
