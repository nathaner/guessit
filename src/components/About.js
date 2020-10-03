import { Typography } from '@material-ui/core';
import React from 'react';

import Layout from './Layout';

export default function About() {
  return (
    <Layout>
      <Typography variant="h2">About</Typography>
      <Typography>
        This app is a personal project I (Nathan Riviere) did to develop my
        knowledge of React and Node.js. It also helps people to have a way to
        rehearse using an app with a friendly UI instead of writing any card on
        sheets of paper.
      </Typography>
    </Layout>
  );
}
