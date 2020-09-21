import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PageHeading from "./common/PageHeading";
import Layout from "./Layout";

export default function NotFound() {
  return (
    <Layout>
      <PageHeading>Page not found</PageHeading>
      <Typography>
        We're sorry but the page you're requesting doesn't exist.
      </Typography>
      <Button component={RouterLink} to="/" variant="contained" color="primary">
        Go to home page
      </Button>
    </Layout>
  );
}
