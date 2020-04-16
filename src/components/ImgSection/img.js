import React, { useState, useEffect } from 'react';
import axios from 'axios';

const url = 'https://api.nasa.gov/planetary/apod?api_key='
const api_key = '69vJxy2i2JM4jJSeMGboklPEKtx3ZCwaaLO4PSei'

const ImgSection = ({ imgURL }) => {
    const [imglink, setImgLink] = useState(null)

    useEffect(() => {
        axios.get(`${url}${api_key}`)
          .then(res => {
            console.log(res.url)
            setImgLink(res.url)
          })
          .catch(err => {
            console.log(err)
          })
      }, [])

    return (
        <div className="NASAcardImg">
            {imglink && <img src={imgURL.url} alt='Pic of the Day'/>}
        </div>
    );
}

export default ImgSection
