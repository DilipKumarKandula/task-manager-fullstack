import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white p-6">

      <h1 className="text-2xl font-bold mb-10">
        Task Manager
      </h1>

      <nav className="flex flex-col gap-5">

        <Link
          href="/dashboard"
          className="hover:text-blue-400 transition"
        >
          Dashboard
        </Link>

        <Link
          href="/tasks"
          className="hover:text-blue-400 transition"
        >
          Tasks
        </Link>

      </nav>

    </aside>
  );
}