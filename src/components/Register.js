import React from "react";
import { Link as RouterLink } from "react-router-dom";

import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Layout from "./Layout";
import PageHeading from "./common/PageHeading";

export default function Register() {
  return (
    <Layout>
      <Container component="main" maxWidth="xs">
        <div>
          <PageHeading>Register</PageHeading>
          <form noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Full name"
              name="name"
              autoComplete="name"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button type="submit" fullWidth variant="contained" color="primary">
              Register
            </Button>
            <Box textAlign="right">
              <Link component={RouterLink} to="/login">
                Already have an account? Log in!
              </Link>
            </Box>
          </form>
        </div>
        <Box mt={8}></Box>
      </Container>
    </Layout>
  );
}
