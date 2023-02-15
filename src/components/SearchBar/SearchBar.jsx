import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import miceMockData from "../../miceMockData";

function SearchBar2() {
  const [items, setItems] = useState([])

  useEffect( ()=>{
    const task = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(miceMockData)
      }, 1000);
      //reject(console.log('error'))
    })
    task
      .then( (res) => {
        setItems( res )
      })
      .catch( (error) => {
        console.log("promesa rechazada: ", error)
      })
  }, [])



    return (
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={items.map((option) => option.name)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search input"
              InputProps={{
                ...params.InputProps,
                type: 'search'
              }}style={{width: "500px"}}
            />
          )}
        />
    );
  }

  export default SearchBar2;