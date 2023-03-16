import { Button } from "@mui/material";
import { serverTimestamp, addDoc, collection, updateDoc, doc } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { db } from "../../firebaseConfig";
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import PhoneIcon from '@mui/icons-material/Phone';

const FormCheckout = ({ cart, total, clearCart, setOrderID }) => {
  const [userData, setUserData] = useState({ email: "", phone: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      buyer: userData,
      items: cart,
      total: total,
      date: serverTimestamp(),
    };

    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order)
        .then(res=> {
            setOrderID(res.id)
        })

        
    cart.map(product => {
        const orderDoc = doc(db, "products", product.id)
        updateDoc(orderDoc, {stock: product.stock - product.quantity})
    })






    clearCart();
  };

  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="User" label="Ingrese su usuario" variant="standard" onChange={(e) => setUserData({ ...userData, email: e.target.value })}/>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <PhoneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }}/>
        <TextField id="Phone" label="Ingrese su telefono" variant="standard" onChange={(e) => setUserData({ ...userData, phone: e.target.value })}/>
        </Box>
        <br />
        <Button type="submit">Comprar</Button>
      </form>
    </div>
  );
};

export default FormCheckout;
