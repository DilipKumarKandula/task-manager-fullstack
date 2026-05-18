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
    const {
      title,
      description,
    } = req.body;

    const userId =
      req.user.userId;

    const result =
      await db.query(
        `
        INSERT INTO tasks
        (
          title,
          description,
          user_id
        )
        VALUES ($1, $2, $3)
        RETURNING id
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

      taskId:
        result.rows[0].id,
    });
  } catch (error) {
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

    const result =
      await db.query(
        `
        SELECT * FROM tasks
        WHERE user_id = $1
        ORDER BY id DESC
        `,
        [userId]
      );

    res.status(200).json({
      tasks: result.rows,
    });
  } catch (error) {
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
    const { id } =
      req.params;

    const {
      title,
      description,
      status,
    } = req.body;

    const userId =
      req.user.userId;

    const result =
      await db.query(
        `
        UPDATE tasks
        SET
          title = $1,
          description = $2,
          status = $3
        WHERE id = $4
        AND user_id = $5
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
      result.rowCount === 0
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
    const { id } =
      req.params;

    const userId =
      req.user.userId;

    const result =
      await db.query(
        `
        DELETE FROM tasks
        WHERE id = $1
        AND user_id = $2
        `,
        [id, userId]
      );

    if (
      result.rowCount === 0
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