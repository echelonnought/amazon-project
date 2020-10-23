import React from "react";
import { useDataLayerValues } from "./DataLayer";
import CheckoutProduct from "./CheckoutProduct";
import './Checkout.css';
import Subtotal from './Subtotal';
import FlipMove from 'react-flip-move';

function Checkout() {
  const [{ basket, user }] = useDataLayerValues();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://m.media-amazon.com/images/G/08//ape/fallback/static/FR_HouseAdsASV_970x250._CB1198675309_.jpg"
          alt="checkout ad"
        />
        {basket?.length === 0 ? (
          <div>
            <h4>Bonjour, {user?.email}</h4>
            <h2>Votre panier est vide</h2>
            <p>
            Vous n'avez pas d'article dans votre panier. Pour acheter un ou plusieurs articles, cliquez sur
              "Ajouter au panier" à côté de l'article.
            </p>
          </div>
        ) : (
          <div>
            <h4>{user? `${user?.email}, avoir une belle expérience de magasinage. Merci d'être passé! `:` Veuillez vous connecter ou créer un compte`}</h4>
            <h2 className="checout_title">Votre panier</h2>
            {/*List Out All of the CheckOut Products */}
            <FlipMove>
            {basket.map((item) => {
              return (
                <CheckoutProduct
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
            </FlipMove>
          </div>
        )}
      </div>
      {
          basket?.length > 0 && (
            <div className="checkout-right">
              <Subtotal />
              
            </div>
          )
      }
    </div>
  );
}

export default Checkout;
