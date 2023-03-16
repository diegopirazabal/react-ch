import React from "react";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'
import { CartContext } from './../../context/CartContext';
import {useContext} from 'react'

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const CartWidget = () => {

  const {getTotalItems} = useContext(CartContext)

  return (
    <Link to="/cart" > 
    <div>
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={getTotalItems()} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
    </div>
    </Link>
  );
};

export default CartWidget;
