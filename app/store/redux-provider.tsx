"use client";
import { Provider } from "react-redux";
import { store } from ".";

/**
 * Separate File for provider because,
 * the root of the application,
 *  which in this case is your main layout.tsx file,
 *  is a server side rendered component yet next js provider component needs to be client side rendered.
 */
export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
