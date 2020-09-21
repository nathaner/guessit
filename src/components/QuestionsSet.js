import React from "react";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Layout from "./Layout";
import { Link as RouterLink } from "react-router-dom";
import PageHeading from "./common/PageHeading";

const set = {
  _id: 1,
  title: "English basics",
  author: "Sarah",
  questions: [
    { question: "Who's the french president?", answer: "Emmanuel Macron" },
    { question: "How old is Queen Elizabeth II?", answer: "Emmanuel Macron" },
    {
      question: "What are the 4 nations composing the UK?",
      answer: "Emmanuel Macron",
    },
    {
      question: 'What\'s the difference between "here" and "there"?',
      answer: "Emmanuel Macron",
    },
    {
      question: 'What\'s the difference between "this" and "that"?',
      answer: "Emmanuel Macron",
    },
  ],
};

export default function QuestionsSet() {
  return (
    <Layout>
      <PageHeading></PageHeading>
      <Box my={2}>
        <Grid container alignItems="center" spacing={4}>
          <Grid item>
            <Typography variant="h2">Questions</Typography>
          </Grid>
          <Grid item>
            <Button
              component={RouterLink}
              to="/questions/new"
              variant="contained"
              color="primary"
            >
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
