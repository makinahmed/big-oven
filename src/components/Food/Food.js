import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Food = (props) => {
    const { strMealThumb, strMeal, strInstructions, strArea } = props.food
    return (
        <div className="col-lg-4 d-inline-block text-center shadow-lg p-3 mb-5 bg-body rounded">
            <div>
                <img className="w-75 h-100"  src={strMealThumb} alt="" />
            </div>
            <h2>{strMeal}</h2>
            <p>{strInstructions.slice(0, 100)}</p>
            <p>{strArea}</p>
            <button onClick={()=>props.handleCart(props.food)}>
            <FontAwesomeIcon icon={faShoppingCart} />
                Add To Cart</button>
        </div>
    );
};

export default Food;