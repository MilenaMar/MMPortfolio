import React from "react"
import Layout from "../components/layout"
import ContactImage from "../../static/letschat.png"

const ContactPage = () => {
  return (
    <Layout>
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
    </Layout>
  )
}

export default ContactPage
