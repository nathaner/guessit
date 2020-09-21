import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  heading: {
    marginTop: theme.spacing(2),
  },
}));

export default function PageHeading({ children, ...rest }) {
  const classes = useStyles();

  return (
    <Typography component="h1" variant="h5" className={classes.heading}>
      {children}
    </Typography>
  );
}
