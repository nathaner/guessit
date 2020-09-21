import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.footerBackground,
  },
  footer: {
    textAlign: "center",
    height: "5rem",
    marginTop: theme.spacing(4),
    alignItems: "center",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container maxWidth="sm" className={classes.container}>
        <Grid component="footer" container className={classes.footer}>
          <Grid item xs={4}>
            <Link className={classes.link} component={RouterLink} to="/">
              About
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Link className={classes.link} component={RouterLink} to="/">
              Source
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Link className={classes.link} component={RouterLink} to="/">
              Contact
            </Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
