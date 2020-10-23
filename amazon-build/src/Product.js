import React from 'react'
import './Product.css';
import { useDataLayerValues } from './DataLayer';






function Product({ id, title, image, price, rating }) {
    const [{basket}, dispatch] = useDataLayerValues();
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,
                image,
                title,
                price,
                rating
            }
        })
    
    }

    

    return (
        <div className="product">
            <div className="product_info">
            <p>{title}</p>
            <p className="product_price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product_rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) => (
                        <p>🌟</p>
                    ))
                }
            </div>
            </div>

            <img src={image} alt="produit" />
            <button onClick={addToBasket}>Ajouter au panier</button>
        </div>
    )
}

export default Product
