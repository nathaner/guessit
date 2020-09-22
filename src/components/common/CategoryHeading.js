import React from "react";
import { Link as RouterLink } from "react-router-dom";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

export default function CategoryHeading({ children, newHref }) {
  return (
    <Box my={2}>
      <Grid container alignItems="center" spacing={4}>
        <Grid item>
          <Typography variant="h2">{children}</Typography>
        </Grid>
        <Grid item>
          <Button
            component={RouterLink}
            to={newHref}
            variant="contained"
            color="primary"
          >
            Create new
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
