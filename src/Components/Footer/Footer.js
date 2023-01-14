import { Box } from '@mui/material'
import React from 'react'

function Footer() {
    return (
        <Box display={'flex'} sx={{ flexGrow: 5, position: 'fixed', width: '83%', padding: '0px 15px', height: '30px', bottom: 0, background: '#333', color: '#fff' }} justifyContent={'space-between'} alignItems={'center'}>

            <h4>CopyRights</h4>
            <h4>Logo</h4>

        </Box >
    )
}

export default Footer
