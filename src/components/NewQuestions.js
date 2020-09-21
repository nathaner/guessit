import React from "react";

import Layout from "./Layout";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import PageHeading from "./common/PageHeading";

export default function NewQuestions() {
  return (
    <Layout>
      <PageHeading>New questions set</PageHeading>
      <form noValidate>
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
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="question1"
          label="Question 1"
          id="question1"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="answer1"
          label="Answer 1"
          id="answer1"
        />
        <Box textAlign="center" my={2}>
          <Button type="submit" variant="contained" color="primary">
            Create
          </Button>
        </Box>
      </form>
    </Layout>
  );
}
