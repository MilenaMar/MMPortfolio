import React from "react"
import styled from 'styled-components';
import ContactImage from "../../static/letschat.png"
import Metadata from "../components/metadata"
import MyForm from "../components/contact"

const ContactStyle = styled.div`
{
    display: flex;
    margin:0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div{
      padding-top: 1rem;
        display: flex;
        align-items: center;
    }

    img{

        max-width: 100%;
         height: 400px;
    } 

    a{
      color:rgba(244,103,64,0.8);;
    }
}


@media (max-width: 828px){
 {
        max-width: 400px;
        overflow: hidden;
    
        div{
            height:400px;
        }
    
        img{
          min-width: 2px;
          max-width: 2px;
          visibility: hidden;
        } 
    }    
}
`


const ContactPage = () => {
  return (
    <ContactStyle>
    <Metadata title="Contact" description="Page with all the details to contact with me"/>
      <h1>Want to work together?</h1>
      <p>Let's get in touch you can contact me by <a
          href="https://www.linkedin.com/in/milena-martinez-caceres-380729ab/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>,  
        <a target="_blank" rel="noreferrer"  href="mailto:milykar13@icloud.com"> email </a> 
        or simple fill out the form below and I will get in touch with you. </p>
        <div >
        <img src={ContactImage} alt="contact-illustration" ></img>
        <MyForm />
        </div>
        </ContactStyle>
  )
}

export default ContactPage
