import { Container } from "@material-ui/core";
import React, { Fragment } from "react";
import Footer from "./Footer";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import AppBar from "./AppBar";

export default function Layout({ children }) {
  return (
    <Fragment>
      <AppBar />
      <Container component="main" maxWidth="md">
        {children}
      </Container>
      <Footer />
    </Fragment>
  );
}
