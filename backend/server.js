const express = require('express');
const cors = require('cors');

// Get The Database Client
const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mern-rest-api',
});

const app = express();

// Use App
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Server Run Port
const PORT = 4000;

// Routings

// Get Queries
app.get('/', (req, res) => {
  const sql = 'SELECT * FROM `products`';
  connection.query(sql, (err, results, fields) => {
    try {
      return res.json(results);
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    } catch (err) {
      return res.json({ message: 'Error inside server!' });
    }
  });
});

// Listen Server
app.listen(PORT, () => {
  console.log(`Express Server is Running On http://localhost:${PORT}`);
});
