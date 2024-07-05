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

// Get Data
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

// Get Specific Student Route
app.get('/read/:id', (req, res) => {
  const sql = 'SELECT * FROM products WHERE id=?';
  const id = req.params.id;

  connection.query(sql, [id], (err, results, fields) => {
    try {
      return res.json(results);
    } catch (error) {
      return res.json({ message: 'Error inside server!' });
    }
  });
});

// Insert Data
app.post('/newProduct', (req, res) => {
  const sql =
    'INSERT INTO `products`(`productName`,`productQty`,`productPrice`) VALUES (?)';
  const values = [
    req.body.productName,
    req.body.productQty,
    req.body.productPrice,
  ];
  connection.query(sql, [values], (err, results, fields) => {
    try {
      return res.json(results);
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    } catch (err) {
      return res.json({ message: 'Error inside server!' });
    }
  });
});

// Update Data
app.put('/updateProduct/:id', (req, res) => {
  const sql =
    'UPDATE `products` SET `productName` = ? ,`productQty` = ? ,`productPrice` = ? WHERE id=?';

  const id = req.params.id;
  const values = [
    req.body.productName,
    req.body.productQty,
    req.body.productPrice,
    id,
  ];

  connection.query(sql, values, (err, results, fields) => {
    try {
      return res.json(results);
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    } catch (err) {
      return res.json({ message: 'Error inside server!' });
    }
  });
});

// Delete Student Route
app.delete('/delete/:id', (req, res) => {
  const sql = 'DELETE FROM products WHERE id=?';
  const id = req.params.id;

  connection.query(sql, [id], (err, result) => {
    try {
      return res.json(result);
    } catch (error) {
      return res.json({ message: 'Error inside server!' });
    }
  });
});

// Listen Server
app.listen(PORT, () => {
  console.log(`Express Server is Running On http://localhost:${PORT}`);
});
