"use client";

import {
  useEffect,
} from "react";

import { useRouter } from "next/navigation";

import Sidebar from "./Sidebar";

import Navbar from "./Navbar";

import { useAuth } from "@/context/AuthContext";

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({
  children,
}: Props) {

  const {
    user,
    loading,
  } = useAuth();

  const router = useRouter();

  useEffect(() => {

    if (!loading && !user) {
      router.replace("/login");
    }

  }, [
    loading,
    user,
    router,
  ]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">

        <p className="text-xl font-semibold">
          Loading...
        </p>

      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="p-6 overflow-y-auto">
          {children}
        </main>

      </div>

    </div>
  );
}