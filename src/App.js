import React, { Fragment } from "react";
import Home from "./components/Home";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { theme } from "./theme";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import Questions from "./components/Questions";

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/questions" component={Questions} />
          <Route path="/" component={Home} />
        </Switch>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
