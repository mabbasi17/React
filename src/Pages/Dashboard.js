import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CircularProgress } from '@mui/material';

function Dashboard() {
    return (
        <Box sx={{ background: '#eee' }} display={'block'} p={2}  >
            <Box display={'flex'} mb={2} justifyContent={'center'} gap={1} >
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 22 }} color="#666" gutterBottom>
                            Orders of the Day
                        </Typography>
                        <Typography variant="h5" component="div">

                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="#f00">
                            50 Orders
                        </Typography>
                        <CircularProgress variant="determinate" value={75} />

                    </CardContent>
                    <CardActions>
                        <Button variant="contained" size="small">Details</Button>
                    </CardActions>
                </Card>

                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 22 }} color="#666" gutterBottom>
                            Orders of the Day
                        </Typography>
                        <Typography variant="h5" component="div">

                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="#f00">
                            50 Orders
                        </Typography>
                        <CircularProgress variant="determinate" value={75} />

                    </CardContent>
                    <CardActions>
                        <Button variant="contained" size="small">Details</Button>
                    </CardActions>
                </Card>

                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 22 }} color="#666" gutterBottom>
                            Orders of the Day
                        </Typography>
                        <Typography variant="h5" component="div">

                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="#f00">
                            50 Orders
                        </Typography>
                        <CircularProgress variant="determinate" value={75} />

                    </CardContent>
                    <CardActions>
                        <Button variant="contained" size="small">Details</Button>
                    </CardActions>
                </Card>

                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 22 }} color="#666" gutterBottom>
                            Orders of the Day
                        </Typography>
                        <Typography variant="h5" component="div">

                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="#f00">
                            50 Orders
                        </Typography>
                        <CircularProgress variant="determinate" value={75} />

                    </CardContent>
                    <CardActions>
                        <Button variant="contained" size="small">Details</Button>
                    </CardActions>
                </Card>
            </Box>
        </Box>
    )
}

export default Dashboard
