const express = require("express");
const app = express();
const mysql = require('mysql')
const cors = require("cors");
const bodyParser = require('body-parser')

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  host: '127.0.0.1', // Use localhost or 127.0.0.1 as the hostname
  port: '3307',      // Specify the port number
  user: 'root',
  password: 'password',
  database: 'loginsystem',
});


app.post('/register', (req, res)=>{
  const username = req.body.username;
  const password = req.body.password;

db.query(
    "INSERT INTO users (username, password) VALUES (?,?)",
  [username, password],
   (err, result) => {
    if (err){
      res.send({err: err})
    }
  }
);
});

app.post('/login', (req, res) =>{
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE username = ? AND password = ?",
  [username, password],
   (err, result) => {
    if (err){
      res.send({err: err})
    } 
  
    if (result.length > 0) {
      res.send(result);
    } else{
      res.send({message: "Wrong username/password combination!"});
    }
  }
);
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
