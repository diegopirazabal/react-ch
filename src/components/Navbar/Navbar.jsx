import React from 'react'
import NavbarContainer from '../NavbarContainer/NavbarContainer'


const navbar = ()=> {
  return (
    <div>
        BarraBusqueda
        <NavbarContainer categorias={["Mouse", "Mousepad", "Accesorios"]} greeting="Greeting"/>
    </div>
  )
}

export default navbar
