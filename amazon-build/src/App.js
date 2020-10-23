import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Orders from "./Orders";
import Login from './Login';
import Footer from './Footer';
import { useDataLayerValues } from './DataLayer';
import { auth } from './firebase';

function App() {
  
  const [{user}, dispatch] = useDataLayerValues();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        //User is logged in
  
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
  
      } else {
        //User is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  
    return () => {
     return  unsubscribe
    }
  }, []);

  return (
    <Router>
      <div className="app">
      <Switch>
      <Route path="/orders">
            <Header />
            <Orders />
            <Footer />
          </Route>

        <Route path="/checkout">
          <Header />
          <Checkout />
          <Footer />
        </Route>
        
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Header />
          <Home />
          <Footer />
        </Route>
        
      </Switch>
    </div>
    </Router>
  );
}

export default App;
