import React from "react";
import classes from './Burger.module.css';
import BurgerIngredients from "./BurgerIngredient/burgeringredient";

const burger = ( props ) => {

    let transformedIngredients = Object.keys( props.ingredients )
        .map((igKey) => {
            return [...Array(props.ingredients[igKey])].map(( _, i ) => {
                return <BurgerIngredients key={igKey + i} type={igKey} />;
            } );
        } )
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
        if(transformedIngredients <= 0){
            transformedIngredients = <p className={classes.para}>Please Start Adding Ingredients!</p>
        }
    console.log(transformedIngredients);
    return (
        <div className={classes.Burger}>
        <BurgerIngredients type="bread-top" />
        {transformedIngredients}
        <BurgerIngredients type="bread-bottom" />
        </div>
    );

};

export default burger;