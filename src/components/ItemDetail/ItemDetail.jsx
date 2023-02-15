import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { width } from '@mui/system'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const ItemDetail = ({data}) => {

  console.log(data, "<--- data")
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
        <h3>{data.name}</h3>
        <h4>Marca: {data.brand}</h4>
        <h4>Precio: {data.price}</h4>
        <h4>Peso: {data.weight}</h4>
        <h4>Categoria: {data.category}</h4>
        <Button variant="contained">Agregar al carrito</Button>
        <Link to="/"><Button variant="outlined" style={{marginLeft:"5px"}}>Volver</Button></Link>
      </Paper>
      
    </Box>
  )
}

export default ItemDetail