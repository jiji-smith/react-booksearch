import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function SavedList(props) {
console.log(props)
    return (

<div className="col s12">
            <div className="card horizontal">
            <div className="card-image">
                <img src={props.image} alt={props.title} />
            </div>
            <div className="card-stacked">
                <div className="card-content">
                <h3 className="card-title">{props.title} by {props.authors}</h3>
                <p>{props.description}</p>
                </div>
                <div className="card-action">
                    <a className="waves-effect waves-light btn btn-saved-card" href={props.link} target="_blank">View</a>
                    <a className="waves-effect waves-light btn btn-saved-card" onClick={() => props.onClick(props.key)}>Delete</a>
                </div>
            </div>
            </div>
        </div>

    );
}


