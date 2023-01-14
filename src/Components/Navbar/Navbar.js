import './navbar.scss'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Autocomplete, Input, InputAdornment, TextField } from '@mui/material'
import { AccountCircle } from '@mui/icons-material'

function Navbar() {
  return (
    <Box sx={{ position: '-webkit-sticky', position: 'sticky', top: 0 }}>
      <Box sx={{ background: 'rgb(200,200,200,0.5)' }} position="static">
        <Box
          px={4}
          display={'flex'}
          justifyContent={'space-between'}
          alignContent={'center'}
        >
          <Box
            display={'flex'}
            py={1}
            alignContent={'center'}
            justifyContent={'center'}
          >
            <Input
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </Box>

          <Box display={'flex'} py={1}>
            <Button color="inherit" variant="outlined" size="small">
              Logout
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar
