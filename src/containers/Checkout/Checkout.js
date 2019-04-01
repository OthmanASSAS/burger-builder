import React, { Component } from "react";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
    };

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    };

    checkoutContinued = () => {
        this.props.history.replace("/checkout/contact-data");
    };
    render() {
        console.log(this.props)
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinued}
                />
            </div>
        );
    }
}

export default Checkout;
