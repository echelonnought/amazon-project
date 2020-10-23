import React, { useState, useEffect } from 'react';
import { db } from "./firebase";
import './Orders.css'
import { useDataLayerValues } from "./DataLayer";
import Order from './Order'

function Orders() {
    const [{basket, user}, dispatch] = useDataLayerValues();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if(user) {
        db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .onSnapshot(snapshot => (
            setOrders(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        ))
    } else {
        setOrders([])
    }

  }, [user])

    return (
        <div className='orders'>
            <h1>Vos Commandes</h1>

            <div className='orders_order'>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders
