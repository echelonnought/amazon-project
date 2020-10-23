import React, { forwardRef } from 'react';
import './CheckoutProduct.css';
import { useDataLayerValues } from './DataLayer';

const CheckoutProduct = forwardRef(({
    id, 
    title,
    image, 
    price, 
    rating}, ref) => {
    
    const [ {basket}, dispatch] = useDataLayerValues();

    const removeFromBasket = () => {
        //remove item from basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }
    return (
        <div className="checkoutProduct" ref={ref}>
            <img 
            className="checkoutProduct_image" 
            src={image} 
            alt="" />
            
            <div className="checkoutProduct_info">
                
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct_rating">
                {
                    Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>🌟</p>
                    ))
                }
            </div>
            <button onClick={removeFromBasket}>Remove From Basket</button>
            </div>
        </div>
    )
});

export default CheckoutProduct
