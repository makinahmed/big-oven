import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Food from '../Food/Food';

const Foods = () => {

    const [foods, setFoods] = useState([])
    const [searchItem, setSearchItem] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchItem}`)
            .then(res => res.json())
            .then(data => setFoods(data.meals))
    }, [searchItem])

    const handlesearchItem = (e) => {
        const searchItm = e.target.value
        setSearchItem(searchItm)
    }
    const handleCart = (food) => {
        const newCart = [...cart, food]
        setCart(newCart);
    }


    return (

        <div className="">
            <div className="mb-3 ms-auto text-center">
                <input onChange={handlesearchItem} className="form-control w-50 d-inline me-2" type="text" />
                <button type="button" class="btn btn-primary h-1">Primary</button>
            </div>
            <div className="row gy-5">
                <div className="col-lg-10">

                    {
                        foods.map(food => <Food handleCart={handleCart} food={food} key={food.idMeals}></Food>)
                    }
                </div>
                <div className="col-lg-2">
                    <h2>MY Cart</h2>
                    <Cart cart={cart}></Cart>

                </div>
            </div>
        </div>
    );
};

export default Foods;