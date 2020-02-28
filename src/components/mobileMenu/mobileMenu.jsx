import React from 'react';
import {Link} from 'react-scroll';
import styles from './mobileMenu.module.css'

const MobileMenu = () => {
  
    return ( 
    <div className={styles.mobMenu}>
        <nav>
        <Link
         className={styles.Link}
         activeClass="active"
         to="about"
         spy={true}
         smooth={true}
         offset={-200}
         duration= {500}>
             ABOUT
        </Link>
        <Link
         className={styles.Link}
         activeClass="active"
         to="technologies"
         spy={true}
         smooth={true}
         offset={-200}
         duration= {500}>
             TECHNOLOGIES
        </Link>
        </nav>
        </div>  );
}
 
export default MobileMenu;