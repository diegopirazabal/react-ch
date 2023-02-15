import React from 'react'
import ItemCard from '../ItemCard/ItemCard'

const ItemList = ( props ) => {

  const items = props.items


  return (
    <div style={{display: "flex",
    justifyContent: "space-evenly"}}>
      {items.map( (element) => {
        return <ItemCard element={element} key={element.id}/>
      })}
    </div>
  )
}

export default ItemList