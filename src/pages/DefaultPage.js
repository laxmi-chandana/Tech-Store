import React from 'react'
import Hero from "../components/Hero.js"
import { Link } from "react-router-dom"
import defaultBcg from "../images/defaultBcg.jpeg"


export default class DefaultPage extends React.Component{
    render(){
        return(
           <>
            <Hero title = "404" max = "true" img = {defaultBcg}>
                <h1 className = "text-uppercase">
                    Page not found
                </h1>
                <Link to="/" className = "main-link" style = {{ marginTop: "2rem" }}>
                return home
                </Link>
            </Hero>
           </>
        )
    }
}