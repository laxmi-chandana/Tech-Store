import React from 'react'
import Hero from "../components/Hero.js"
import Contact from "../components/ContactPage/Contact.js"
import contactImg from "../images/contactBcg.jpeg"

export default class ContactPage extends React.Component{
    render(){
        return(
            <>
            <Hero img = {contactImg} />
            <Contact />
            </>
        )
    }
}