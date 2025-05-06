import React, { useState } from "react";
import style from "./navbar.module.css";
import { navItems } from "../../data/nav-items";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={style.header}>
      <div className={style.logo}>
        <a href="/">LOGO</a>
      </div>

      <div className={style.menuToggle} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "×" : "☰"}
      </div>

      <nav className={`${style.navbar} ${isOpen ? style.open : ""}`}>
        {navItems?.map((item, index) => (
          <li key={index} className={style.navItem}>
            {item}
          </li>
        ))}
        <li className={style.navItem}>
          {" "}
          <span className={style.searchIcon}>🔍</span>
          <input
            className={style.searchInput}
            type="text"
            placeholder="Search..."
          />
        </li>
        <button className={style.enrolBtn}>Enrolment</button>
      </nav>
    </header>
  );
};

export default Navbar;
