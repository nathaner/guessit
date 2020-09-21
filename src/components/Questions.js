import React from "react";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
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
      <Typography variant="h2">Questions</Typography>
      <Grid container spacing={2}>
        {questions.map((question) => (
          <Grid item md={4} id={question._id}>
            <Card>
              <CardContent>
                <Typography variant="h3">{question.title}</Typography>
                <Typography color="textSecondary">{question.author}</Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained">Play</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}
