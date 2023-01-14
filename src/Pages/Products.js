import React, { useState, useEffect } from 'react'
import MyCard from './../Components/Card'
import Box from '@mui/material/Box'
import axios from 'axios'
import Grid from '@mui/material/Grid'
import AutoComplete from './../Components/AutoComplete'

function Products() {
  const [products, setProducts] = useState([])
  const [isloading, setLoading] = useState(true)
  const [cat, setCat] = useState('epyx')
  const getproducts = async () => {
    await axios
      .post('http://aldar.syrianstores.com/api/list_products?brand=' + cat)
      .then((res) => {
        setProducts(res.data)
        setLoading(false)
      })
      .catch()
  }
  useEffect(() => {
    getproducts()
  }, [cat])
  if (isloading)
    return (
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <h1>Loading.....</h1>
      </Box>
    )
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AutoComplete cat={cat} setCat={setCat} />
      {cat}
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={3} key={product.id}>
            <MyCard key={product.id} cardData={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Products
