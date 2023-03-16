import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import ItemCount from '../ItemCount/ItemCount'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { CartContext } from './../../context/CartContext';
import { useContext } from 'react'
import Swal from 'sweetalert2'

const ItemDetail = ({data}) => {

  const {addToCart, getQuantityById} = useContext( CartContext )

  const onAdd = (cantidad)=>{

    const obj = {
      ...data,
      quantity: cantidad
    }

    addToCart(obj)

    Swal.fire({
      icon: 'success',
      title: 'Producto agregado al carrito.'
    })

  }

  const quantity = getQuantityById(data.id)
  console.log(quantity)

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40%'
      }}
    >
      <Paper elevation={3} style={{padding: "5px"}}>
        <img src={`${data.imgURL}`} alt="" style={{width: "100%"}}/>
        <h2>{data.name}</h2>
        <h4>Marca: {data.brand}</h4>
        <h4>Precio: {data.price}</h4>
        <h4>Peso: {data.weight}</h4>
        <h4>Categoria: {data.category}</h4>
        <ItemCount stock={data.stock} initial={quantity} onAdd={onAdd}/>
        <Link to="/"><Button variant="outlined" style={{marginLeft:"5px", float: "right"}}>Volver</Button></Link>
      </Paper>
      
    </Box>
  )
}

export default ItemDetail