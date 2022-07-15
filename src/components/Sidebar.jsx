import { AccountBox, Article, DarkMode, Group, Home, Person, Settings, Storefront } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'

import React from 'react'

const Sidebar = ({mode, setMode}) => {
  return (
    <Box flex={1} p={2}>
    <Box position='fixed'>
    <List>
    <ListItem disablePadding sx={{
      color:'#ccc'
    }}>
      <ListItemButton component='a' href='#home'>
        <ListItemIcon>
          <Home/>
        </ListItemIcon>
        <ListItemText primary="Homepage" />
      </ListItemButton>
      </ListItem>
     <ListItem disablePadding>
     <ListItemButton component='a' href='#page'>
        <ListItemIcon>
        <Article/>
        </ListItemIcon>
        <ListItemText primary="Pages" />
      </ListItemButton>
     </ListItem>
     <ListItem disablePadding>
     <ListItemButton component='a' href='#group'>
        <ListItemIcon>
        <Group/>
        </ListItemIcon>
        <ListItemText primary="Groups" />
      </ListItemButton>
     </ListItem>
      <ListItem disablePadding>
      <ListItemButton component='a' href='#storefront'>
        <ListItemIcon>
        <Storefront/>
        </ListItemIcon>
        <ListItemText primary="Marketplace" />
      </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
      <ListItemButton component='a' href='#person'>
        <ListItemIcon>
        <Person/>
        </ListItemIcon>
        <ListItemText primary="Friends" />
      </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
      <ListItemButton component='a' href='#settings'>
        <ListItemIcon>
        <Settings/>
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
      <ListItemButton component='a' href='#settings'>
        <ListItemIcon>
        <AccountBox/>
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
      <ListItemButton component='a' href='#settings'>
      <ListItemIcon>
      <DarkMode/>  
      </ListItemIcon>
       <Switch onChange={e => setMode(mode === 'light' ? 'dark' : 'light')}/>
      </ListItemButton>
      </ListItem>
    </List>
    </Box>
    </Box>
  )
}
  
export default Sidebar