import React, { useState, useEffect } from 'react'
import MyCard from './../Components/Card'
import Box from '@mui/material/Box'
import axios from 'axios'
import Grid from '@mui/material/Grid'
import AutoComplete from './../Components/AutoComplete'
import { Container, Divider, Typography } from '@mui/material'

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
          <>
           <Container component='main' maxWidth='xl'>
         <Divider />
        <Typography variant='h4' gutterBottom>Products Page</Typography>
       
      <Box p='10px 20px 5px 20px' >
       {/* <AutoComplete cat={cat}  setCat={setCat}/> */}
        </Box>
         <Divider />
      <Typography variant='h1' gutterBottom>Loading.....</Typography>


        </Container>
        </>
    )
  return (
    <>
      <Container component='main' maxWidth='xl'>
         <Divider />
        <Typography variant='h4' gutterBottom>Products Page</Typography>
        </Container>
      <Box p='10px 20px 5px 20px' >
       <AutoComplete cat={cat}  setCat={setCat}/>
      </Box>
      
    
      

    <Box sx={{ flexGrow: 1 }}>

      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={3} key={product.id}>
            <MyCard key={product.id} cardData={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
      )
      </>
  )
}

export default Products
