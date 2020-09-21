import React from "react";
import { Link as RouterLink } from "react-router-dom";

import Layout from "./Layout";

import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function NewQuestions() {
  return (
    <Layout>
      <Box my={2}>
        <Typography variant="h2">New questions set</Typography>
      </Box>

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
