import React from 'react'
import {useContext, useState} from 'react'
import { CartContext } from '../../context/CartContext'
import { Button } from '@mui/material'
import Swal from 'sweetalert2'
import FormCheckout from '../FormCheckout/FormCheckout'
import { Navigate } from 'react-router-dom'



const Cart = () => {

  const [buy, setBuy] = useState(false)
  const [orderID, setOrderID] = useState(null)
  const [toHome, setToHome] = useState(false)
  console.log(orderID)


  const {cart, clearCart, deleteProductById, getTotalPrice} = useContext( CartContext )
  console.log(cart)

  const clearCartAlert = ()=>{
    
    Swal.fire({
      title: 'Quieres vaciar el carrito?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Si, Vaciar',
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('El carrito se ha vaciado', '', 'success')
        clearCart()
      } else if (result.isDenied) {
        Swal.fire('', '', 'info')
      }
    })
    
    
  }

  const total = getTotalPrice();

  if(orderID){
      Swal.fire({
        title: 'Muchas gracias por tu compra!',
        text: "El ID de tu compra es "+orderID,
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Volver al inicio'
      }).then((result) => {
        if (result.isConfirmed) {
          setToHome(true)
          setOrderID(null)
        }
      })
  }

  if (toHome === true) {
    return <Navigate to="/" replace={true}/>;
  }

  return (
    <div>
      {
        !buy ? <div>

        {
          cart.length < 1 ? (<img style={{display: "block",
          margin: "0 auto",
          borderColor: "red", width: "600px"}}src="https://res.cloudinary.com/dquh1qcti/image/upload/v1678927092/Carrito_Vacio_sxj5im.png" alt='img'></img>) : (cart.map( item => {
            return <div key={item.id} style={{border: "1px solid black", padding: "5px", margin: "5px", display: "flex", alignItems: "center"}}>
                <img src={item.imgURL} alt="" width="80px"/>
                <h3>&nbsp;{item.name} </h3>
                <h3>&nbsp;- $:{item.price}</h3><hr />
                
              <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <h3>Unidades: {item.quantity}</h3>
                <Button onClick={()=>deleteProductById(item.id)}>Quitar del carrito</Button></div>
              </div>
          }))
        }
    
            {
    
              cart.length > 0 && <div
               style={{float: "right", margin: "5px"}}
                                 >
                <Button onClick={clearCartAlert} variant="contained" style={{margin: "5px"}}>Vaciar carrito</Button>  
                <h2>Total: ${total}</h2>
                <Button variant="contained" color="success" size="large" onClick={()=>setBuy(true)}>Ir a pagar</Button>
              </div>
    
            }
           
          </div> : <FormCheckout cart={cart} total={total} clearCart={clearCart} setOrderID={setOrderID}/>
      }

    
      </div>)
}

export default Cart