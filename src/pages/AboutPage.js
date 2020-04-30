import React from 'react'
import Hero from "../components/Hero.js"
import Info from "../components/AboutPage/Info.js"
import aboutBcg from "../images/aboutBcg.jpeg"


export default class AboutPage extends React.Component{
    render(){
        return(
            <>
                <Hero img = {aboutBcg} />
                <Info />
            </>
        )
    }
}