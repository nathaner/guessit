import { Typography } from '@material-ui/core';
import React from 'react';

import Layout from './Layout';

export default function Register() {
  return (
    <Layout>
      <Typography variant="h2">Contact</Typography>
      <Typography>
        If you wish to get in touch with the creator of this app, feel free to
        fill in the form below!
      </Typography>
    </Layout>
  );
}
