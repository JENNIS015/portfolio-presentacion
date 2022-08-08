import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery
} from "@material-ui/core";
 
import NavbarMobile from "./NavbarMobile";
import { Link } from "react-scroll";
const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    width:"30px"
  },
 
  link: {
    color: "white",
    fontSize: "0.73rem",
    textDecoration: "none",
    letterSpacing: "0.36rem",
    textAlign: "center",
    textTransform:"upperCase",

    "&:hover": {
      color: "#dfb55e",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar  position="fixed">
  
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          <img
            src="/images/logoJennifer.jpg"
            className={classes.logo}
            alt="Jennifer Sanchez"
          />
        </Typography>
        {isMobile ? (
          <NavbarMobile />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" spy={true} smooth={true} className={classes.link}>
              Home
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              className={classes.link}
            >
              Projects
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              className={classes.link}
            >
              Contact
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
  
}
export default Navbar;
