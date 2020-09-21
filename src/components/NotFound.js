import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import PageHeading from "./common/PageHeading";
import Layout from "./Layout";

export default function NotFound() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item>
          <PageHeading>Page not found</PageHeading>
        </Grid>
        <Grid item>
          <Typography>
            We're sorry but the page you're requesting doesn't exist.
          </Typography>
        </Grid>
        <Grid item>
          <Button
            component={RouterLink}
            to="/"
            variant="contained"
            color="primary"
          >
            Go to home page
          </Button>
        </Grid>
      </Grid>
    </Layout>
  );
}
