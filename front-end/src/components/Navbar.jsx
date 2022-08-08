import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";

import NavbarMobile from "./NavbarMobile";
import { Link } from "react-scroll";
const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "2",
    cursor: "pointer",
    width: "30px",
  },


  link: {
    color: "white",
    cursor: "pointer",
    fontSize: "0.73rem",
    textDecoration: "none",
    letterSpacing: "0.36rem",
    textAlign: "center",
    textTransform: "upperCase",

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
    <AppBar position="fixed">
      <CssBaseline />
      <Toolbar>
        <Link to="home" spy={true} smooth={true}>
          <img
            src="/images/logoJennifer.jpg"
            className={classes.logo}
            alt="Jennifer Sanchez"
            height="100%"
          />
        </Link>
        {isMobile ? (
          <NavbarMobile />
        ) : (
          <div className={classes.navlinks}>
            <Link to="home" spy={true} smooth={true} className={classes.link}>
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
