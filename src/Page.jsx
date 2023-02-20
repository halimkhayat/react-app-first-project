import React from "react";
import "./Page.css"
import data from './img'

export default function Page(props){
    return (
        <div className="card">
            <img className="img--card" src={props.data.img}/> 
            <h4 className="card--details">{props.data.description}</h4>
        </div>
    )
}