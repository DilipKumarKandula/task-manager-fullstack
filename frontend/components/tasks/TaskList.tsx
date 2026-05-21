// "use client";

// import { useEffect, useState } from "react";

// import TaskCard from "./TaskCard";

// type Task = {
//   id: number;
//   title: string;
//   description: string;
//   status: string;
// };

// export default function TaskList() {
//   const [tasks, setTasks] =
//     useState<Task[]>([]);

//   const [loading, setLoading] =
//     useState(true);

//   const [error, setError] =
//     useState("");

//   const fetchTasks =
//     async () => {
//       try {
//         setError("");

//         const response =
//           await fetch(
//             `${process.env.NEXT_PUBLIC_API_URL}/tasks`,
//             {
//               credentials:
//                 "include",
//             }
//           );

//         if (!response.ok) {
//           throw new Error(
//             "Failed to fetch tasks"
//           );
//         }

//         const data =
//           await response.json();

//         setTasks(data);

//       } catch (error) {
//         setError(
//           "Failed to load tasks"
//         );

//       } finally {
//         setLoading(false);
//       }
//     };

// useEffect(() => {
//   const loadTasks = async () => {
//     await fetchTasks();
//   };

//   loadTasks();
// }, []);
//   const handleDelete = (
//     id: number
//   ) => {
//     setTasks((prev) =>
//       prev.filter(
//         (task) =>
//           task.id !== id
//       )
//     );
//   };

//   const handleStatusChange =
//     (
//       id: number,
//       status: string
//     ) => {
//       setTasks((prev) =>
//         prev.map((task) =>
//           task.id === id
//             ? {
//                 ...task,
//                 status,
//               }
//             : task
//         )
//       );
//     };

//   if (loading) {
//     return (
//       <p>Loading tasks...</p>
//     );
//   }

//   if (error) {
//     return (
//       <p className="text-red-500">
//         {error}
//       </p>
//     );
//   }

//   if (tasks.length === 0) {
//     return (
//       <p>No tasks found.</p>
//     );
//   }

//   return (
//     <div className="grid gap-4">

//       {tasks.map((task) => (
//         <TaskCard
//           key={task.id}
//           task={task}
//           onDelete={handleDelete}
//           onStatusChange={
//             handleStatusChange
//           }
//         />
//       ))}

//     </div>
//   );
// }




import TaskCard from "./TaskCard";

type Task = {
  id: number;
  title: string;
  description: string;
  status: string;
};

type Props = {
  tasks: Task[];

  onDelete: (
    id: number
  ) => void;

  onStatusChange: (
    id: number,
    status: string
  ) => void;
};

export default function TaskList({
  tasks,
  onDelete,
  onStatusChange,
}: Props) {
  if (tasks.length === 0) {
    return (
      <div className="bg-white p-10 rounded-xl shadow text-center">

        <h2 className="text-2xl font-semibold mb-2">
          No Tasks Yet
        </h2>

        <p className="text-gray-500">
          Create your first task
        </p>

      </div>
    );
  }

  return (
    <div className="grid gap-4">

      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onDelete={onDelete}
          onStatusChange={
            onStatusChange
          }
        />
      ))}

    </div>
  );
}