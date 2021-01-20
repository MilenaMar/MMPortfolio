import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import Transition from "../components/transition"
import {Global} from "../components/globalstyle"
import layoutStyles from "../styles/layout.module.scss"

const Layout = props => {
  return (
    <div>
    <Global/>
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
      <Header />
      <Transition location={props.location}>
      {props.children}
      </Transition>
      </div>
    </div>
    <Footer/>
    </div>
  )
}
export default Layout
