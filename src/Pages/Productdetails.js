
import React , {useState , useEffect} from 'react'
import Box from '@mui/material/Box';
import axios from 'axios';
import  Typography  from '@mui/material/Typography';
import Grid  from '@mui/material/Grid';
import { useParams } from 'react-router-dom';

export default function Productdetails() {

    const {productId} = useParams()
    const [product,setProduct]=useState([])
const [isloading ,setLoading]=useState(true)
    const getproductdetails= async ()=>{
      await  axios.post('http://aldar.syrianstores.com/api/detailed_product?id=' + productId).then((res)=>{
       
      setProduct(res.data[0])
            setLoading(false)
        }).catch()

    }
useEffect(()=>{
    getproductdetails()
},[])
if (isloading ) return (
    <Box  display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <h1>Loading.....</h1>
    </Box>
)
  return (
    // <div onClick={()=>{console.log(params)}} top={10}>{params.get("product_id") }</div>
    // < Button onClick={()=>{console.log(params.product_id)}}>sdfs</Button>
    
    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} >
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {product.id}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {product.code}
                    </Typography>
                    <Box variant="h5" component="div">
                        <img className='img' src={'http://aldar.syrianstores.com/' + product.heroimg}></img>
                    </Box>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {product.retail_price}
                    </Typography>

                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {product.desc}
                    </Typography>
                    <Typography sx={{ m: 1 }} color="#2c5">
                    Product Images
                    </Typography>
                   <Box>
                   <br />

                       
                    <Grid item xs={3} gap={3} >
                        {product?.image.map((imgs)=>{
                         
                           return  <img key={imgs.url} className='img' alt={imgs.id} src={'http://aldar.syrianstores.com/' + imgs.url }></img>
                           
                            
                        })}
                          </Grid>  
                        </Box>
                        </Box>
  )
}
