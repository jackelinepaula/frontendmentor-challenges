import React from "react";
import Card from "./card/card";
import './index.css';

async function getData() {
    let response = await fetch('http://localhost:3000/api/data.json')
    let data = await response.json()
    return data
}

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dado: [ ]
        }
    }

    componentDidMount() {
        getData().then(data => {
            this.setState(state => ({
                dado: data['dado']
            }))
        })
    }

    render() {
        return (
            <div className="container">
                {this.state.dado.map((car) =>
                    <Card img_src={car.img_src}
                        title={car.title}
                        description={car.description} />
                )}
            </div>
        )
    }
}

export default Cards;