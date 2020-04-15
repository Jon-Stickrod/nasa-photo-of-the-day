import React, {useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

export const dataList = () => {

};





function App() {
  const [data, setData] = useState({})
useEffect(() =>{
axios
  .get('https://api.nasa.gov/planetary/apod?api_key=0aX8vfY6iYMaUVvPBepSbgJlHW8tV6cQ8KW8jeQT')
  .then(res =>{
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
},[])


  
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;

