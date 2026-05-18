"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type User = {
  id: number;

  name: string;

  email: string;
};

type AuthContextType = {
  user: User | null;

  loading: boolean;
};

const AuthContext =
  createContext<AuthContextType>({
    user: null,

    loading: true,
  });

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] =
    useState<User | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchUser =
      async () => {
        try {
const response =
  await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/me`,
    {
      credentials:
        "include",
    }
  );

          if (response.ok) {
            const data =
              await response.json();

            setUser(data.user);
          }
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}