import { useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import VpnKeySharpIcon from '@mui/icons-material/VpnKeySharp'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material/styles'
import { Card, FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material'

export function Signup() {
  const country = [
    {'id': 1,
    'name':'EG' },
       {'id': 2,
    'name':'SY' },
    
 ]


  return (
 
    <Container component="main" maxWidth="xs">
      
    
        <Card
          raised
          sx={{
            padding: '20px 30px',
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
      >
      
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <VpnKeySharpIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Stack spacing={1}>
            <TextField
              color="secondary"
              margin="dense"
              required
              fullWidth
              label="username"
              name="username"
              autoFocus
              size="small"
            />
            <TextField
              color="secondary"
              margin="dense"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              size="small"
            />
            <TextField
              color="secondary"
              margin="dense"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              size="small"
            />
            <TextField
              color="secondary"
              margin="dense"
              required
              fullWidth
              name="repassword"
              label="Retype-Password"
              type="password"
              size="small"
          />
          <Stack spacing={2}></Stack>
          <FormControl
            fullWidth
          >
            <InputLabel>
              Country
            </InputLabel>
          <Select
              
              color="secondary"
              margin="dense"
              label="Country"
              size="small"
       
            >

              
              {country.map((ele) => 
       
          (   <MenuItem value={ele.id}>{ele.name}</MenuItem>)
              )}
            </Select> 
            {/* {country.map((a) => (
              <p>{a.id}</p>
            ))} */}
            <FormControlLabel
              margin="dense"
              size="small"
              control={<Checkbox required value="remember" color="secondary" />}
              label="I Accept Terms and Condtions"
            />
</FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              // margin="normal"
              // sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link color={'secondary'} href="forgetpassword" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link color={'secondary'} href="login" variant="body2">
                  {'Login instead'}
                </Link>
              </Grid>
            </Grid>
     
          </Stack>
        </Card>
      </Container>

  )
}
