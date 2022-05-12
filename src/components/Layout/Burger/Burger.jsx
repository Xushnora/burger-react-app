import React from "react";
import './burger.css'
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";

export default function Burger (props) {
    let tranformedIngredients = Object.keys(props.ingredinets).map(inKey => {
        return [...Array(props.ingredinets[inKey])].map((_, i) => {
            return  <BurgerIngredients key = {inKey + i} type = {inKey} />
        })
    }).reduce((arr, ell) => {
        return arr.concat(ell)
    }, []);

    if(tranformedIngredients.length === 0) {
        tranformedIngredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className="Burger">
            <BurgerIngredients type = "bread-top" />
            {tranformedIngredients}
            <BurgerIngredients type = "bread-bottom" />
        </div>
    )
}