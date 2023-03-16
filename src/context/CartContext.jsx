import React from 'react'
import { useState, createContext } from 'react'

export const CartContext = createContext()

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addToCart = ( product )=>{

        if (isInCart(product.id)){

          let newCart = cart.map( (element)=>{
            if(element.id === product.id){
              let modifiedProduct = {
                ...element,
                quantity: product.quantity
              }
              return modifiedProduct
            }else{
              return element
            }
          })
          setCart(newCart)
        }else{
        setCart([...cart, product ])}
    }

    const clearCart = ()=>{
        setCart([])
    }

    const deleteProductById = (id)=>{
        
        let newCart = cart.filter( product => product.id !== id)

        setCart(newCart)

    }

    const isInCart = ( id )=> {
      
      let exist = cart.some( element => element.id === id);

      return exist
    }

    // const isInCart = ( id ) => cart.some( element => element.id === id)

    const getQuantityById = (id)=>{

      let product = cart.find( element => element.id === id)
      return product?.quantity

    }

    const getTotalItems = ()=>{

      const total = cart.reduce((acc, element)=>{
        return acc + element.quantity
      }, 0)

      return total
    }

    const getTotalPrice = ()=>{

      const gasto = cart.reduce((acc, element)=>{
        return acc + (element.quantity * element.price)
      }, 0)

      return gasto
    }

    let data = {
        cart,
        addToCart,
        clearCart,
        deleteProductById,
        getQuantityById,
        getTotalItems,
        getTotalPrice
    }

  return (
    <CartContext.Provider value={ data }>
    {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider