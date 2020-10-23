import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import {useDataLayerValues} from './DataLayer';
import { getBasketTotal } from './reducer';
import StripeCheckout from 'react-stripe-checkout';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";
import { db } from "./firebase";
import { ip, stripePublishableKey } from "./constants";

toast.configure();

function Subtotal() {
    
    const [{basket, user}, dispatch] = useDataLayerValues();
    const history = useHistory();
     async function handleToken(token) {

      const body = {
        token,
        basket: getBasketTotal(basket),
        
      }

      const headers = {
        "Content-Type": "application/json"
      }

      return fetch(`${ip}/payment`, {
        method: "POST",
        headers,
        body: JSON.stringify(body)
      }).then( response => {
        if(response.status === 200) {

          db
              .collection('users')
              .doc(user?.uid)
              .collection('orders')
              .doc(token.id)
              .set({
              newBasket: getBasketTotal(basket),
              basket,
              created: new Date()
              })

          toast('Success! Check emails for details', {
            type: 'success'
          })

          dispatch({
            type: 'EMPTY_BASKET'
        })

        history.replace('/orders')

        }  else if (response.status !== 200) {
          toast('Something went wrong', {
            type: 'error'
          })
        }
      })
      .catch(error => console.log(error))

  }
  return (
    <div className="subtotal">
      {/* Price */}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
            Total ({basket?.length} articles): <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> Cette commande contient un cadeau
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      
        <StripeCheckout 
        
        stripeKey={stripePublishableKey}
        token={handleToken}
        billingAddress
        shippingAddress
        amount={getBasketTotal(basket) * 100}> <button className="stripeButton">Passer à la caisse</button> </StripeCheckout>
      
    </div>
  );
}

export default Subtotal;
