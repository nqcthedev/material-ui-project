import { AppBar, Avatar, Badge, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import { Mail, Notifications, Pets } from '@mui/icons-material'
import React, {useState} from 'react'

import { Box } from '@mui/system';

const StyledToolbar = styled(Toolbar) ({
  display:'flex',
  justifyContent:'space-between',

})

const Search = styled('div')(({ theme }) => ({
  backgroundColor:'white',
  padding:'0 10px',
  borderRadius:theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled('div')(({theme}) => ({
  display:'none',
  alignItems:'center',
  gap:'15px',
  [theme.breakpoints.up('sm')]:{
    display:'flex'
  }
}))

const UserIcon = styled(Box)(({theme}) => ({
  display:'flex',
  alignItems:'center',
  gap:'10px',
  [theme.breakpoints.up('sm')]:{
    display:'none'
  }
}))

const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <AppBar position='sticky'>
      <StyledToolbar><Typography variant='h6' sx={{display:{xs:'none', sm:'block'}}}>Cuong Idol</Typography>
      <Pets sx={{display:{xs:'block', sm:'none'}}}/>
      <Search ><InputBase placeholder='Seach...'/></Search>
      <Icons>
        <Badge badgeContent={4} color='error'>
          <Mail />
        </Badge>
        <Badge badgeContent={4} color='primary'>
       <Notifications/>
        </Badge>
        <Avatar onClick={() => setShow(true)} sx={{width:'30px', height:'30px'}} src='https://mui.com/static/images/avatar/3.jpg'/>
      </Icons>
      <UserIcon onClick={() => setShow(true)}>
      <Badge badgeContent={4} color='primary'>
       <Notifications/>
        </Badge>
        <Avatar sx={{width:'30px', height:'30px'}} src='https://mui.com/static/images/avatar/3.jpg'/>
      </UserIcon>
      <Menu
      open={show}
      onClose={() => setShow(false)}
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
       
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar