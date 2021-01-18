import React from "react"
import ContactImage from "../../static/letschat.png"
import contactStyles from "../styles/contact.module.scss"
import Metadata from "../components/metadata"
import MyForm from "../components/contact"

const ContactPage = () => {
  return (
    <div className={contactStyles.container}>
    <Metadata title="Contact" description="Page with all the details to contact with me"/>
      <h1>Want to work together?</h1>
      <p>Let's get in touch you can contact me on my <a
          href="https://www.linkedin.com/in/milena-martinez-caceres-380729ab/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>, by <span>email</span> or simple fill out the form below and I will get in touch with you. </p>
        <div >
        <img src={ContactImage} alt="contact-illustration" ></img>
        <MyForm />
        </div>
      </div>
  )
}

export default ContactPage
