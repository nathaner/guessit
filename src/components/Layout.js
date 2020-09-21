import { Container } from "@material-ui/core";
import React, { Fragment } from "react";
import Footer from "./Footer";

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
