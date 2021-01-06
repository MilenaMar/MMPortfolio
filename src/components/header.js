import { Link } from "gatsby"
import React from "react"
import headerStyles from "../styles/header.module.scss"
import Logo from "../../static/black-logo.png"
import Menu from "./menu.js"

class Header extends React.Component {
  toggleMenu() {
    this.childMenu.open()
  }
  render (){
  return (
    <header className={headerStyles.header}>
     <>
        <button onClick={() => this.toggleMenu()} className={headerStyles.buttonMenu}>
          <div></div>
          <div></div>
          <div></div>
        </button>
        <Menu ref={el => (this.childMenu = el)} />
      </>
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
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
  }
}

export default Header
