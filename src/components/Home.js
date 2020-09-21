import React, { Fragment } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { theme } from "../theme";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { green, purple } from "@material-ui/core/colors";
import { palette } from "@material-ui/system";
import Footer from "./Footer";
import Logo from "./Logo";
import { Link as RouterLink } from "react-router-dom";

// import Nav from "./Nav";

const useStyles = makeStyles((theme) => ({
  moto: {
    boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
    color: "white",
    textAlign: "center",
    padding: theme.spacing(6, 0),
    backgroundColor: theme.palette.primary.main,
  },
  paper: {
    margin: theme.spacing(2, 0),
  },
  word: {
    margin: theme.spacing(1),
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <Fragment>
      <Logo />
      <Box className={classes.moto}>
        <Typography variant="h2">The new way to rehearse (for free)</Typography>
      </Box>
      <Container maxWidth="md">
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h2">Create questions</Typography>
          <Typography variant="h3">What are the 7 continents?</Typography>
          <Typography>
            Africa, America, Europe, Asia, Oceania, Antartica, South America
          </Typography>
          <Box>
            <Button
              component={RouterLink}
              to="/questions"
              variant="outlined"
              color="primary"
              className={classes.word}
            >
              Play
            </Button>
          </Box>
        </Paper>

        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h2">Reform sentences</Typography>
          <Button variant="contained" color="primary" className={classes.word}>
            doing?
          </Button>
          <Button variant="contained" color="primary" className={classes.word}>
            What
          </Button>
          <Button variant="contained" color="primary" className={classes.word}>
            you
          </Button>
          <Button variant="contained" color="primary" className={classes.word}>
            were
          </Button>
          <Box>
            <Button
              component={RouterLink}
              to="/sentences"
              variant="outlined"
              color="primary"
              className={classes.word}
            >
              Play
            </Button>
          </Box>
        </Paper>

        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h2">Match pairs</Typography>
          <Button variant="contained" color="primary" className={classes.word}>
            Fromage
          </Button>
          <Button variant="contained">Tomate</Button>
          <Button variant="contained" color="primary" className={classes.word}>
            Bicycle
          </Button>
          <Button variant="contained" color="primary" className={classes.word}>
            Cheese
          </Button>
          <Button variant="contained" color="primary" className={classes.word}>
            Vélo
          </Button>
          <Button variant="contained" color="primary" className={classes.word}>
            Tomate
          </Button>
          <Box>
            <Button
              component={RouterLink}
              to="/pairs"
              variant="outlined"
              color="primary"
              className={classes.word}
            >
              Play
            </Button>
          </Box>
        </Paper>
        <Box my={4}>
          <Typography variant="h2">
            Or create and customize your own sets!
          </Typography>
        </Box>
        <Grid container>
          <Grid item align="center" xs>
            <Button
              component={RouterLink}
              to="/login"
              variant="contained"
              color="primary"
            >
              Login
            </Button>
          </Grid>
          <Grid item align="center" xs>
            <Button
              component={RouterLink}
              to="/register"
              variant="outlined"
              color="primary"
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Fragment>
  );
}
