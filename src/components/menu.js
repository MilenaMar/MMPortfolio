import React, { useImperativeHandle, useRef } from "react"
import { Link } from "gatsby"
import styles from "../styles/menu.module.scss"

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }
  close() {
    this.setState({ open: !this.state.open })
  }

  open() {
    this.setState({ open: !this.state.open })
  }

  render() {
    return (
      <div 
         role = "button"
         tabIndex="0"
        className={`${styles.menu} ${this.state.open ? `${styles.open}` : ""}`}
        onClick={() => this.close()}
        onKeyDown={() => this.close()}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    )
  }
}

export default React.forwardRef((props, ref) => {
  const menuRef = useRef()

  useImperativeHandle(ref, () => ({
    open() {
      menuRef.current.open()
    },
  }))

  return <Menu ref={menuRef} {...props} />
})