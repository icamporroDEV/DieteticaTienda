import React from 'react';
import { Link } from 'react-router-dom';
// import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '../../public/logo.jpg';

import logo from "../img/logo.jpg"
// import { Container } from '@mui/material';
import { StyledAppbar } from './StyledComponents';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const links = [
  { name: 'Home', href: '/home' },
  { name: 'Contact', href: '/contact',icon:{ShoppingCartOutlinedIcon} },
];

export const NavBar = () => {
  return (

    <div sx={{ flexGrow: 1 }}>
      {<StyledAppbar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
      <img src={logo}
         alt="Descripción de la imagen"
         width="100"
         height="100"/>

          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <div>
          {links.map((x) => (
            <IconButton key={x.name} component={Link} to={x.href} color="inherit" icon={x.icon}>
              {x.name}
            </IconButton>
          ))}
        </div>
       
        </Toolbar>
      </StyledAppbar> }
    </div>
     
  
  );
};
