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
    <Link to="/" className={headerStyles.personalLogo}>
       <img src={Logo} alt="web-site logo" className={headerStyles.logo}/>
      </Link>
     <>
        <button onClick={() => this.toggleMenu()} className={headerStyles.buttonMenu} aria-label="movile menu">
          <div></div>
          <div></div>
          <div></div>
        </button>
        <Menu ref={el => (this.childMenu = el)} />
      </>  
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
              to="/about"
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
            >
              About Me
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
              to="/contact"
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
            >
              Contact
            </Link>
          </li>
          <li>
            <a href="https://milenamar.github.io/resume/Milena%20Martinez%20CV.pdf" 
            target="_blank" rel="noreferrer" 
            className={headerStyles.navItem}
              >Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  )
  }
}

export default Header
