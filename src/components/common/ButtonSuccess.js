import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  btnSuccess: {
    backgroundColor: theme.palette.success.main,
    color: "white",
  },
}));
export default function ButtonSuccess({ children, className, ...other }) {
  const classes = useStyles();

  return (
    <Button className={clsx(classes.btnSuccess, className)} {...other}>
      {children}
    </Button>
  );
}
