import React, { useState } from "react";
import logo from './assest/logo-removebg-preview.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./SearchBar";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div className='bgcolor'>
      <header className="header">
        <div className="logoh">
          <img src={logo} alt="Sample Logo" />
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#home">Homes</a></li>
            <li><a href="#about">Abouts</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#pages">Pages</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#shop">Shop</a></li>
          </ul>
        </nav>

        <div className="icon-container">
          <div className="icon" onClick={toggleSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faShoppingCart} />
          </div>
        </div>
      </header>

      {/* Pass showSearch as a prop */}
      <SearchBar showSearch={showSearch} />
    </div>
  );
};
export default Header;
