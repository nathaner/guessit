import React, { Fragment } from "react";
import Home from "./components/Home";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { theme } from "./theme";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import Questions from "./components/Questions";
import NewQuestions from "./components/NewQuestions";
import Sentences from "./components/Sentences";
import NewSentences from "./components/NewSentences";
import Pairs from "./components/Pairs";
import NewPairs from "./components/NewPairs";
import Login from "./components/Login";
import Register from "./components/Register";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/questions/new" component={NewQuestions} />
          <Route path="/questions" component={Questions} />
          <Route path="/sentences/new" component={NewSentences} />
          <Route path="/sentences" component={Sentences} />
          <Route path="/pairs/new" component={NewPairs} />
          <Route path="/pairs" component={Questions} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
