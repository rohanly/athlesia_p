"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { useSession } from "@/context/session-context";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";

export default function Login() {
  const router = useRouter();
  const { toast } = useToast();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const session = useSession();

  useEffect(() => {
    if (session?.isAuthenticated) {
      router.push("/dashboard");
    }
  }, [session?.isAuthenticated]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      console.log(session);
      const resp = await session?.login(
        credentials.username,
        credentials.password
      );
      console.log(resp);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Scheduled: Catch up",
        description: session?.error,
      });
      console.error(error);
    }
  };

  return (
    <section className="w-full min-h-screen flex justify-center items-center">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col justify-center items-center gap-4">
          <h2 className="font-semibold text-xl"> WELCOME BACK</h2>
          <p className="text-center text-sm">
            Sign in to access an enhanced shopping experience.
          </p>
        </div>
        {/* {session.error && <span>Something went wrong! please try again.</span>} */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            type="text"
            placeholder="username"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <Button disabled={false} type="submit">
            Enter
          </Button>
        </form>
        <p className="text-gray-500 text-sm text-center">
          Not a member?{" "}
          <Link href="/account/register" className="underline">
            Join us
          </Link>
        </p>
      </div>
    </section>
  );
}
