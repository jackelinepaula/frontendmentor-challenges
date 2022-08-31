import React from "react";
import './card.css'

import Title from "../../shared/title";
import Img from "../../shared/img/img";
import Button from "../../shared/button/button";
import Description from "../../shared/description/description";

const Card = (props) =>{
    return(
        <div className="card">
            <Img img_src={props.img_src}/>
            <Title title={props.title}/>
            <Description description={props.description}/>
            <Button/>
        </div>
    )
}

export default Card;