import React, { useState } from "react";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-scroll";

import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  icon: {
    color: "white",
  },
  navlinks: {
    display: "flex",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    textAlign: "center",

    "&:hover": {
      color: "#edbd59",
      borderBottom: "1px solid #edbd59",
    },
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
}));

function NavbarMobile() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <Link to="home" className={classes.link}>
              <ListItemText>Home</ListItemText>
            </Link>
          </ListItem>
          <Divider />

          <ListItem onClick={() => setOpenDrawer(false)}>
            <Link to="projects" className={classes.link}>
              <ListItemText>Projects</ListItemText>
            </Link>
          </ListItem>
          <Divider />

          <ListItem onClick={() => setOpenDrawer(false)}>
            <Link to="contact" className={classes.link}>
              <ListItemText>Contact</ListItemText>
            </Link>
          </ListItem>
          <Divider />
        </List>
      </Drawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        className={classes.icon}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default NavbarMobile;
