"use client";

import { useState } from "react";

type Props = {
  task: {
    id: number;
    title: string;
    description: string;
    status: string;
  };

  onDelete: (
    id: number
  ) => void;

  onStatusChange: (
    id: number,
    status: string
  ) => void;
};

export default function TaskCard({
  task,
  onDelete,
  onStatusChange,
}: Props) {
  const [error, setError] =
    useState("");

  const [
    loading,
    setLoading,
  ] = useState(false);

  const handleDelete =
    async () => {
      try {
        setError("");

        setLoading(true);

        const response =
          await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/tasks/${task.id}`,
            {
              method: "DELETE",

              credentials:
                "include",
            }
          );

        if (!response.ok) {
          throw new Error(
            "Failed to delete task"
          );
        }

        onDelete(task.id);

      } catch (error) {
        setError(
          "Failed to delete task"
        );

      } finally {
        setLoading(false);
      }
    };

  const handleStatusUpdate =
    async () => {
      try {
        setError("");

        setLoading(true);

        const newStatus =
          task.status ===
          "completed"
            ? "pending"
            : "completed";

        const response =
          await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/tasks/${task.id}`,
            {
              method: "PUT",

              credentials:
                "include",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({
                title: task.title,

                description:
                  task.description,

                status:
                  newStatus,
              }),
            }
          );

        if (!response.ok) {
          throw new Error(
            "Failed to update task"
          );
        }

        onStatusChange(
          task.id,
          newStatus
        );

      } catch (error) {
        setError(
          "Failed to update task"
        );

      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="bg-white rounded-xl shadow border p-5">

      <div className="flex justify-between items-start mb-4">

        <div>
          <h2 className="text-xl font-semibold">
            {task.title}
          </h2>

          <p className="text-gray-600 mt-1">
            {task.description}
          </p>
        </div>

        <span
          className={`px-3 py-1 rounded-full text-sm text-white ${
            task.status ===
            "completed"
              ? "bg-green-500"
              : "bg-yellow-500"
          }`}
        >
          {task.status}
        </span>

      </div>

      {error && (
        <p className="text-red-500 text-sm mb-4">
          {error}
        </p>
      )}

      <div className="flex gap-3">

        <button
          onClick={
            handleStatusUpdate
          }
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {loading
            ? "Updating..."
            : task.status ===
              "completed"
            ? "Mark Pending"
            : "Mark Complete"}
        </button>

        <button
          onClick={handleDelete}
          disabled={loading}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 disabled:opacity-50"
        >
          {loading
            ? "Please wait..."
            : "Delete"}
        </button>

      </div>

    </div>
  );
}