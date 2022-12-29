import React from "react";
import map from "/Users/priyankaraju/repos/my-travel-journal/src/location.png";

export default function Card(props) {
    console.log(map)
    return (
        <div className="card">
            {/*<img src="../images/Rectangle 77.png" className="card--image" />*/}
            <img src={`/Users/priyankaraju/repos/my-travel-journal/public/images/${props.imageUrl}`} alt="pic" className="card--image" />
            
            <div className="card--side">
                <div className="card--stats">
                    <img src={map} alt="pic"/>
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