import React, { Component } from "react";
import Aux from "../../../HOC/Auxilliary/auxilliary";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
    // componentDidUpdate() {
    //     console.log('[OrderSummary] will update');
    // }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map(igkey => {
            return  <li key={igkey}>
                        <span style = {{
                            textTransform: 'capitalize'
                        }}>{igkey}</span>: {this.props.ingredients[igkey]}
                    </li>
        });
        return (
        <Aux>
        <h3>Your Order</h3>
            <p>A delicious burger with following Ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price:</strong>{this.props.toalprice}</p>
            <p>Continue to Checkout?</p>
            <Button clicked={this.props.cancelled} btnType={"Danger"}>Cancel</Button>
            <Button clicked={this.props.continue} btnType={"Success"}>Continue</Button>
        </Aux>
        );
    }
}

export default OrderSummary;