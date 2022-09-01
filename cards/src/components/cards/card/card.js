import React from "react";
import './card.css'

import Title from "../../shared/title";
import Img from "../../shared/img/img";
import Button from "../../shared/button/button";
import Description from "../../shared/description/description";

const Card = (props) => {
    return (
        <div style={{ backgroundColor: `${props.color}` }} className="card">
            <div className="frag">
                <Img img_src={props.img_src} alt={props.alt}/>
                <Title title={props.title} />
                <Description description={props.description} />
                <div className="div-btn">
                    <Button />
                </div>
            </div>
        </div>
    )
}

export default Card;