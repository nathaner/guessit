import React from "react";

import Grid from "@material-ui/core/Grid";
import { Link as MuiLink } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";

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
    <div class={classes.wrapper}>
      <Container maxWidth="sm" className={classes.container}>
        <Grid component="footer" container className={classes.footer}>
          <Grid item xs={4}>
            <Link>
              <MuiLink classes={classes.link}>About</MuiLink>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Link>
              <MuiLink classes={classes.link}>Source</MuiLink>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Link>
              <MuiLink classes={classes.link}>Contact</MuiLink>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
