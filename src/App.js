import React, {useState, useEffect} from "react";
import "./App.css";
import Card from './components/card'
import axios from 'axios'


function App() {
  const[details, setDetails]=useState([])

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=bAcLUqRaRZ8eAxrG9b4TBiz6d1agngrqFTegqQZz`)
    .then(response => {
      setDetails(response.data)

    })
    .catch(error =>{
      console.log(error)
    })
    
  },[] )

  return (

    <div className="App">
      {console.log(details)}
   <Card>
   key={details.id}
        title={details.title}
        date={details.date}
        explanation={details.explanation}
        copyright={details.copyright}
        imgUrl={details.url}
   </Card>
      
    </div>
  );
}

export default App;