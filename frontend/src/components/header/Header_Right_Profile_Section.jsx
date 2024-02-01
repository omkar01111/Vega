import React from "react";
import { Box, IconButton, Menu, MenuItem, Divider } from "@mui/material";
import {
  NotificationsNone as NotificationsNoneIcon,
  PersonAdd,
  Settings,
  Logout,
} from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import SearchBar from "./SearchBar";


const Header_Right_Profile_Section = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <Box className="right_nav" sx={{width:'40px',marginRight:'15%'}}>
      <div className="right_menuContainer">
       


        <Box className="profile_btn"  sx={{width:{xs:'40px',md:'50px'}}}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              
              
            }}
          >
            <IconButton
              onClick={handleClick}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              sx={{width:{xs:'30px',md:'40px'},height:{xs:'30px',md:'40px'}}}
            >
              <Avatar
                alt="Remy Sharp"
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                sx={{ width: { xs: "30px", md: "40px" }, height: { xs: "30px", md: "40px" } }}
              />
            </IconButton>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                width: "200px",
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                backgroundColor: "#393a3b",
                color: "#fafafa",
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem className="profile_Menu" onClick={handleClose}>
              <Avatar /> Profile
            </MenuItem>

            {/* <Divider /> */}
            <MenuItem className="profile_Menu" onClick={handleClose}>
              <PersonAdd fontSize="small" />
              Dashbord
            </MenuItem>
            <MenuItem className="profile_Menu" onClick={handleClose}>
              <Settings fontSize="small" />
              Settings
            </MenuItem>
            <MenuItem className="profile_Menu" onClick={handleClose}>
              <Logout fontSize="small" />
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </div>
    </Box>
  );
};

export default Header_Right_Profile_Section;
