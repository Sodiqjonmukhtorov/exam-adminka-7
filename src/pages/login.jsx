import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "../service/mutation/useLogin";
import * as z from "zod";
import { saveState } from "../config/storage";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  email: z.string().email("Invalid email address").min(3, "Please enter a valid value"),
  password: z
    .string()
    .min(3, "Minimum of 3 characters required")
    .max(4, "Maximum of 4 characters allowed"),
});

export const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: zodResolver(schema) });
  const { mutate } = useLogin();
  const navigate = useNavigate();

  const submit = (data) => {
    console.log(data);

    mutate(data, {
      onSuccess: (res) => {
        saveState("user", { ...res.user, token: res.accessToken });
        navigate("/");
      },
    });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-fadeIn">
      <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg transform transition-all duration-500 ease-out hover:shadow-2xl">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">Login</h2>
        <form onSubmit={handleSubmit(submit)}>
          <div className="mb-4">
            <input
              placeholder="Email"
              className="w-full p-4 border-2 border-gray-300 focus:border-purple-500 focus:outline-none rounded-md transition duration-300 ease-in-out bg-gray-50 text-gray-800 placeholder-gray-500"
              type="email"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 mt-1 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-6">
            <input
              placeholder="Password"
              className="w-full p-4 border-2 border-gray-300 focus:border-purple-500 focus:outline-none rounded-md transition duration-300 ease-in-out bg-gray-50 text-gray-800 placeholder-gray-500"
              type="password"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500 mt-1 text-sm">{errors.password.message}</p>
            )}
          </div>
          <button className="w-full py-3 text-center text-white bg-purple-600 rounded-md hover:bg-purple-700 transition-transform transform duration-300 hover:scale-105">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
