import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
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
    flexGrow: "1",
    cursor: "pointer",
  },
 
  link: {
    color: "white",
    fontSize: "0.73rem",
    textDecoration: "none",
    letterSpacing: "0.26rem",
    textAlign: "center",

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
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          JS
        </Typography>
        {isMobile ? (
          <NavbarMobile />
        ) : (
          <div className={classes.navlinks}>
            <Link
              to="/"
              spy={true}
              smooth={true}
              className={classes.link}
            >
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
