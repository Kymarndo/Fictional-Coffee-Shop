import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import logo from '../../images/hands-and-paws.png'
import search from '../../images/search.png'

export default function Navbar() {
    return (
        <div className={styles.container}>
            <div className={styles.section}><img src={logo} alt='' className={styles.logo}/></div>
            <ul className={styles.section}>
                <Link to='/' className={styles.links}>Home</Link>
                <Link to='/menu'  className={styles.links}>Menu</Link>
                <Link to='/other-services'  className={styles.links}>Other Services</Link>
                <Link to='/contact-us'  className={styles.links}>Contact Us</Link>
                
            </ul>
            <div className={styles.section}><img src={search} alt='' className={styles.search} onClick={searchShowAndHide}/></div>
        </div>
    )
}

function searchShowAndHide () {
    console.log("clicked");
}