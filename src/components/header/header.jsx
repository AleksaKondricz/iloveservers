/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react"
import Slide from "react-reveal/Slide"
import { Link, animateScroll as scroll } from "react-scroll"
import linkProps from "./header.config"
import styles from "./header.module.css"

const navLinksData = [
  { id: "about", label: "About" },
  { id: "technologies", label: "Technologies" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" }
]

const Header = () => {
  const [mobileMenu, toggleMobileMenu] = useState(false)

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  return (
    <>
      <header className={styles.headerUntouched}>
        <div className={styles.logoWrapper}>
          <img src="logos/logo.svg" alt="Logo" onClick={() => scrollToTop()} />
        </div>
        <ul>
          {navLinksData.map(l => (
            <li>
              <Link {...linkProps} key={l.id} to={l.id} className={styles.Link}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </header>
      <div className={styles.mobHeader}>
        <img
          src="logos/logo.svg"
          alt="Logo"
          className={styles.logoMob}
          onClick={() => scrollToTop()}
        />
        <img
          src="logos/menu.png"
          alt="hamburger menu"
          className={styles.hamburgerMenu}
          onClick={() => toggleMobileMenu(!mobileMenu)}
        />
      </div>
      {mobileMenu && (
        <>
          <Slide ssrFadeout right>
            <div
              className={styles.closeButton}
              onClick={() => toggleMobileMenu(!mobileMenu)}
            >
              X
            </div>
            <div className={styles.mobMenu}>
              <div className={styles.mobMenuOrnamentUp} />
              <div className={styles.mobMenuOrnamentMiddle} />
              <div className={styles.mobMenuSquareOrnament} />
              <div className={styles.mobMenuSquareOrnamentBottom} />
              <div className={styles.mobMenuOrnamentDown} />

              <ul>
                {navLinksData.map(l => (
                  <li>
                    <Link
                      {...linkProps}
                      onClick={() => toggleMobileMenu(!mobileMenu)}
                      key={l.id}
                      className={styles.Link}
                      to={l.id}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Slide>
        </>
      )}
    </>
  )
}

export default Header
