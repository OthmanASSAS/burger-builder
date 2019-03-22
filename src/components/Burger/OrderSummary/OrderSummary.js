import React, { Component } from "react";

import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
	// This could be a functional commponent, doesn't have to be a class
    componentDidUpdate = () => {
        console.log("[Order Summary] did update");
    };
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map(
            igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: "capitalize" }}>
                            {igKey}
                        </span>
                        :{this.props.ingredients[igKey]}
                    </li>
                );
            }
        );

        return (
            <React.Fragment>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>{ingredientSummary}</ul>
                <p>
                    <strong>Total price: {this.props.price.toFixed(2)}</strong>
                </p>
                <p>Continue To Checkout ?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
                    CANCEL
                </Button>
                <Button
                    btnType="Success"
                    clicked={this.props.purchaseContinued}
                >
                    CONTINUE
                </Button>
            </React.Fragment>
        );
    }
}

export default OrderSummary;
