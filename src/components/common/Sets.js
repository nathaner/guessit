import React from 'react';
import Set from './Set';
import Grid from '@material-ui/core/Grid';
export default function Sets({ data }) {
  return (
    <Grid container spacing={2}>
      {data.map((element) => (
        <Grid xs={12} item sm={4} key={element._id}>
          <Set
            _id={element._id}
            title={element.title}
            author={element.author}
            link={element.href}
          />
        </Grid>
      ))}
    </Grid>
  );
}
