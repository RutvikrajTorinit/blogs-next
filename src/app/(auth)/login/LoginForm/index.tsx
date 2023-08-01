"use client";
import React, { useState } from "react";
import Cookies from "js-cookie";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

interface LOGIN_DATA {
  email: string;
  password: string;
}

const initialState: LOGIN_DATA = {
  email: "",
  password: ""
};

const LoginForm: React.FC = () => {
  const router = useRouter();

  const [loginData, setLoginData] = useState<LOGIN_DATA>(initialState);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    Cookies.set("user", "email", { path: "/" });
    router.push("/home");
    setIsLoading(false);
  };

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" onSubmit={handleLogin}>
        <div>
          <Label className="block text-sm font-medium leading-6 text-gray-900">
            Email address
          </Label>
          <div className="mt-2">
            <Input
              id="email"
              name="email"
              onChange={handleChange}
              type="email"
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 p-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <Label className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </Label>
          </div>
          <div className="mt-2">
            <Input
              id="password"
              name="password"
              onChange={handleChange}
              type="password"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <Button
          className="w-full"
          type="submit"
          isLoading={isLoading}
          disabled={isLoading}
        >
          Sign in
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
