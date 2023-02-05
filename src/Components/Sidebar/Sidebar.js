import { useState } from 'react'
import './sidebar.scss'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import QrCodeScannerOutlinedIcon from '@mui/icons-material/QrCodeScannerOutlined'
import { Avatar, Button, Switch, Typography } from '@mui/material'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import DashboardIcon from '@mui/icons-material/Dashboard'

function Sidebar() {
  return (
    <Box>
      <Box display={'flex'} p={1} justifyContent={'center'}>
        <Avatar sx={{ width: 75, height: 75, bgcolor: '#23cc5c' }}>MA</Avatar>
      </Box>
      <Box p={3} justifyContent={'center'}>
        <Typography align="center">Mohammad Abbasi</Typography>
        <Typography align="center">Editor</Typography>
      </Box>
      <Divider />
      <Box sx={{ width: '100%', maxWidth: 360 }}>
        <List component="nav" aria-label="main">
          <ListItemButton href="/dashboard">
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
          <Divider />

          <ListItemButton href="/products">
            <ListItemIcon>
              <QrCodeScannerOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItemButton>
          <Divider />
          <ListItemButton href="/users">
            <ListItemIcon>
              <PersonOutlineOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItemButton>
        </List>
        <Divider />
        <Switch />
        <Divider />
        <Button href="/signup">Signup</Button>
      </Box>
    </Box>
  )
}

export default Sidebar
