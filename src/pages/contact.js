import React from "react"
import ContactImage from "../../static/letschat.png"
import Metadata from "../components/metadata"

const ContactPage = () => {
  return (
    <div>
    <Metadata title="Contact" description="Page with all the details to contact with me"/>
      <img src={ContactImage} alt="contact-illustration" style={{width:"300px"}}></img>
      <h1>To contact me</h1>
      <p>
        You can contact me on my{" "}
        <a
          href="https://www.linkedin.com/in/milena-martinez-caceres-380729ab/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>{" "}
        !{" "}
      </p>
      </div>
  )
}

export default ContactPage
