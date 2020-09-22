import React, { Fragment, useState } from "react";

import Layout from "./Layout";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import PageHeading from "./common/PageHeading";

export default function NewQuestions() {
  const [numberOfQuestions, setNumberOfQuestions] = useState(1);

  return (
    <Layout>
      <PageHeading>New questions set</PageHeading>
      <form noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              autoFocus
            />
          </Grid>

          {[...Array(numberOfQuestions).keys()].map((questionIndex) => (
            <Fragment key={questionIndex}>
              <Grid item xs={12} md={6}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required={questionIndex == 0}
                  fullWidth
                  name={`question${questionIndex + 1}`}
                  label={`Question ${questionIndex + 1}`}
                  id={`question${questionIndex + 1}`}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required={questionIndex == 0}
                  fullWidth
                  name={`answer${questionIndex + 1}`}
                  label={`Answer ${questionIndex + 1}`}
                  id={`answer${questionIndex + 1}`}
                />
              </Grid>
            </Fragment>
          ))}
        </Grid>
        <Box my={4}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setNumberOfQuestions(numberOfQuestions + 1)}
          >
            Add question
          </Button>
        </Box>
        <Box textAlign="center" my={2}>
          <Button type="submit" variant="contained" color="primary">
            Create
          </Button>
        </Box>
      </form>
    </Layout>
  );
}
