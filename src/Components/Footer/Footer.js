import { Box } from '@mui/material'
import React from 'react'

function Footer() {
    return (
        <Box display={'flex'} sx={{  position: 'fixed', width:'100%', padding: '10px', height: '30px', bottom: 0, background: '#333', color: '#fff' }} justifyContent={'space-between'} alignItems={'center'}>

            <p>CopyRights</p>
            <p>Logo</p>

        </Box >
    )
}

export default Footer
