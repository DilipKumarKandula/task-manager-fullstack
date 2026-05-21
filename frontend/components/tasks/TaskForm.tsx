"use client";

import { useState } from "react";

type Task = {
  id: number;
  title: string;
  description: string;
  status: string;
};

type Props = {
  onTaskCreated: (
    task: Task
  ) => void;
};

export default function TaskForm({
  onTaskCreated,
}: Props) {
  const [title, setTitle] =
    useState("");

  const [
    description,
    setDescription,
  ] = useState("");

  const [error, setError] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setError("");

    if (!title.trim()) {
      setError(
        "Task title is required"
      );

      return;
    }

    try {
      setLoading(true);

      const response =
        await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/tasks`,
          {
            method: "POST",

            credentials:
              "include",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              title,
              description,
            }),
          }
        );

      if (!response.ok) {
        throw new Error(
          "Failed to create task"
        );
      }

      const data =
        await response.json();

      onTaskCreated({
        id: data.taskId,

        title,

        description,

        status: "pending",
      });

      setTitle("");

      setDescription("");
    } catch (error) {
      setError(
        "Failed to create task"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 mb-8"
    >
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        className="border p-2 w-full rounded"
      />

      <textarea
        placeholder="Task description"
        value={description}
        onChange={(e) =>
          setDescription(
            e.target.value
          )
        }
        className="border p-2 w-full rounded"
      />

      {error && (
        <p className="text-red-500 text-sm">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="bg-white text-black px-4 py-2 rounded border w-full sm:w-auto disabled:opacity-50"
      >
        {loading
          ? "Creating..."
          : "Create Task"}
      </button>
    </form>
  );
}