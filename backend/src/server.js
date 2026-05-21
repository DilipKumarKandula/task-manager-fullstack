require("dotenv").config();

const express = require("express");
const cookieParser = require(
  "cookie-parser"
);
const cors = require("cors");

const session = require(
  "express-session"
);

const passport = require(
  "./config/passport"
);

const taskRoutes = require("./routes/taskRoutes");
const authRoutes = require("./routes/authRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret:
      process.env.JWT_SECRET,

    resave: false,

    saveUninitialized: false,
  })
);

app.use(passport.initialize());

app.use(passport.session());

app.use("/tasks", taskRoutes);

app.use("/auth", authRoutes);
app.use("/dashboard", dashboardRoutes);

app.listen(5000, () => {
  console.log(
    "Server running on port 5000"
  );
});