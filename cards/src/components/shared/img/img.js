import React from "react";
import './img.css'

const Img = (props) =>{
    return(
        <img className="img" src={props.img_src} alt={props.alt}></img>
    )
}

export default Img;