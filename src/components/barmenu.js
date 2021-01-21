import React, {Component} from 'react'
import Menu from "./menu.js"
import headerStyles from "../styles/header.module.scss"

export default class  BarMenu extends Component {

toggleMenu() {
    this.childMenu.open()
  }
  
    render(){
        return (
            <>
        <button onClick={() => this.toggleMenu()} className={headerStyles.buttonMenu} aria-label="movile menu">
          <div></div>
          <div></div>
          <div></div>
        </button>
        <Menu ref={el => (this.childMenu = el)} />
             </>
        )
    }

}