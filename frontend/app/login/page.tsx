"use client";

export default function LoginPage() {
  const handleGoogleLogin = () => {
    window.location.href =
      "http://localhost:5000/auth/google";
  };

  return (
    <main className="h-screen flex items-center justify-center">
      <div className="border p-10 rounded-xl">
        <h1 className="text-2xl font-bold mb-6">
          Login
        </h1>

        <button
          onClick={handleGoogleLogin}
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Continue with Google
        </button>
      </div>
    </main>
  );
}