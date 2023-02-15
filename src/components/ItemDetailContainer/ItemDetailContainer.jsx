import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../miceMockData";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    let productSelected = products.find((prod) => prod.id === +id);

    setProduct(productSelected);
  }, []);

  return (
    <div style={{display: "flex",
    justifyContent: "center",
    alignItems: "center",
    }}>
      <ItemDetail data={product}/>
    </div>
  );
};

export default ItemDetailContainer;
