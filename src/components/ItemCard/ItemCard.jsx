import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const ItemCard = ( props ) => {

    const product = props.element

    return (
        <Card sx={{ width: 300 }}>
          <CardMedia
            sx={{ height: 175 }}
            image= {product.imgURL}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              ${product.price}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to ={`/itemdetail/${product.id}`} style={{ textDecoration: 'none' }}>
            <Button size="small" variant='contained' >Ver Mas</Button>
            </Link>
          </CardActions>
        </Card>
      );
}

export default ItemCard