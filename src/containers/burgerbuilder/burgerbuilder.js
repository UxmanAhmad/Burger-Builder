import React, { Component } from "react";
import Aux from "../../HOC/Auxilliary/auxilliary";
import Burger from '../../components/Burger/Burger';
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
// import { object } from "prop-types";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const Ing_Prices = {
    salad: 0.5,
    bacon: 0.75,
    cheese: 1.25,
    meat: 1.75,
};

class BurgerBuilder extends Component {

    // constructor(props){
    //     super(props);
    //     this.state={...}
    // }

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        Price: 4,
        Purchaseable: false,
        orderPurchase: false
    }

    purchase = (ingredients) => {
        const sum = Object.keys(ingredients).map( igkey => {
            return ingredients[igkey];
        }).reduce( (sum, el)=> {
            return sum + el;
        }, 0 );
        this.setState({
            Purchaseable: sum > 0
        });
    }
    addIngredients = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredient = {
            ...this.state.ingredients
        };
        updatedIngredient[type] = updatedCount;
        const priceAddition = Ing_Prices[type];
        const oldPrice = this.state.Price;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            Price: newPrice, 
            ingredients: updatedIngredient
        }); 
        this.purchase(updatedIngredient);
    }


    removeIngredients = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredient = {
            ...this.state.ingredients
        };
        updatedIngredient[type] = updatedCount;
        const priceDeduct = Ing_Prices[type];
        const oldPrice = this.state.Price;
        const newPrice = oldPrice - priceDeduct;
        this.setState({
            Price: newPrice, 
            ingredients: updatedIngredient
        }); 
        this.purchase(updatedIngredient);
    //     if(oldCount != 0){
    //     const updatedCount = oldCount - 1;
    //     const updatedIngredient = {
    //         ...this.state.ingredients
    //     };
    //     updatedIngredient[type] = updatedCount;
    //     const priceDeduct = Ing_Prices[type];
    //     const oldPrice = this.state.Price;
    //     const newPrice = oldPrice - priceDeduct;
    //     this.setState({
    //         Price: newPrice, 
    //         ingredients: updatedIngredient
    //     }); 
    // }
    }

    purchasinghandler = () => {
        this. setState({
            orderPurchase: true
        });
    }
    purchasingCancelhandler = () => {
        this. setState({
            orderPurchase: false
        });
    }

    purchasingContinue = () => {
        alert('You Continue!');
    }

    render(){
        const disabledinfo = {
            ...this.state.ingredients
        };

        for ( let key in disabledinfo ){
            disabledinfo[key] = disabledinfo[key] <=0
        }
        
        return (
                <Aux>
                    <Modal show={this.state.orderPurchase}
                    modalclosed={this.purchasingCancelhandler}>
                        <OrderSummary ingredients={this.state.ingredients}
                        cancelled={this.purchasingCancelhandler}
                        continue={this.purchasingContinue}
                        toalprice={this.state.Price}/>
                    </Modal>
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControls 
                    addIng={this.addIngredients}
                    removeIng={this.removeIngredients}
                    disabled={disabledinfo}
                    prices={this.state.Price}
                    purchased={this.state.Purchaseable}
                    ordered={this.purchasinghandler}/>
                    </Aux>   
            
        );
    }
}

export default BurgerBuilder;