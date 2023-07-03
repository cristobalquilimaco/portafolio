import React, { useState } from "react";
import "./Navbar.css";
import images from "../assets/images";

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

      <nav className="menu__nav">

        <div className="burger__menu" onClick={updateMenu}>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
        </div>
       
        <div className={menuClass}>
            <a href="#home"><h1 className="logo">Cristobal Quilimaco</h1></a>
        <ul className="aditional__list">
        <a href="#about" onClick={updateMenu}><li className="">About me</li></a>
        <a href="#portafolio" onClick={updateMenu}><li className="">Portafolio</li></a>
        <a href="#contact" onClick={updateMenu}><li className="">Contact</li></a>
        </ul>
        <div className="img__menu">
          <img className="logo__skils" src={images.logoreact} alt="" />
          <img className="logo__skils" src={images.logojs} alt="" />
          <img className="logo__skils" src={images.logocss} alt="" />
          <img className="logo__skils" src={images.logohtml} alt="" />
        </div>

</div>
      </nav>
    //</div>
  );
};

export default Navbar;