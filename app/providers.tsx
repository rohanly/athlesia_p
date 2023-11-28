"use client";

import { PropsWithChildren } from "react";
import { ReduxProvider } from "./store/redux-provider";
import { SessionProvider } from "@/context/session-context";

export default function Providers({ children }: PropsWithChildren<any>) {
  return (
    <>
      <SessionProvider>
        <ReduxProvider>{children}</ReduxProvider>
      </SessionProvider>
    </>
  );
}
