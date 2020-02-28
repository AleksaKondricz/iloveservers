import React, {useState} from 'react';
import Slide from 'react-reveal/Slide';
import {Link, animateScroll as scroll} from 'react-scroll';
import styles from './header.module.css'


const navLinksData = [{id: 'about', label: 'About'}, {id: 'technologies', label: 'Technologies'}, {id: 'projects', label: 'Projects'}, {id: 'achievements', label: 'Achievements'}, {id: 'contact', label: 'Contact'}]

const Header = () => {
   const [mobileMenu, toggleMobileMenu] = useState(false)
   


   const scrollToTop = () => {
        scroll.scrollToTop();
      };
     
    return (
        <>
        <header className={styles.headerUntouched}>
            <div className={styles.logoWrapper }>
                <img src="logos/logo.svg" alt="Logo" onClick={()=>scrollToTop()}/>
            </div>
            <ul>
          {navLinksData.map(l => (<li><Link
                key={l.id}
                className={styles.Link}
                activeClass="active"
                to={l.id}
                spy={true}
                smooth={true}
                offset={0}
                duration= {500}> {l.label}</Link></li>))}
        </ul>
        </header>
        <div className={styles.mobHeader}>
            <img src="logos/logo.svg" alt="Logo" className={styles.logoMob} onClick={()=>scrollToTop()}/>
            <img src='logos/menu.png' alt='hamburger menu' className={styles.hamburgerMenu}  onClick={() => toggleMobileMenu(!mobileMenu)}/>
        </div>
            {mobileMenu && (
       <>
       <Slide right>
       <div className={styles.closeButton} onClick={() => toggleMobileMenu(!mobileMenu)}> X </div>
       <div className={styles.mobMenu}>
           <div className={styles.mobMenuOrnamentUp}></div>
           <div className={styles.mobMenuOrnamentMiddle}></div>
           <div className={styles.mobMenuSquareOrnament}></div>
           <div className={styles.mobMenuSquareOrnamentBottom}></div>
           <div className={styles.mobMenuOrnamentDown}></div>
          
       <ul>
          {navLinksData.map(l => (<li>
            <Link
                onClick={() => toggleMobileMenu(!mobileMenu)}
                key={l.id}
                className={styles.Link}
                activeClass="active"
                to={l.id}
                spy={true}
                smooth={true}
                offset={0}
                duration= {500}> {l.label}
            </Link>
          </li>))}
        </ul>
       </div>
       </Slide>
      </>
    )}
       
        </>
    );
}

export default Header;
