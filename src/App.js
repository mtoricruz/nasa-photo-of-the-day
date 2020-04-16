import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import NavigationSection from "./components/NavigationSection/navigation";
import ImgSection from "./components/ImgSection/img";
import TextsSection from "./components/TextsSection/TextsSection"

const url = 'https://api.nasa.gov/planetary/apod?api_key='
const api_key = '69vJxy2i2JM4jJSeMGboklPEKtx3ZCwaaLO4PSei'

function App() {
  const [nasaData, setNasaData] = useState(null)

  useEffect(() => {
    axios.get(`${url}${api_key}`)
      .then(res => {
        console.log(res.data)
        setNasaData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  if (!nasaData) {
    return null
  }

  return (
    
    <div className="App">
      {/*Navigation Section */}
      <NavigationSection />
      {/*Image Section */}
       {/* <div className="NASAcardImg">
        {nasaData && <img src={nasaData.url} alt='Pic of the Day'/>}
        </div>  */}
      <ImgSection imgURL={nasaData} />  
      {/*Text Section */}
      <TextsSection />
    </div>
  );
}

export default App;
