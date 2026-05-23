"use client";

export default function LoginPage() {

  const handleGoogleLogin =
    () => {
      window.location.href =
        `${process.env.NEXT_PUBLIC_API_URL}/auth/google`;
    };

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-blue-500/20 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-6 sm:py-10">

        {/* Navbar */}
        <nav className="mb-12 sm:mb-16">

          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            TaskFlow
          </h1>

        </nav>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center min-h-[70vh]">

          {/* Left Content */}
          <div className="max-w-2xl">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-gray-300 mb-8">

              <div className="w-2 h-2 rounded-full bg-green-400" />

              Productivity Workspace

            </div>

            {/* Hero Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">

              Organize Your Work

              <br />

              <span className="text-blue-400">
                Smarter & Faster
              </span>

            </h1>

            {/* Description */}
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mb-8">

              Manage tasks, monitor productivity,
              and simplify your workflow with a
              modern task management platform.

            </p>

            {/* CTA */}
            <button
              onClick={handleGoogleLogin}
              className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 transition-all duration-300 hover:scale-[1.02] px-7 py-3.5 rounded-2xl text-base sm:text-lg font-semibold shadow-2xl shadow-blue-500/20"
            >
              Continue with Google
            </button>

          </div>

          {/* Right Dashboard Preview */}
          <div className="relative">

            <div className="bg-white/[0.06] border border-white/10 backdrop-blur-2xl rounded-[28px] p-5 sm:p-7 shadow-2xl">

              {/* Top */}
              <div className="flex items-center justify-between mb-8">

                <div>

                  <h2 className="text-xl sm:text-2xl font-semibold">
                    Dashboard
                  </h2>

                  <p className="text-gray-400 text-sm mt-1">
                    Productivity Overview
                  </p>

                </div>

                <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2 rounded-full text-xs sm:text-sm">
                  Active
                </div>

              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">

                <div className="bg-black/30 border border-white/5 rounded-2xl p-4 sm:p-5">

                  <p className="text-gray-400 text-sm mb-2">
                    Total Tasks
                  </p>

                  <h3 className="text-3xl sm:text-4xl font-bold">
                    24
                  </h3>

                </div>

                <div className="bg-black/30 border border-white/5 rounded-2xl p-4 sm:p-5">

                  <p className="text-gray-400 text-sm mb-2">
                    Completed
                  </p>

                  <h3 className="text-3xl sm:text-4xl font-bold">
                    18
                  </h3>

                </div>

              </div>

              {/* Tasks */}
              <div className="space-y-4">

                {/* Task 1 */}
                <div className="bg-black/20 border border-white/5 rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-4">

                  <div>

                    <p className="font-medium text-base sm:text-lg">
                      Design Dashboard
                    </p>

                    <p className="text-gray-400 text-sm mt-1">
                      UI/UX Task
                    </p>

                  </div>

                  <span className="bg-yellow-500/10 text-yellow-400 border border-yellow-500/10 px-3 py-1 rounded-full text-xs sm:text-sm whitespace-nowrap">
                    Pending
                  </span>

                </div>

                {/* Task 2 */}
                <div className="bg-black/20 border border-white/5 rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-4">

                  <div>

                    <p className="font-medium text-base sm:text-lg">
                      Build API
                    </p>

                    <p className="text-gray-400 text-sm mt-1">
                      Backend Task
                    </p>

                  </div>

                  <span className="bg-green-500/10 text-green-400 border border-green-500/10 px-3 py-1 rounded-full text-xs sm:text-sm whitespace-nowrap">
                    Completed
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}