import NavBar from "@/components/navBar";
import React from "react";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      {/* <NavBar /> */}
      {children}
    </div>
  );
}
