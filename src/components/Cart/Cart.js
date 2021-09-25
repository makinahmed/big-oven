import React from 'react';

const Cart = (props) => {
    // console.log(props.cart);
    const { cart } = props
    let meal = []
    let area = []
    for (const food of cart) {
        meal = food.strMeal
        area = food.strArea
    }
    return (
        <div>
            <p>Food Name:{meal} </p>
            <p>Category:{area} </p>
        </div>
    );
};

export default Cart;