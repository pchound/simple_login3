import React, { useState, useEffect } from "react";
import './App.css';
import axios from 'axios'

function App() {
  const [movieName, setMovieName] = useState('')
  const [review, setReview] = useState('')

  const submitReview = async (e) => {
    
    e.preventDefault();
    
    const response = await axios.post("http://localhost:3001/api/insert", {
      movieName: movieName,
      movieReview: review
    })
    if (response.data.success){
      alert("Inserted Successfully");
      
    }
  };

 return (
 <div className="App">
    <h1>CRUD APPLICATION</h1>

    <div className="form">
      <label>Movie Name:</label>
      <input type="text" name="movieName" onChange={(e)=>{
        setMovieName(e.target.value)
      }}/>

      <label>Review:</label>
      <input type="text" name="review" onChange={(e)=>{
        setReview(e.target.value)
      }}/>
    </div>
    <button onClick={(e) => submitReview(e)}>Submit</button>
    
  </div>
 );
}

export default App;