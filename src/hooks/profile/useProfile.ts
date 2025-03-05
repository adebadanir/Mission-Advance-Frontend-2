import useIsLoginStore from "@/stores/loginStore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  getUserById,
  updateUser,
  deleteUser,
} from "@/services/api/userService";

import { z } from "zod";

export const useProfile = () => {
  const { userId, setIsLogin, setUserId } = useIsLoginStore();
  const navigate = useNavigate();

  const userSchema = z.object({
    name: z.string().min(3, "Nama minimal 3 karakter"),
    email: z.string().email("Format email tidak valid"),
    phoneNumber: z.string().min(10, "Nomor HP minimal 10 digit"),
  });
  const [formData, setFormData] = useState({
    avatar: "",
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const splitCountryCode = (phoneNumber: string) => {
    const match = phoneNumber.match(/^(\+\d{0,2})(\d+)$/);
    if (match) {
      return { countryCode: match[1], number: match[2] };
    }
    return { countryCode: null, number: phoneNumber };
  };

  useEffect(() => {
    const getUser = async (userId: string) => {
      setLoading(true);
      const userData = await getUserById(userId);
      setFormData(userData);
      setLoading(false);
    };
    getUser(userId);
  }, []);

  const handleUpdate = async () => {
    try {
      await updateUser(userId, formData);
      setTimeout(() => {
        window.location.reload(); // Reload halaman setelah submit
      }, 500);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteUser(userId);
      setTimeout(() => {
        setIsLogin(false);
        setUserId("");
        navigate("/login");
      }, 500);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationResult = userSchema.safeParse(formData);
    if (!validationResult.success) {
      const formattedErrors: Record<string, string> = {};
      validationResult.error.errors.forEach((err) => {
        if (err.path) formattedErrors[err.path[0]] = err.message;
      });
      setErrors(formattedErrors);
    } else {
      setErrors({});
      handleUpdate();
    }
  };

  return {
    loading,
    formData,
    handleChange,
    splitCountryCode,
    handleSubmit,
    handleDelete,
    errors,
  };
};
