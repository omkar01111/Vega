import React, { useState } from "react";
import { Box,IconButton,Typography ,Menu,MenuItem} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/img/logo/logo.png";
import "./header.scss";

import SearchBar from "./SearchBar";
import Header_Right_Profile_Section from "./Header_Right_Profile_Section";


const pages = ["Home", "Programs", "live", "Community", "About"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box className="appBar">
      <div className="nav_Container">
        {/* mobile view menu  */}
        <Box
          className="navHeaderMobileMenu"
          sx={{
            width: "100px",
            flexGrow: 0,
            display: { xs: "flex", sm: "none" },
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon color="text" />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Box className="left_nav">
          <Link to="/" className="logo_Link">
            <img className="logo_img" src={logo} alt="" />
            <h1 className="logo-text">Vega</h1>
          </Link>
        </Box>

        <Box className="midd_nav" sx={{ display: { xs: "none", sm: "flex" } }}>
          <div className="menu_container">
            <Link className="nav_menu">For You</Link>
            <Link className="nav_menu">Programs</Link>
            <Link className="nav_menu">Community</Link>
            <Link className="nav_menu">About</Link>
            <Link className="nav_menu">Live</Link>
          </div>
        </Box>

        {/* search bar */}

        <Box sx={{width:'20%', flexDirection:'row',justifyContent:'flex-end',display:'flex'}}>
          <Box sx={{ position: "relative", width: "auto" }}>
            <SearchBar/>
          </Box>

          <Header_Right_Profile_Section />
        </Box>
      </div>
    </Box>
  );
};

export default Header;
