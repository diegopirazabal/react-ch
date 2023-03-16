import React, { useState, useEffect } from 'react';
import {db} from '../../firebaseConfig'
import { getDocs, collection, query, where} from 'firebase/firestore'
import ItemList from './../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import MoonLoader from 'react-spinners/MoonLoader'

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const ItemListContainer = ()=> {
const [items, setItems] = useState([])
const {name} = useParams()

  useEffect( ()=>{

  //   const itemsFiltered = miceMockData.filter( (product)=> product.category === name)



  //   const task = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(name ? itemsFiltered : miceMockData)
  //     }, 1000);
  //     //reject(console.log('error'))
  //   })
  //   task
  //     .then( (res) => {
  //       setItems( res )
  //     })
  //     .catch( (error) => {
  //       console.log("promesa rechazada: ", error)
  //     })
  // }, [name])

  // if(items.length < 1){
  //   return <h1>No hay products</h1>
  // 

    const itemCollection = collection( db , "products" )

    if(name){

      const q = query(itemCollection, where("category", "==", name))

      getDocs(q)
      .then((res)=>{

        const products = res.docs.map(product => {
          return {...product.data(), id: product.id}
        })
        setItems(products)

      })
      .catch((err)=>{console.log("respuesta(error): " + err)})
    }else{
      getDocs(itemCollection)
      .then((res)=>{

        const products = res.docs.map(product => {
          return {...product.data(), id: product.id}
        })
        setItems(products)

      })
      .catch((err)=>{console.log("respuesta(error): " + err)})
    }

    

}, [name])
  
  return (
    <div>

      <MoonLoader
        color={"black"}
        loading={items.length < 1}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <ItemList items={items} />
    {
      // items.length < 1 ? ( <h1> cargando</h1> ) : ( <ItemList items={items} />)
    }

    {/* {
        items.length < 1 && (<h1>Cargando</h1>)  
    } */}
    </div>
  )

}
export default ItemListContainer