import { Box } from "@material-ui/core";
import React from "react";

export default function Logo() {
  return (
    <Box align="center" my={3}>
      <img src="logo.svg" alt="Guessit logo" />
    </Box>
  );
}
