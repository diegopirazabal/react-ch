import React from 'react'

const ItemListContainer = ( {categorias, greeting} ) => {


  return (
    <div>
    <ul>
        <li>{categorias[0]}</li>
        <li>{categorias[1]}</li>
        <li>{categorias[2]}</li>
        <li style={{color: "red"}}>{greeting}</li>
    </ul>
    </div>
  )
}

export default ItemListContainer