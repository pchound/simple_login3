const express = require("express");
const app = express();
const mysql = require('mysql')
const cors = require("cors");
const bodyParser = require('body-parser')


const db = mysql.createPool({
  host: '127.0.0.1', // Use localhost or 127.0.0.1 as the hostname
  port: '3307',      // Specify the port number
  user: 'root',
  password: 'password',
  database: 'crud_database',
});

/*app.use(cors());
app.use(express.json());*/

//From the video

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));
  app.post("/api/insert", (req, res) => {
  const movieName = req.body.movieName;
  const movieReview = req.body.movieReview;

  const sqlInsert =
  "INSERT INTO movie_reviews (movieName, movieReview) VALUES (?,?)";//,
  //[movieName, movieReview],
  db.query(sqlInsert, [movieName, movieReview], (err, result) =>{
    console.log(err);
    res.send({
      "success": true
    })
  });
});

/*db.query(
  "INSERT INTO movie_reviews (movieName, movieReview) VALUES (?,?)",
  [movieName, movieReview],
  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Values Inserted");
    }
  }
);
});*/



//-----------------------------------------------------------------------------------

//Insert into movies
/*app.post("/create", (req, res) => {
  console.log("test", req.body)
  const movieName = req.body.movieName;
  const movieReview = req.body.movieReview;

  db.query(
    "INSERT INTO movie_reviews (movieName, movieReview) VALUES (?,?)",
    [movieName, movieReview],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

//Retrieve Movie results
app.get("/movieReviews", (req, res) => {
  db.query("SELECT * FROM movie_reviews", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//Update movies
app.put("/update", (req, res) => {
  const id = req.body.id;
  const movieName = req.body.movieName;
  const movieReview = req.body.movieReview;
  console.log("test", id, movieName, movieReview);
  db.query(
    "UPDATE movie_reviews SET movieName = ?, movieReview = ? WHERE id = ?",
    [movieName,movieReview, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//Delete
app.delete("/delete", (req, res) => {
  const id = req.body.id;
  db.query(
    "DELETE FROM movie_reviews WHERE id = ?",
    [id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
*/
//app.get("/", (req, res) => {});

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
