"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

export default function AuthSuccessPage() {
  const router = useRouter();

  useEffect(() => {
    const params =
      new URLSearchParams(
        window.location.search
      );

    const token =
      params.get("token");

    if (token) {
      localStorage.setItem(
        "token",
        token
      );

      router.push("/");
    }
  }, [router]);

  return (
    <main className="h-screen flex items-center justify-center">
      <p>
        Logging you in...
      </p>
    </main>
  );
}