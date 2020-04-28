import React from "react"
import {LinkData} from './LinkData.js'

const ProductContext = React.createContext()

class ProductProvider extends React.Component{
    state = {
        sidebarOpen: false,
        cartOpen: false,
        cartItems: 110,
        links: LinkData
    }

    handleSidebar = () =>{
        this.setState({sidebarOpen: !this.state.sidebarOpen})
    }

    handleCart = () =>{

    }

    closeCart = () {

    }

    openCart = () {

    }


    render(){
        return (
            <ProductContext.Provider>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer}