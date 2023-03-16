import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { NavLink } from 'react-router-dom';
import "../Navbar/Navbar.css"

export default function GroupSizesColors({categorias}) {

  const buttons = [
    <NavLink to="/category/mouse" style={{ textDecoration: 'none' }} className={({isActive})=>isActive ? "active-navbar" : "navbar-item"}><Button>{categorias[0]}</Button></NavLink>,
    <NavLink to="/category/mousepad" style={{ textDecoration: 'none' }} className={({isActive})=>isActive ? "active-navbar" : "navbar-item"}><Button>{categorias[1]}</Button></NavLink>,
    <NavLink to="/category/accessories" style={{ textDecoration: 'none' }} className={({isActive})=>isActive ? "active-navbar" : "navbar-item"}><Button>{categorias[2]}</Button></NavLink>,
  ];

  return (
      <ButtonGroup variant="text" size="large" aria-label="large button group" className='boton'>
        {buttons}
      </ButtonGroup>
  );
}
