import { useState } from "react";
import { useNavigate } from "react-router";
import authService from "@/services/authService";

export function useLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const message = await authService({ email, password });
    if (message === "Login berhasil") {
      navigate("/");
    } else {
      setError(message);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    handleLogin,
  };
}
