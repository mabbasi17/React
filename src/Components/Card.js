import { Box, Button, Card, CardActions, CardContent,  Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import './card.scss'
function MyCard({ cardData }) {

    return (
        <Box  mt={2} px={2}>
            <Card>
                <CardContent>
                    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} >
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {cardData.id}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {cardData.code}
                    </Typography>
                    <Box variant="h5" component="div">
                        <img className='img' src={'http://aldar.syrianstores.com/' + cardData.heroimg}></img>
                    </Box>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {cardData.retail_price}
                    </Typography>
                   <Box>
                        {cardData.desc}
                        <br />
                        {cardData?.image.map((img)=>{
                            <Box>
                             <img className='img'  src={'http://aldar.syrianstores.com/' + img}></img>
                             </Box>
                        })}
                        
                        </Box>
                        </Box>
                </CardContent>
                <CardActions>
                <Link to={`/products/${cardData.id}` } >
                <Button variant="outlined" >Product Details</Button>
                </Link>
                 
                </CardActions>
            </Card>
        </Box >
    )
}

export default MyCard