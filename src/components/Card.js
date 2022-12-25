import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            {/*<img src="../images/Rectangle 77.png" className="card--image" />*/}
            <img src={`../images/${props.imageUrl}`} alt="pic" className="card--image" />
            <div className="card--side">
                <div className="card--stats">
                    <img src="../images/Fill 219.png" alt="pic"/>
                    <span>{props.title}</span>
                    <a href={props.googleMapsUrl}>  View on Google Maps</a>
                </div>
                <h2>{props.location}</h2>
                <p>{props.startDate} - {props.endDate}</p>
                <p>{props.description}</p>
            </div>
        </div>
        )
    }