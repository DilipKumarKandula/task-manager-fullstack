// const mysql = require("mysql2");

// let connection;

// const connectDatabase = () => {
//   connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//   });

//   connection.connect((err) => {
//     if (err) {
//       console.log("Database connection failed. Retrying in 5 seconds...");

//       setTimeout(connectDatabase, 5000);

//       return;
//     }

//     console.log("MySQL Connected");
//   });
// };

// connectDatabase();

// module.exports = () => connection;



const { Pool } = require("pg");

const pool = new Pool({
  connectionString:
    process.env.DATABASE_URL,

  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;