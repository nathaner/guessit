import { Container } from "@material-ui/core";
import React, { Fragment } from "react";
import Footer from "./Footer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export default function Layout({ children }) {
  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">News</Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="md">
        {children}
      </Container>
      <Footer />
    </Fragment>
  );
}
