import React from 'react'
import {useState, useEffect} from 'react'
import { Button } from '@mui/material'


const ItemCount = ({stock, initial=1, onAdd}) => {
  
    const [contador, setContador] = useState(initial)

    useEffect(()=>{
        setContador(initial)
    }, [initial])

    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    };

    const restar = () => {
        if (contador > 1){
        setContador(contador - 1)
    }

    };
  
    return (
    <div>
        <h4>Unidades: {contador}</h4>
        <Button onClick={sumar} variant="outlined" style={{margin: "3px"}}>+</Button>
        <Button onClick={restar} variant="outlined" style={{margin: "3px"}}>-</Button>
        <Button onClick={()=> onAdd(contador)} variant="outlined" style={{margin: "3px"}}>Agregar al Carrito</Button>
    </div>
  )
}

export default ItemCount