import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [isMenuClick, setIsMenuClick] = useState(false);

  const updateMenu = () => {
    if (!isMenuClick) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClick(!isMenuClick);
  };

  return (
    // <div style={{ width: "8", height: "100vh" }}>
      <nav className="menu__nav">

        <div className="burger__menu" onClick={updateMenu}>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
        </div>
       
        <div className={menuClass}>
            <h1 className="logo">Cristobal Quilimaco</h1>
        <ul className="aditional__list">
          <li className="">About me</li>
          <li className="">Portfolio</li>
          <li className="">Contact</li>
        </ul>

</div>
      </nav>
    //</div>
  );
};

export default Navbar;