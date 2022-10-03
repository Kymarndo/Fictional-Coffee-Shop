import styles from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/hands-and-paws.png";
import search from "../../images/search.png";
import React, { useEffect, useState, useRef } from "react";
import { Divide as Hamburger } from "hamburger-react";

export default function Navbar() {
    const ref = useRef ();
  const [isOpen, setOpen] = useState(false);

  useEffect ( () => {
    const outOfMenuClickCheck = e => { //enables nav menu closing when clicking outside the menu
        if (isOpen && ref.current && !ref.current.contains(e.target)){
            setOpen(false);

        } 
    }

    document.addEventListener("mousedown", outOfMenuClickCheck)

    return () => { //cleanup to the above event listener
        document.removeEventListener("mousedown", outOfMenuClickCheck)
    }
  }, [isOpen])

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.innerContainer}>
        <div className={styles.hamburgerSection}>
          <Hamburger
          color="white"
            rounded={true}
            size={48}
            toggled={isOpen} // <- Ensures hamburger animation reverts when menu closes from outside click
            onToggle={() => setOpen(oldState => !oldState)}
          
          />
          <div>
            {isOpen ? (
              <>

              <ul className={styles.navMenu}>
                <NavLink end to = "/" className={({ isActive }) => (isActive ? styles.activeLink : styles.links)} >
                <p>Home</p>  
                </NavLink>
                <NavLink to="/menu" className={({ isActive }) => (isActive ? styles.activeLink : styles.links)}>
                  <p>Menu</p>
                </NavLink>
                <NavLink to="/other-services" className={({ isActive }) => (isActive ? styles.activeLink : styles.links)}>
                 <p>Other Services</p> 
                </NavLink>
                <NavLink to="/contact-us" className={({ isActive }) => (isActive ? styles.activeLink : styles.links)}>
                  <p>Contact Us</p>
                </NavLink>
                <div className={styles.accountButtonsDiv}>
                    <button className={styles.accountButtons}>Sign Up</button>
                    <button className={styles.accountButtons}>Log In</button>
                </div>
              </ul>
              <div className={styles.container2} />
              </>
            ): null} 
          </div>
        </div>
        <div className={styles.searchSection}>
          <img src={search} alt="" className={styles.search} />
          <input className={styles.searchInput} placeholder="Search Something Here!"/>
        </div>
        <div className={styles.logoSection}>
            <Link to="/" ><img src={logo} alt="" className={styles.logo} /></Link>         
        </div>
      </div>
    </div>
  );
}
