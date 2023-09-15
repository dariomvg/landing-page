import React from 'react'
import Header from './Header'
import Main from './Main'
import Planes from './Planes'
import Footer from './Footer'
import Cards from "./Cards"

const Principal = () => {
  return (
    <div className='sec-principal'>
        <Header /> 
        <Main /> 
        <Planes /> 
        <Cards /> 
        <Footer /> 
    </div>
  )
}

export default Principal