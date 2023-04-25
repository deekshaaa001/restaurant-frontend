import React, { useState } from "react";
import { Box, AppBar, Typography, Toolbar, IconButton, Drawer, Divider } from "@mui/material"
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import "../../styles/HeaderStyles.css";
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from "react-router-dom";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen); 
  };
  
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}> 
    <Typography color={"orange"} variant="h6" component="div" sx={{flexGrow:1, my:2}}> 
        <RamenDiningIcon/>
        My Restaurant
        </Typography> 
        <Divider/>
          <ul className = "mobile-navigation" >
          <li>
          <NavLink activeClassName="active" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/menu"}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
          
          </li>
        </ul>

        
    </Box>
  );
  return (
    <>
    <Box>
      <AppBar component = {"nav"} sx={{bgcolor: "white"}}>
        <Toolbar>
        <IconButton className='menu-bar' color ="orange" aria-label="open drawer" edge ="start" sx={{mr:2, display: {sm: "none"},
        }}
        onClick={handleDrawerToggle}
        >
        <MenuIcon/>
        </IconButton>
        <Typography color={"orange"} variant="h6" component="div" sx={{flexGrow:1}}> 
        <RamenDiningIcon/>
        My Restaurant
        </Typography> 
        <Box className="nav" sx={{display: {xs:"none",sm:"block"}}}>
          <ul className = "navigation-menu" >
          <li>
          <NavLink activeClassName="active" to={"/"}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/menu"}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
          
           
          
          </li>
        </ul>

        </Box>
        </Toolbar>
        

       

      </AppBar>
      <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar/>
        </Box>
      </Box>
    </>
  );
};

export default Header;