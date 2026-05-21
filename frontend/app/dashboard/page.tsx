"use client";

import {
  useEffect,
  useState,
} from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";

import StatsCard from "@/components/dashboard/StatsCard";

type Stats = {
  totalTasks: number;
  completedTasks: number;
  pendingTasks: number;
};

export default function DashboardPage() {
  const [stats, setStats] =
    useState<Stats | null>(
      null
    );

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const fetchStats =
    async () => {
      try {
        setError("");

        const response =
          await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/dashboard/stats`,
            {
              credentials:
                "include",
            }
          );

        if (!response.ok) {
          throw new Error(
            "Failed to fetch stats"
          );
        }

        const data =
          await response.json();

        setStats(data);

      } catch (error) {
        setError(
          "Failed to load dashboard"
        );

      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    const loadStats =
      async () => {
        await fetchStats();
      };

    loadStats();
  }, []);

  return (
    <DashboardLayout>

      <div>

        <div className="mb-8 text-black">

          <h1 className="text-3xl font-bold">
            Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Productivity overview
          </p>

        </div>

        {loading && (
          <p>
            Loading dashboard...
          </p>
        )}

        {error && (
          <p className="text-red-500">
            {error}
          </p>
        )}

        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <StatsCard
              title="Total Tasks"
              value={
                stats.totalTasks
              }
            />

            <StatsCard
              title="Completed Tasks"
              value={
                stats.completedTasks
              }
            />

            <StatsCard
              title="Pending Tasks"
              value={
                stats.pendingTasks
              }
            />

          </div>
        )}

      </div>

    </DashboardLayout>
  );
}