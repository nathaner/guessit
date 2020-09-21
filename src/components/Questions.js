import React from "react";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Layout from "./Layout";

const questions = [
  { _id: 1, title: "English basics", author: "Sarah" },
  { _id: 2, title: "Verbs", author: "Sarah" },
  { _id: 3, title: "Animals", author: "Didier" },
  { _id: 4, title: "Computers", author: "Sarah" },
  { _id: 5, title: "Social networks", author: "Nathan" },
  { _id: 6, title: "School", author: "Mathilde" },
  { _id: 7, title: "Food", author: "Sarah" },
];

export default function Questions() {
  return (
    <Layout>
      <Box my={2}>
        <Grid container alignItems="center" spacing={4}>
          <Grid item>
            <Typography variant="h2">Questions</Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary">
              Create new
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Grid container spacing={2}>
        {questions.map((question) => (
          <Grid xs={12} item sm={4} id={question._id}>
            <Card>
              <CardContent>
                <Typography variant="h3">{question.title}</Typography>
                <Typography color="textSecondary">{question.author}</Typography>
              </CardContent>
              <CardActions>
                <Button variant="outlined" color="primary">
                  Play
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}
