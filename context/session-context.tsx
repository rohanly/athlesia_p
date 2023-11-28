import React, { ReactNode, useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";

type User = {
  _id: string;
  email: string;
  password: string;
  role: string;
  createdAt: string;
  __v: number;
};

type ContextType = {
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  error: string;
  isAuthenticated: boolean;
  loading: boolean;
  sessionUser: User | null;
  setSessionUser: React.Dispatch<React.SetStateAction<User | null>>;
  getUserData: () => Promise<void>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
  register: (user: User) => Promise<void>;
};

const SessionContext = React.createContext<ContextType | null>(null);

const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [sessionUser, setSessionUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // useEffect(() => {
  //   const sessionUser = localStorage.getItem("sessionUser");
  //   if (sessionUser) {
  //     try {
  //       const user = JSON.parse(sessionUser);
  //       setSessionUser(user);
  //       setIsAuthenticated(true);
  //     } catch (error) {
  //       // The session data is invalid, so clear it
  //       localStorage.removeItem("sessionUser");
  //       setSessionUser(null);
  //       setIsAuthenticated(false);
  //     }
  //   }
  // }, []);

  const getUserData = async () => {
    setLoading(true);
    setIsAuthenticated(false);

    try {
      const { data } = await axios.get(`/api/session/getUserData`);

      setSessionUser(data.user);
      setIsAuthenticated(true);

      setLoading(false);

      // Save the user data to localStorage
      localStorage.setItem("sessionUser", JSON.stringify(sessionUser));
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  };

  const register = async (user: User) => {
    setLoading(true);
    setIsAuthenticated(false);

    try {
      const { data } = await axios.post(`/api/session/register`, user);

      setSessionUser(data.user);
      setIsAuthenticated(true);

      setLoading(false);

      // Save the user data to localStorage
      localStorage.setItem("sessionUser", JSON.stringify(sessionUser));
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    setIsAuthenticated(false);

    try {
      const { data } = await axios.post(`/api/session/login`, {
        email,
        password,
      });
      setSessionUser(data.user);
      setIsAuthenticated(true);

      setLoading(false);

      // Save the user data to localStorage
      localStorage.setItem("sessionUser", JSON.stringify(sessionUser));
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    setSessionUser(null);
    setIsAuthenticated(false);
    setLoading(false);

    // Remove the user data from localStorage
    localStorage.removeItem("sessionUser");
  };

  return (
    <SessionContext.Provider
      value={{
        sessionUser,
        setSessionUser,
        isAuthenticated,
        setIsAuthenticated,
        loading,
        setLoading,
        error,
        setError,
        getUserData,
        register,
        login,
        logout,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

const useSession = () => {
  const context = useContext(SessionContext);
  return context;
};

export { SessionProvider, useSession };
