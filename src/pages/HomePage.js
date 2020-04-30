import React from 'react'
import Hero from '../components/Hero.js'
import { Link } from "react-router-dom"
import Services from "../components/HomePage/Services.js"
import Featured from "../components/HomePage/Featured.js"
export default function HomePage(){
    return(
        <>
        <Hero title = "Awesome Gadgets" max = "true">
            <Link 
                to = "/products" 
                className = "main-link" 
                style = {{ margin: "2rem" }}
            >
                our products
            </Link>
        </Hero>
        <Services />
        <Featured />
        </>
    )
}