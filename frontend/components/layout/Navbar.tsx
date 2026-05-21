"use client";

import Link from "next/link";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { user, loading } = useAuth();

  const handleLogout = async () => {
    await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/logout`,
      {
        method: "POST",
        credentials: "include",
      }
    );

    window.location.reload();
  };

  if (loading) {
    return (
      <div className="p-4 border-b">
        Loading...
      </div>
    );
  }

  return (
    <nav className="flex justify-between items-center bg-white border-b px-6 py-4 text-black">

      <div>
        <h1 className="text-2xl font-bold">
          Task Manager
        </h1>
      </div>

      {user ? (
        <div className="flex items-center gap-4">

          <div className="text-right">
            <p className="font-semibold">
              {user.name}
            </p>

            <p className="text-sm text-gray-500">
              {user.email}
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>

        </div>
      ) : (
        <Link
          href="/login"
          className="bg-black text-white px-4 py-2 rounded"
        >
          Login
        </Link>
      )}

    </nav>
  );
}