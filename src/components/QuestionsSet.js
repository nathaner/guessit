import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import Layout from "./Layout";
import { Link as RouterLink } from "react-router-dom";
import PageHeading from "./common/PageHeading";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  btnSuccess: {
    backgroundColor: theme.palette.success.main,
  },
  btnError: {
    backgroundColor: theme.palette.error.main,
  },
}));

const set = {
  _id: 1,
  title: "English basics",
  author: "Sarah",
  questions: [
    { question: "Who's the french president?", answer: "Emmanuel Macron." },
    { question: "How old is Queen Elizabeth II?", answer: "94 years old." },
    {
      question: "What are the 4 nations composing the UK?",
      answer: "England, Wales, Scotland and Northern Ireland.",
    },
    {
      question: 'What\'s the difference between "here" and "there"?',
      answer:
        "Here refers to where the speaker is whereas there refers to a the place where the listener or another person is.",
    },
    {
      question: 'What\'s the difference between "this" and "that"?',
      answer:
        "This refers to someone/something near in place/time and that is used to point out something.",
    },
  ],
};

function SkipButton({ ...rest }) {
  return (
    <Button variant="outlined" color="primary" {...rest}>
      Skip
    </Button>
  );
}

function CorrectWrongButtons({ onCorrect, onWrong }) {
  const classes = useStyles();
  return (
    <ButtonGroup
      variant="contained"
      color="primary"
      aria-label="contained primary button group"
    >
      <Button className={classes.btnSuccess} onClick={() => onCorrect()}>
        Correct
      </Button>
      <Button className={classes.btnError} onClick={() => onWrong()}>
        Wrong
      </Button>
    </ButtonGroup>
  );
}

function LastPage({ score, maxScore }) {
  return (
    <>
      <Box mt={2}>
        <Typography>You've finished this set, congrats!</Typography>
      </Box>
      <Box my={2} align="center">
        <Chip
          label={`Score: ${score}/${maxScore}`}
          color="secondary"
          variant="outlined"
        />
      </Box>
      <Box align="center">
        <Button
          component={RouterLink}
          to="/questions"
          variant="contained"
          color="primary"
        >
          Go back to Questions Sets
        </Button>
      </Box>
    </>
  );
}

export default function QuestionsSet() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
    setShowAnswer(false);
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const handleCorrect = () => {
    setScore(score + 1);
    handleNext();
  };
  const handleWrong = () => {
    if (score > 0) setScore(score - 1);
    handleNext();
  };

  if (currentQuestion > set.questions.length)
    return (
      <Layout>
        <PageHeading>{set.title}</PageHeading>
        <LastPage score={score} maxScore={set.questions.length} />
      </Layout>
    );

  return (
    <Layout>
      <Box mt={2}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography variant="h2">{`${set.title} (${currentQuestion}/${set.questions.length})`}</Typography>
          </Grid>
          <Grid item>
            <Chip
              label={`Score: ${score}/${set.questions.length}`}
              color="secondary"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Box>

      <Box my={3}>
        <Typography>{set.questions[currentQuestion - 1].question}</Typography>
      </Box>
      <Box my={3} align="center">
        {showAnswer ? (
          <Typography>{set.questions[currentQuestion - 1].answer}</Typography>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleShowAnswer()}
          >
            Show answer
          </Button>
        )}
      </Box>
      <Box my={3} align="center">
        {showAnswer ? (
          <CorrectWrongButtons
            onCorrect={handleCorrect}
            onWrong={handleWrong}
          />
        ) : (
          <SkipButton onClick={() => handleNext()} />
        )}
      </Box>
    </Layout>
  );
}
