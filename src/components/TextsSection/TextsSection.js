import React from "react";
import styled from "styled-components";


const Explanation = styled.div`
  margin: 0 30%;
  text-align: left;
`

const TextsSection = ({ title, date, explanation }) => {
    return (
        <div className="text-container">
        <div className="title-and-date">
            <h2>{title}</h2> 
            <h5>{date}</h5>
        </div>
        <Explanation>
          <p>{explanation}</p>
        </Explanation>
      </div>
    )
}

export default TextsSection