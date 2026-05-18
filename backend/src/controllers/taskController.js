// const db = require("../config/db");

// const createTask = async (
//   req,
//   res
// ) => {
//   try {
//     const {
//       title,
//       description,
//     } = req.body;

//     const userId =
//       req.user.userId;

//     const [result] = await db.query(
//       `
//       INSERT INTO tasks
//       (title, description, user_id)
//       VALUES (?, ?, ?)
//       `,
//       [
//         title,
//         description,
//         userId,
//       ]
//     );

//     res.status(201).json({
//       message:
//         "Task created successfully",

//       taskId: result.insertId,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message:
//         "Error creating task",

//       error: error.message,
//     });
//   }
// };



// const getTasks = async (
//   req,
//   res
// ) => {
//   try {
//     const userId =
//       req.user.userId;

//     const [tasks] = await db.query(
//       `
//       SELECT * FROM tasks
//       WHERE user_id = ?
//       `,
//       [userId]
//     );

//     res.status(200).json({
//       tasks,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message:
//         "Failed to fetch tasks",

//       error: error.message,
//     });
//   }
// };



// const updateTask = async (
//   req,
//   res
// ) => {
//   try {
//     const { id } = req.params;

//     const {
//       title,
//       description,
//       status,
//     } = req.body;

//     const userId =
//       req.user.userId;

//     const [result] = await db.query(
//       `
//       UPDATE tasks
//       SET
//         title = ?,
//         description = ?,
//         status = ?
//       WHERE id = ?
//       AND user_id = ?
//       `,
//       [
//         title,
//         description,
//         status,
//         id,
//         userId,
//       ]
//     );

//     if (
//       result.affectedRows === 0
//     ) {
//       return res.status(404).json({
//         message:
//           "Task not found or unauthorized",
//       });
//     }

//     res.json({
//       message:
//         "Task updated successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       message:
//         "Failed to update task",

//       error: error.message,
//     });
//   }
// };





// const deleteTask = async (
//   req,
//   res
// ) => {
//   try {
//     const { id } = req.params;

//     const userId =
//       req.user.userId;

//     const [result] = await db.query(
//       `
//       DELETE FROM tasks
//       WHERE id = ?
//       AND user_id = ?
//       `,
//       [id, userId]
//     );

//     if (
//       result.affectedRows === 0
//     ) {
//       return res.status(404).json({
//         message:
//           "Task not found or unauthorized",
//       });
//     }

//     res.json({
//       message:
//         "Task deleted successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       message:
//         "Failed to delete task",

//       error: error.message,
//     });
//   }
// };


// module.exports = {
//   createTask, getTasks, updateTask, deleteTask
// };




const db = require("../config/db");

const createTask = async (
  req,
  res
) => {
  try {
    console.log(
      "Authenticated User:",
      req.user
    );

    const {
      title,
      description,
    } = req.body;

    const userId =
      req.user.userId;

    if (!userId) {
      return res.status(401).json({
        message:
          "Unauthorized user",
      });
    }

    const [result] = await db.query(
      `
      INSERT INTO tasks
      (title, description, user_id)
      VALUES (?, ?, ?)
      `,
      [
        title,
        description,
        userId,
      ]
    );

    res.status(201).json({
      message:
        "Task created successfully",

      taskId: result.insertId,
    });
  } catch (error) {
    console.log(
      "Create Task Error:",
      error
    );

    res.status(500).json({
      message:
        "Error creating task",

      error: error.message,
    });
  }
};

const getTasks = async (
  req,
  res
) => {
  try {
    const userId =
      req.user.userId;

    const [tasks] = await db.query(
      `
      SELECT * FROM tasks
      WHERE user_id = ?
      `,
      [userId]
    );

    res.status(200).json({
      tasks,
    });
  } catch (error) {
    console.log(
      "Get Tasks Error:",
      error
    );

    res.status(500).json({
      message:
        "Failed to fetch tasks",

      error: error.message,
    });
  }
};

const updateTask = async (
  req,
  res
) => {
  try {
    const { id } = req.params;

    const {
      title,
      description,
      status,
    } = req.body;

    const userId =
      req.user.userId;

    const [result] = await db.query(
      `
      UPDATE tasks
      SET
        title = ?,
        description = ?,
        status = ?
      WHERE id = ?
      AND user_id = ?
      `,
      [
        title,
        description,
        status,
        id,
        userId,
      ]
    );

    if (
      result.affectedRows === 0
    ) {
      return res.status(404).json({
        message:
          "Task not found or unauthorized",
      });
    }

    res.json({
      message:
        "Task updated successfully",
    });
  } catch (error) {
    console.log(
      "Update Task Error:",
      error
    );

    res.status(500).json({
      message:
        "Failed to update task",

      error: error.message,
    });
  }
};

const deleteTask = async (
  req,
  res
) => {
  try {
    const { id } = req.params;

    const userId =
      req.user.userId;

    const [result] = await db.query(
      `
      DELETE FROM tasks
      WHERE id = ?
      AND user_id = ?
      `,
      [id, userId]
    );

    if (
      result.affectedRows === 0
    ) {
      return res.status(404).json({
        message:
          "Task not found or unauthorized",
      });
    }

    res.json({
      message:
        "Task deleted successfully",
    });
  } catch (error) {
    console.log(
      "Delete Task Error:",
      error
    );

    res.status(500).json({
      message:
        "Failed to delete task",

      error: error.message,
    });
  }
};

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
};