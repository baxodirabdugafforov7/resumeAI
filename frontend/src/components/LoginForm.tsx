import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "./Input";
import Button from "./Button";
import { useAuthStore } from "../stores/useAuthStore";
import type { LoginCredentials, User } from "../types/auth";

const LoginForm: React.FC = () => {
  const [form, setForm] = useState<LoginCredentials>({ email: "", password: "" });
  const { login, setLoading, loading } = useAuthStore();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post("https://findcourse.net.uz/api/auth/login", form);

      const user: User = {
        id: response.data.id,
        name: response.data.name,
        email: response.data.email,
        token: response.data.token,
        avatarUrl: response.data.avatarUrl,
      };

      login(user);
      navigate("/dashboard"); // or wherever your main page is
    } catch (error: any) {
      alert(error?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-sm mx-auto">
      <h2 className="text-2xl font-bold text-center">Login</h2>

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
        {loading ? "Logging in..." : "Login"}
      </Button>

      <p className="text-center text-sm text-gray-600">
        Don’t have an account?{" "}
        <Link to="/register" className="text-blue-500 hover:underline">
          Register
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
