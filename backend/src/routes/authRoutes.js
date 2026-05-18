const express = require("express");

const passport = require("passport");

const jwt = require("jsonwebtoken");

const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const db = require("../config/db");

router.get(
  "/google",

  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/google/callback",

  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),

  (req, res) => {
    const token = jwt.sign(
      {
        userId: req.user.id
      },

      process.env.JWT_SECRET,

      {
        expiresIn: "1d",
      }
    );
    res.cookie("token", token, {
    httpOnly: true,

    secure: false,

    sameSite: "lax",

    maxAge: 24 * 60 * 60 * 1000,
    });

    res.redirect(
    "http://localhost:3000"
    );
    }
);


router.get(
  "/me",

  authMiddleware,

  async (req, res) => {
    try {
      const userId =
        req.user.userId;

      const [rows] =
        await db.query(
          `
          SELECT
            id,
            name,
            email
          FROM users
          WHERE id = ?
          `,
          [userId]
        );

      if (rows.length === 0) {
        return res.status(404).json({
          message:
            "User not found",
        });
      }

      res.json({
        authenticated: true,

        user: rows[0],
      });
    } catch (error) {
      res.status(500).json({
        message:
          "Failed to fetch user",

        error: error.message,
      });
    }
  }
);

router.post(
  "/logout",
  (req, res) => {
    res.clearCookie("token");

    res.json({
      message:
        "Logged out successfully",
    });
  }
);

module.exports = router;