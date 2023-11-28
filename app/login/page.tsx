'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { useSession } from "@/context/session-context";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
//   const session = useSession();

//   if(!session) return <p>no session {JSON.stringify(session)}</p>;

//   useEffect(() => {
//     if (session.isAuthenticated) {
//       router.push("/admin");
//     }
//   }, [session.isAuthenticated]);

  const handleChange = (e:React.ChangeEvent<HTMLInputElement> ) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // try {
    //   const resp = await session.login(
    //     credentials.email,
    //     credentials.password,
    //   );
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <section className="w-full flex justify-center items-center p-4 md:p-12 lg:p-16">
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
            type="email"
            placeholder="Email"
            name="email"
            value={credentials.email}
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
        {/* <p className="text-gray-500 text-sm text-center">
          Not a member?{" "}
          <Link to="/account/register" className="underline">
            Join us
          </Link>
        </p> */}
      </div>
    </section>
  );
}