import React, { Fragment } from "react";
import Home from "./components/Home";
import Questions from "./components/Questions";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { theme } from "./theme";
import { CssBaseline, ThemeProvider } from "@material-ui/core";

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/questions" component={Questions} />
        </Switch>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
