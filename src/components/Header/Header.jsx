import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import NavbarContainer from '../NavbarContainer/NavbarContainer'
import BrandIcon from '../BrandIcon/BrandIcon'
import SearchBar from '../SearchBar/SearchBar'

const header = ()=> {
  return (
    <div style={{display: "flex",
                 width: "99%",
                 height: "14vh",
                 justifyContent: "space-evenly",
                 alignItems: "center"
                 }}>
        <BrandIcon />
        <SearchBar />
        <NavbarContainer />
        <CartWidget />
    </div>
  )
}

export default header