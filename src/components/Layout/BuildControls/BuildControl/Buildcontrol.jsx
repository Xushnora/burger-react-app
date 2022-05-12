import React from "react";
import './buildControl.css'

export default function BuildControl(props) {
    return (
        <div className="BuildControl">
            <div className="Label">{props.label}</div>
            <button className="Less" onClick={props.basicMinusHandle}>Less</button>
            <button className="More" onClick={props.basicPlusHandle}>More</button>
        </div>
    )
}