import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from 'react-router-dom';
import "../Navbar/Navbar.css"

export default function GroupSizesColors({categorias}) {

  const buttons = [
    <Link to="/category/mouse" style={{ textDecoration: 'none' }}><Button>{categorias[0]}</Button></Link>,
    <Link to="/category/mousepad" style={{ textDecoration: 'none' }}><Button>{categorias[1]}</Button></Link>,
    <Link to="/category/accessories" style={{ textDecoration: 'none' }}><Button>{categorias[2]}</Button></Link>,
  ];

  return (
      <ButtonGroup variant="text" size="large" aria-label="large button group" className='boton'>
        {buttons}
      </ButtonGroup>
  );
}
