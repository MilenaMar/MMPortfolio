import { Link } from "gatsby"
import React from "react"
import headerStyles from "../styles/header.module.scss"
import Logo from "../../static/black-logo.png"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <Link to="/" className={headerStyles.name}>
       <img src={Logo} alt="web-site logo" style={{width:"70px"}}></img> 
      </Link>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              to="/"
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
