"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import ThemeToggle from "@/components/theme.toggle";
import { login } from "@/services/auth.service";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AxiosError } from "axios";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(username, password);
      
      router.push("/");
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;
      toast.error(axiosError.response?.data?.message || "Error System");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Section (Form) */}
      <div className="flex flex-col justify-center px-16 w-1/2 bg-background">
        <div className="flex items-center gap-2 mb-12 justify-between">
          <Image src="/logo_d.png" alt="Logo" width={50} height={50} />
          <ThemeToggle />
        </div>

        <h1 className="text-6xl font-bold mb-2 text-foreground">
          WELCOME BACK
        </h1>
        <h1 className="text-3xl font-bold mb-8 text-foreground">Join now.</h1>

        <form className="space-y-6" onSubmit={(e) => handleLogin(e)}>
          <div>
            <label
              className="block text-sm mb-2 text-foreground"
              htmlFor="username"
            >
              Username
            </label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username or email"
              className="w-full p-3 bg-transparent border border-foreground/20 rounded text-foreground placeholder:text-foreground/50"
            />
          </div>

          <div>
            <label
              className="block text-sm mb-2 text-foreground"
              htmlFor="password"
            >
              Password
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-3 bg-transparent border border-foreground/20 rounded text-foreground placeholder:text-foreground/50"
            />
          </div>

          <div className="flex items-center justify-between text-sm text-foreground">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-yellow-400" />
              Remember me
            </label>
            <button type="button" className="underline">
              Forgot Password
            </button>
          </div>

          <Button
            className="w-full bg-primary text-primary-foreground py-3 rounded-md cursor-pointer"
            type="submit"
          >
            Sign In
          </Button>
          <Button className="w-full bg-primary text-primary-foreground py-3 rounded-md cursor-pointer">
            Sign In With Google
          </Button>
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            // transition={"zoom-in"}
          />
        </form>

        <p className="text-xs text-center text-muted-foreground mt-8">
          Copyright &copy;{new Date().getFullYear()} Dustin
        </p>
      </div>

      {/* Right Section (Image) */}
      <div className="w-1/2 relative my-5 mr-5">
        <Image
          src="/banner_login.png"
          alt="Login Image"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
    </div>
  );
}
