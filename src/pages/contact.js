import React from "react"
import ContactImage from "../../static/letschat.png"
import contactStyles from "../styles/contact.module.scss"
import Metadata from "../components/metadata"

const ContactPage = () => {
  return (
    <div className={contactStyles.container}>
    <Metadata title="Contact" description="Page with all the details to contact with me"/>
      <img src={ContactImage} alt="contact-illustration" style={{width:"300px"}}></img>
      <h1>Want to work together?</h1>
      <p>Let's get in touch you can contact me on my <a
          href="https://www.linkedin.com/in/milena-martinez-caceres-380729ab/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>, send me and <span>email</span> or simple fill out the form below and I will get in touch with you. </p>
        <form>
          <label>Contact details</label>
          <input></input>
          <label>Message</label>
          <textarea></textarea>
        </form>
      </div>
  )
}

export default ContactPage
