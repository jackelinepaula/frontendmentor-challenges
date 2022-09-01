import React from "react";
import './description.css';

const Description = (props) =>{
    return(
        <p className="desc">{props.description}</p>
    )
}

export default Description;