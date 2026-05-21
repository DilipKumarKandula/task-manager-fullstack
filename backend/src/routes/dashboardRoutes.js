const express = require("express");

const router = express.Router();

const pool = require("../config/db");

router.get("/stats", async (req, res) => {
  try {

    const totalTasksQuery =
      await pool.query(
        "SELECT COUNT(*) FROM tasks"
      );

    const completedTasksQuery =
      await pool.query(
        "SELECT COUNT(*) FROM tasks WHERE status = 'completed'"
      );

    const pendingTasksQuery =
      await pool.query(
        "SELECT COUNT(*) FROM tasks WHERE status = 'pending'"
      );

    res.json({
      totalTasks:
        totalTasksQuery.rows[0]
          .count,

      completedTasks:
        completedTasksQuery
          .rows[0].count,

      pendingTasks:
        pendingTasksQuery
          .rows[0].count,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message:
        "Failed to fetch dashboard stats",
    });
  }
});

module.exports = router;