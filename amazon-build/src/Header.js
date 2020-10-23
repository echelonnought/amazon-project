import React, {useState} from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';import { useDataLayerValues } from './DataLayer';
import { auth } from './firebase';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Header() {

  const [{basket, user} ] = useDataLayerValues();
  const handleAuth = () => {
    if(user) {
      auth.signOut()
    }
  }
  const [toggle, setToggle] = useState(false);
  const menuToggle = () => {
    setToggle(toggle => !toggle)
  }

  // const { toggle } = this.state
  
  return (
    <nav className="header">
      
      {/*Logo on the left */}
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className="header_logo"
          alt="logo"
        />
      </Link>
      {/* Search box*/}
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      {/* 4 Links */}
      <div className={ toggle ? "toggle" : "" }>
        {/* 1st Link*/}
        <Link to={ !user && "/login" } className="header_link">
          <div onClick={handleAuth} className="header_option">
  <span className="header_optionLineOne">Bonjour {!user ? ', Identifiez-vous' : `${user?.email}`}</span>
            <span className="header_optionLineTwo">{user? 'Déconnexion': 'S\'identifier'}</span>
          </div>
        </Link>
        {/* 2nd Link*/}
        <Link to="/orders" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">
Retour</span>
            <span className="header_optionLineTwo">& Commandes</span>
          </div>
        </Link>
        {/* 3rd Link*/}
        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Votre</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
        </Link>
        {/* 4th Link*/}
         <Link to="/checkout" className="header_link">
             <div className="header_optionBasket">
                 {/*Shopping Basket icon */}
                 <ShoppingCartIcon />
                 {/*Number of items in the Basket */}
                 <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
             </div>
         </Link>
         <Link className="header_link">
             <div className="header_closeIcon">
                 {/*Burger Menu */}
                 <CloseIcon onClick={menuToggle} className="close_icon"/>
             </div>
      </Link>
         
      </div>
      <Link className="header_link">
             <div className="header_burgerMenu">
                 {/*Burger Menu */}
                 <MenuIcon onClick={menuToggle} className="burger_menu"/>
             </div>
      </Link>
      {/* Basket icon with number */}
      
    </nav>
  );
}

export default Header;
