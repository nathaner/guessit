import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Layout from "./Layout";

export default function Questions() {
  return (
    <Layout>
      <Typography variant="h2">Questions</Typography>
      <Grid container>
        <Grid item md={3}>
          <Card>
            <CardContent>
              <Typography variant="h3">English basics</Typography>
              <Typography color="textSecondary">Sarah</Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained">Play</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}
