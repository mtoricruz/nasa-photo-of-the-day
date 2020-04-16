import React from 'react';
import styled from 'styled-components';

// const url = 'https://api.nasa.gov/planetary/apod?api_key='
// const api_key = '69vJxy2i2JM4jJSeMGboklPEKtx3ZCwaaLO4PSei'

const Img = styled.img`
    align-content: center;
    height: 40%;
    width: 40%;
    border-top: 5px solid blue;
    border-bottom: 5px solid blue;
    border-right: 5px solid red;
    border-left: 5px solid red;
`

const ImgSection = ({ imgURL }) => {
    // const [imglink, setImgLink] = useState(null)

    // useEffect(() => {
    //     axios.get(`${url}${api_key}`)
    //       .then(res => {
    //         console.log(res.url)
    //         setImgLink(res.url)
    //       })
    //       .catch(err => {
    //         console.log(err)
    //       })
    //   }, [])

    return (
        <div className="NASAcardImg">
            {/* {imglink && <img src={imgURL.url} alt='Pic of the Day'/>} */}
            <Img src={imgURL} alt='Pic of the Day'/>
        </div>
    );
}

export default ImgSection
