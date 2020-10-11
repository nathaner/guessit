import React from 'react';
import Layout from './Layout';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Edit from '@material-ui/icons/Edit';

export default function Profile() {
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
      <Grid container spacing={2}></Grid>
    </Layout>
  );
}
