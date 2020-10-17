import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Edit from '@material-ui/icons/Edit';

import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';
import { getQuestionsSetsFromAuthor } from '../services/questionsSetsService';
import { getSentencesSetsFromAuthor } from '../services/sentencesSetsService';

export default function Profile() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [questionsSets, setQuestionsSets] = useState([]);
  const [sentencesSets, setSentencesSet] = useState([]);
  const [pairsSets, setPairsSets] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await setSentencesSet(getSentencesSetsFromAuthor('Sarah'));
      await setQuestionsSets(getQuestionsSetsFromAuthor('Sarah'));
      setIsLoaded(true);
    }

    fetchData();
  });

  if (!isLoaded)
    return (
      <Layout>
        <Typography variant="h2">Profile</Typography>
        Loading
      </Layout>
    );

  return (
    <Layout>
      <Typography variant="h2">Profile</Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div>Full name</div>
          <input value="Nathan Riviere" disabled type="text" />
          <Edit />
        </Grid>
        <Grid item xs={12} md={6}>
          <div>Email</div>
          <input value="n.e.riviere@gmail.com" disabled type="text" />
          <Edit />
        </Grid>
        <Grid item xs={12} md={6}>
          <div>Password</div>
          <input value="********" disabled type="text" />
          <Edit />
        </Grid>
      </Grid>

      <Typography variant="h2">Sets</Typography>

      <Typography variant="h3">Questions</Typography>

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {questionsSets.map((set) => (
              <TableRow key={set._id}>
                <TableCell component="th" scope="row">
                  {set.title}
                </TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h3">Sentences</Typography>
      <Typography variant="h3">Pairs</Typography>
    </Layout>
  );
}
