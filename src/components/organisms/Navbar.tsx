import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Wrapper from "../atoms/Wrapper";
import CustomAnchor from "../atoms/CustomAnchor";
import Logo from "../atoms/Logo";

const pages = ["Discover", "Platform", "About", "Documentation"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

interface ComponentTypes {
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
} 

const HeaderButton = ({ title, onClick, children }: ComponentTypes) : JSX.Element => {
  return (
    <>
      <Button
        sx={{
          color: "rgba(255,255,255,.8)",
          backgroundColor: "rgba(255,255,255,.2)",
          borderColor: "transparent",
          textTransform: "none",
          mx: 1.5,
          fontSize: 16,
          borderRadius: "12px",
          "&:hover": {
            color: "rgba(255,255,255,1)",
            backgroundColor: "rgba(255,255,255,.4)",
          },
        }}
        onClick={onClick}
        variant="outlined"
        title={title}
      >
        {children}
      </Button>
    </>
  );
};

export default function Navbar() {
  const [bgOpacity, setBgOpacity] = React.useState(0.3);
  const handleScroll = () => {
    const scrollY = Math.round(window.scrollY) / 100;
    if (scrollY >= 0.3 && scrollY <= 0.729) {
      setBgOpacity(scrollY);
    } else if (scrollY < 0.3) {
      setBgOpacity(0.3);
    } else if (scrollY > 0.729) {
      setBgOpacity(0.729);
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElSetting, setAnchorElSetting] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenSettingMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElSetting(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseSettingMenu = () => {
    setAnchorElSetting(null);
  };

  return (
    <AppBar
      sx={{
        ...styles.container,
        background: `rgba(42, 42, 42, ${bgOpacity})`,
        backdropFilter:
          bgOpacity > 0.45 ? "saturate(180%) blur(20px)" : undefined,
      }}
      position="fixed"
      elevation={0}
    >
      <Wrapper>
        <Toolbar disableGutters>
          {/* desktop view */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              width: "130px",
              height: "50px",
            }}
          >
            <Typography component="a" href="/">
              <Logo />
            </Typography>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              ml: "8vw",
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <CustomAnchor
                key={page}
                sx={{
                  my: 2,
                  px: 2,
                  fontSize: 16,
                }}
              >
                {page}
              </CustomAnchor>
            ))}
          </Box>
          {/* mobile view */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              width: "130px",
              flexGrow: 1,
            }}
          >
            <Typography component="a" href="/">
              <Logo />
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* Setting popup */}
          <Box sx={{ flexGrow: 0 }}>
            <HeaderButton
              title="Select Setting"
              onClick={handleOpenSettingMenu}
            >
              Settings
            </HeaderButton>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElSetting}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElSetting)}
              onClose={handleCloseSettingMenu}
              elevation={0}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseSettingMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Wrapper>
    </AppBar>
  );
}

const styles = {
  container: {
    transition: "all .3s ease-in",
    height: "70px",
    borderBottom: "1px solid #4c4c4c",
  },
};
