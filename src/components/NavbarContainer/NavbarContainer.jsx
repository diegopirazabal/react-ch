import React from 'react'
import Navbar from '../Navbar/Navbar'


const navbarContainer = ()=> {
  return (
    <div>
        <Navbar categorias={["Mouse", "Mousepad", "Accesorios"]} />
    </div>
  )
}

export default navbarContainer