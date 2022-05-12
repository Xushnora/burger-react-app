import React from "react";
import BuildControl from "./BuildControl/Buildcontrol";
import './buildControls.css'

let controls = [
    {label: 'Salad', type: "salad"},
    {label: 'Bacon', type: "bacon"},
    {label: 'Meat', type: "meat"},
    {label: 'Cheese', type: "cheese"},
]

export default function BuildControls(props) {
    let {basic1, basic2, basic3, basic4, basic5, basic6, basic7, basic8} = props
    return (
        <div className="BuildControls">
            <BuildControl 
                label = {controls[0].label}
                key = {controls[0].label}
                basicPlusHandle = {basic1}
                basicMinusHandle = {basic2}
            />
            <BuildControl 
                label = {controls[1].label}
                key = {controls[1].label}
                basicPlusHandle = {basic3}
                basicMinusHandle = {basic4}
            />
            <BuildControl 
                label = {controls[2].label}
                key = {controls[2].label}
                basicPlusHandle = {basic5}
                basicMinusHandle = {basic6}
            />
            <BuildControl 
                label = {controls[3].label}
                key = {controls[3].label}
                basicPlusHandle = {basic7}
                basicMinusHandle = {basic8}
            />
        </div>
    )
}