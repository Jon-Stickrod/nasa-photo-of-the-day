import React, {useState, useEffect } from "react";
import "./App.css";
import NavBar from "./pageComps/nav"
import IntroGreet from "./pageComps/intro"
import CardSection from "./pageComps/cardSection"
import axios from "axios";

export const dataList = () => {

};





function App() {
  const [data, setData] = useState({})
useEffect(() =>{
axios
  .get('https://api.nasa.gov/planetary/apod?api_key=0aX8vfY6iYMaUVvPBepSbgJlHW8tV6cQ8KW8jeQT')
  .then(res =>{
    console.log(res);
    setData(res.data);
  })
  .catch(err => {
    console.log(err)
  })
},[])


  
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img">🚀</span>!
      </p>
      <NavBar />
      <IntroGreet />
      <div className="card-sec">
      
        <CardSection data={data} />
       
        
      </div>
      
    </div>
  );
}

export default App;

