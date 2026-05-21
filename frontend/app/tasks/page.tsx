"use client";

import {
  useEffect,
  useState,
} from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";

import TaskForm from "@/components/tasks/TaskForm";

import TaskList from "@/components/tasks/TaskList";

type Task = {
  id: number;
  title: string;
  description: string;
  status: string;
};

export default function TasksPage() {

  const [tasks, setTasks] =
    useState<Task[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const fetchTasks =
    async () => {
      try {

        setError("");

        const response =
          await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/tasks`,
            {
              credentials:
                "include",
            }
          );

        if (!response.ok) {
          throw new Error(
            "Failed to fetch tasks"
          );
        }

        const data =
          await response.json();

        console.log(data);

        setTasks(data.tasks);

      } catch (error) {

        console.log(error);

        setError(
          "Failed to load tasks"
        );

      } finally {

        setLoading(false);
      }
    };

  useEffect(() => {

    const loadTasks =
      async () => {
        await fetchTasks();
      };

    loadTasks();

  }, []);

  const handleDelete = (
    id: number
  ) => {

    setTasks((prev) =>
      prev.filter(
        (task) =>
          task.id !== id
      )
    );
  };

  const handleStatusChange =
    (
      id: number,
      status: string
    ) => {

      setTasks((prev) =>
        prev.map((task) =>
          task.id === id
            ? {
                ...task,
                status,
              }
            : task
        )
      );
    };

  const handleTaskCreated =
    (task: Task) => {

      setTasks((prev) => [
        task,
        ...prev,
      ]);
    };

  return (
    <DashboardLayout>

      <div className="text-black">

        <div className="mb-8">

          <h1 className="text-3xl font-bold">
            Tasks
          </h1>

          <p className="text-gray-600 mt-2">
            Manage your daily tasks
          </p>

        </div>

        <div className="mb-8">
          <TaskForm
            onTaskCreated={
              handleTaskCreated
            }
          />
        </div>

        {loading && (
          <p className="text-black">
            Loading tasks...
          </p>
        )}

        {error && (
          <p className="text-red-500">
            {error}
          </p>
        )}

        {!loading && (
          <TaskList
            tasks={tasks}
            onDelete={
              handleDelete
            }
            onStatusChange={
              handleStatusChange
            }
          />
        )}

      </div>

    </DashboardLayout>
  );
}