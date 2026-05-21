// "use client";

// import {
//   useEffect,
//   useState,
// } from "react";

// import { useRouter } from "next/navigation";

// import TaskForm from "../components/tasks/TaskForm";

// import TaskCard from "../components/tasks/TaskCard";

// import Navbar from "../components/layout/Navbar";
// import { useAuth } from "../context/AuthContext";
// type Task = {
//   id: number;
//   title: string;
//   description: string;
//   status: string;
// };

// export default function Home() {
//   const [tasks, setTasks] =
//     useState<Task[]>([]);

//   const [tasksLoading, setTasksLoading] =
//     useState(true);

//   const { user, loading } =
//     useAuth();

//   const router = useRouter();

//   useEffect(() => {
//     if (!loading && !user) {
//       router.replace("/login");
//     }
//   }, [loading, user, router]);

//   useEffect(() => {
//     const fetchTasks =
//       async () => {
//         try {
//           const response =
//             await fetch(
//               `${process.env.NEXT_PUBLIC_API_URL}/tasks`,
//               {
//                 credentials:
//                   "include",
//               }
//             );

//           const data =
//             await response.json();

//           setTasks(data.tasks);
//         } catch (error) {
//           console.log(error);
//         } finally {
//           setTasksLoading(false);
//         }
//       };

//     if (user) {
//       fetchTasks();
//     }
//   }, [user]);

// if (loading) {
//   return (
//     <main className="h-screen flex items-center justify-center">
//       <div className="text-center">
//         <h1 className="text-2xl font-bold mb-2">
//           Loading...
//         </h1>

//         <p className="text-gray-500">
//           Please wait
//         </p>
//       </div>
//     </main>
//   );
// }

// if (tasksLoading && user) {
//   return (
//     <main className="h-screen flex items-center justify-center">
//       <div className="text-center">
//         <h1 className="text-2xl font-bold mb-2">
//           Loading Tasks...
//         </h1>

//         <p className="text-gray-500">
//           Please wait
//         </p>
//       </div>
//     </main>
//   );
// }
//   return (
//     <main className="p-4 md:p-10 max-w-3xl mx-auto">
//       <Navbar />

//               <TaskForm
//           onTaskCreated={(task) =>
//             setTasks((prev) => [
//               task,
//               ...prev,
//             ])
//           }
//         />

//       <div className="space-y-4">
//         {tasks.length === 0 ? (
//          <div className="border rounded-xl p-10 text-center">
//             <h2 className="text-xl font-semibold mb-2">
//               No Tasks Yet
//             </h2>

//             <p className="text-gray-500">
//               Create your first task to get started.
//             </p>
//           </div>
//         ) : (
//           tasks.map((task) => (
// <TaskCard
//   key={task.id}
//   task={task}
//   onDelete={(id) =>
//     setTasks((prev) =>
//       prev.filter(
//         (task) =>
//           task.id !== id
//       )
//     )
//   }
//   onStatusChange={(
//     id,
//     status
//   ) =>
//     setTasks((prev) =>
//       prev.map((task) =>
//         task.id === id
//           ? {
//               ...task,
//               status,
//             }
//           : task
//       )
//     )
//   }
// />
//           ))
//         )}
//       </div>
//     </main>
//   );
// }







import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dashboard");
}