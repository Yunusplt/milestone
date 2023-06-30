import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import {useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAuthCalls from "../hooks/useAuthCalls";
import { toastWarnNotify } from "../helper/ToastNotify";


// const pages = ["Dashboard", "New Blog", "About"];
// const settings = ["My Blogs", "Profile", "Logout"];
// const regLog=["Login", "Register"]

const pages = [
  {
    title:"Dashboard",
    url: "/"
  },
  {
    title:"New Blog",
    url: "blog/new-blog"
  },
  {
    title:"About",
    url: "/about"
  },
]

const settings = [
  {
    title:"My Blogs",
    url: "/my-blogs"
},
  {
    title:"Profile",
    url: "/profile"
},
  {
    title:"Logout",
    url: "/"
},
]

const regLogs = [
  {
    title: "Login",
    url: "/login"
  },
  {
    title: "Register",
    url: "/register"
  }
]

function Navbar() {
  const {currentUser} = useSelector((state)=>state.auth)
  const {logout} = useAuthCalls()
  const navigate = useNavigate()

  const handleClick =(a)=>{
    if (a.title==="Logout") {
      logout()
    }else{
      navigate(a.url)
    }
  }

  const handleClickPages =(page)=>{
      if (page.title==="New Blog" && !currentUser ) {
        navigate(page.url)
        toastWarnNotify("You must be logged in!")
      }else{
        handleCloseNavMenu()
        navigate(page.url)
      }
  }

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar sx={{ backgroundColor: "salmon" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography> */}
          <Box sx={{ display: { xs: "none", md: "flex", cursor:"pointer" } }}>
            <img
              src="https://cdn.pixabay.com/photo/2015/01/21/13/20/blog-606684_1280.png"
              width="100px"
              alt="Logo"
              onClick={()=>navigate("/")}
            />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Typography  onClick={()=>handleClickPages(page)} textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{ display: { xs: "flex", md: "none" }, flexGrow: 1, cursor:"pointer" }}
          >
            <img
              src="https://cdn.pixabay.com/photo/2015/01/21/13/20/blog-606684_1280.png"
              width="100px"
              alt="Logo"
              onClick={()=>navigate("/")}
            />
          </Box>
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography> */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                // onClick={()=>handleCloseNavMenu(navigate(page.url))}
                onClick={()=>handleClickPages(page)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {currentUser
                ? settings.map((setting) => (
                    <MenuItem key={setting.title} onClick={handleCloseUserMenu}>
                      <Typography
                        onClick={() =>handleClick(setting) }
                        textAlign="center"
                      >
                        {setting.title}
                      </Typography>
                    </MenuItem>
                  ))
                : regLogs.map((regLog) => (
                    <MenuItem key={regLog.title} onClick={handleCloseUserMenu}>
                      <Typography
                        onClick={() => navigate(regLog.url)}
                        textAlign="center"
                      >
                        {regLog.title}
                      </Typography>
                    </MenuItem>
                  ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
