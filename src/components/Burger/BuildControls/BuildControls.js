import React from "react";
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {   label: 'Salad', type: 'salad'   },
    {   label: 'Bacon', type: 'bacon' },
    {   label: 'Cheese', type: 'cheese'     },
    {   label: 'Meat', type: 'meat'   },
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p><b>Current Price: ${props.prices} </b></p>
        {controls.map(ctrl => (
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}
            added={() => props.addIng(ctrl.type)}
            removed={() => props.removeIng(ctrl.type)}
            disable={props.disabled[ctrl.type]}/>
            ))}
            <button 
            className={classes.OrderButton}
            disabled={!props.purchased}
            onClick={props.ordered}>Order Now</button>
    </div>
)

export default buildControls;