import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {db} from '../../firebaseConfig'
import { getDoc, collection, doc } from 'firebase/firestore'
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
   
    const itemCollection = collection(db, "products")
    const ref = doc(itemCollection, id)
    getDoc(ref)
      .then((res)=>setProduct( {...res.data(),id: res.id} ))
      .catch()

  }, [ id ]);

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
