import React,{useState} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
import '../styles/Header.css';

function Header() {
  const [visible,setVisible]=useState(false);
  return (
    <div className="custom__header">
      <div className="header__logo__container">
        <GiHamburgerMenu className="logo__icon" />
        <img className="header__logo" src="../assets/logo.png" />
      </div>
      <div className="header__input__container">
        <AiOutlineSearch style={{ fontSize: "2em" }} />
        <input placeholder="Search Items" />
      </div>
      <div className="header__button__container">
        <button>
          John Doe{" "}
          <img
            onClick={() => setVisible(!visible)}
            className="header__icons"
            src="../assets/caret_icon.png"
          />
          {visible && (
            <div className="header__dropdown">
              <p>Profile</p>
              <p>My Address</p>
              <p>Logout</p>
            </div>
          )}
        </button>
        <button>
          <img className="header__icons" src="../assets/icon_wishlist.png" />
          Wishlist
        </button>
        <button>
          <img className="header__icons" src="../assets/icon_bag.png" />
          <span className="bagsp">Bag</span>
        </button>
      </div>
    </div>
  );
}

export default Header;
