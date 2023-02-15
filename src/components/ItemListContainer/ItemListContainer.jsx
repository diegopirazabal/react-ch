import React, { useState, useEffect } from 'react';
import miceMockData from "../../miceMockData";
import ItemList from './../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ()=> {
const [items, setItems] = useState([])
const {name} = useParams()

  useEffect( ()=>{

    const itemsFiltered = miceMockData.filter( (product)=> product.category === name)


    const task = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(name ? itemsFiltered : miceMockData)
      }, 200);
      //reject(console.log('error'))
    })
    task
      .then( (res) => {
        setItems( res )
      })
      .catch( (error) => {
        console.log("promesa rechazada: ", error)
      })
  }, [name])

  
  
  return (
    <ItemList items={items}/>
  )

}
export default ItemListContainer