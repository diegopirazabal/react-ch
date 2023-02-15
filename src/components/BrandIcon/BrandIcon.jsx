import React from 'react'
import { Link } from 'react-router-dom'

const Brand = () => {
  return (
    <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
    <div style={{display: "flex", padding: "5px"}}>
        <img src="https://res.cloudinary.com/dquh1qcti/image/upload/v1675209121/sight-icon_n4vkgn.png" style={{height: "100px"}} alt="Brand logo" />
        <h1 style={{padding: "10px"}}>Sight</h1>
    </div>
    </Link>
  )
}

export default Brand