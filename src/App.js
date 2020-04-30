import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AboutPage from './pages/AboutPage'
import CartPage from './pages/CartPage'
import ContactPage from './pages/ContactPage'
import DefaultPage from './pages/DefaultPage'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import SingleProductsPage from './pages/SingleProductPage'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import NavBar from './components/NavBar.js'
import SideBar from './components/SideBar.js'
import SideCart from './components/SideCart.js'
import Footer from './components/Footer.js'


export default class App extends React.Component{
  render()  {
    return (
      <>
        <NavBar />
        <SideBar />
        <SideCart />
        <Switch>
            <Route path ="/" exact component = {HomePage} />
            <Route path ="/about" exact component = {AboutPage} />
            <Route path ="/contact" exact component = {ContactPage} />
            <Route path ="/products" exact component = {ProductsPage} />
            <Route path ="/products/:id" exact component = {SingleProductsPage} />
            <Route path ="/cart" exact component = {CartPage} />
            <Route component = {DefaultPage} />
        </Switch>
        <Footer />

      </>
    );
  }
}






