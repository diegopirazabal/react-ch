import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { getDocs, collection} from 'firebase/firestore'
import { db } from '../../firebaseConfig';


function SearchBar2() {
  const [items, setItems] = useState([])

  useEffect( ()=>{
    const itemCollection = collection( db , "products" )

    getDocs(itemCollection)
      .then((res)=>{

        const products = res.docs.map(product => {
          return {...product.data(), id: product.id}
        })
        setItems(products)})
}, [])



    return (
        <Autocomplete
          freeSolo
          id="searchbar"
          disableClearable
          options={items.map((option) => option.name)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search input"
              InputProps={{
                ...params.InputProps,
                type: 'search'
              }}
              style={{width: "500px"}}
            />
          )}
        />
    );
  }

  export default SearchBar2;