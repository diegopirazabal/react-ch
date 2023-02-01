import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import Navbar from '../Navbar/Navbar'
import BrandIcon from '../BrandIcon/BrandIcon'

const header = ()=> {
  return (
    <div style={{display: "flex",
                 width: "100%",
                 height: "14vh",
                 justifyContent: "space-between",
                 alignItems: "center"
                 }}>
        <BrandIcon />
        <Navbar />
        <CartWidget />
    </div>
  )
}

export default header