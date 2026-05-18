"use client";

import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, loading } =
    useAuth();

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
    return <p>Loading...</p>;
  }

  return (
    <nav className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-10">
      <h1 className="text-2xl font-bold">
        Task Manager
      </h1>

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
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      ) : (
        <a
          href="/login"
          className="bg-black text-white px-4 py-2 rounded"
        >
          Login
        </a>
      )}
    </nav>
  );
}