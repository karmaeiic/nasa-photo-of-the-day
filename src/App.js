import React, {useState, useEffect} from "react";
import "./App.css";
import Card from './components/card'
import axios from 'axios'


const dummydata = {
  copyright: "Miguel Claro",
  date: "2020-08-24",
  explanation: "How come the crescent Moon doesn't look like this?  For one reason, because your eyes can't simultaneously discern bright and dark regions like this. Called earthshine or the da Vinci glow, the unlit part of a crescent Moon is visible but usually hard to see because it is much dimmer than the sunlit arc. In our digital age, however, the differences in brightness can be artificially reduced. The featured image is actually a digital composite of 15 short exposures of the bright crescent, and 14 longer exposures of the dim remainder.  The origin of the da Vinci glow, as explained by Leonardo da Vinci about 510 years ago, is sunlight reflected first by the Earth to the Moon, and then back from the Moon to the Earth.",
  hdurl: "https://apod.nasa.gov/apod/image/2008/HdrMoon_Claro_2000.jpg",
  media_type: "image",
  service_version: "v1",
  title: "Crescent Moon HDR",
  url: "https://apod.nasa.gov/apod/image/2008/HdrMoon_Claro_1080.jpg",
  }

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
   <Card key={details.id}
        title={details.title}
        date={details.date}
        explanation={details.explanation}
        copyright={details.copyright}
        url={details.url}>
   
   </Card>
      
    </div>
  );
}

export default App;