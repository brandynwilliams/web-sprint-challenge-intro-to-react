import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Character from './components/Character'
import './App.css';



const App = () => {
  const [URL] = useState("https://swapi.dev/api/people")
  const [char, setChar] = useState([])

  useEffect(()=>{
    axios.get(URL)
       .then((res) => {
         console.log('Success', res.data)
         setChar(res.data)
       })
       .catch(errors => {console.log(errors)})
   }, [])

    return (
      <div className="App">
        <div>
        <p><Character  character={char}/></p>
        </div>
      </div>
    );
  }
  
  export default App;
  
