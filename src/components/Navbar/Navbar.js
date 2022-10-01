import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../../images/hands-and-paws.png";
import search from "../../images/search.png";
import React, { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.logoSection}>
        <img src={logo} alt="" className={styles.logo} />
      </div>
      {/* <ul className={styles.section}>
                <Link to='/' className={styles.links}>Home</Link>
                <Link to='/menu'  className={styles.links}>Menu</Link>
                <Link to='/other-services'  className={styles.links}>Other Services</Link>
                <Link to='/contact-us'  className={styles.links}>Contact Us</Link>
                
            </ul> */}
      <div className={styles.searchSection}>
        <img src={search} alt="" className={styles.search} />
        <input className={styles.searchInput} />
      </div>
      <Hamburger rounded={true} size={48} onToggle={()=> setOpen (!isOpen)}  />
      <div>{isOpen?<ul className={styles.section}>
                <Link to='/' className={styles.links}>Home</Link>
                <Link to='/menu'  className={styles.links}>Menu</Link>
                <Link to='/other-services'  className={styles.links}>Other Services</Link>
                <Link to='/contact-us'  className={styles.links}>Contact Us</Link>
                
            </ul>:null}</div>
    </div>
  );
}
