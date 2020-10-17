import React, { Fragment, useEffect, useState } from "react";
import Home from "./components/Home";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import { theme } from "./theme";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import Questions from "./components/Questions";
import NewQuestions from "./components/NewQuestions";
import QuestionsSet from "./components/QuestionsSet";
import Sentences from "./components/Sentences";
import NewSentences from "./components/NewSentences";
import Pairs from "./components/Pairs";
import NewPairs from "./components/NewPairs";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Register from "./components/Register";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import EditQuestionsSet from "./components/EditQuestionsSet";
import SentencesSet from "./components/SentencesSet";
import ForgotPassword from "./components/ForgotPassword";
import Logout from "./components/Logout";
import auth from "./services/authService";

function App() {
    const [user, setUser] = useState({})

    useEffect(() => {
        setUser(auth.getCurrentUser());


    }, [])


    return (
        <Fragment>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <Switch>
                    <Route
                        path="/questions/edit/:id"
                        component={EditQuestionsSet}
                    />
                    <Route path="/questions/new" component={NewQuestions} />
                    <Route path="/questions/:id" component={QuestionsSet} />
                    <Route path="/questions" component={Questions} />
                    <Route path="/sentences/new" component={NewSentences} />
                    <Route path="/sentences/:id" component={SentencesSet} />
                    <Route path="/sentences" component={Sentences} />
                    <Route path="/pairs/new" component={NewPairs} />
                    <Route path="/pairs" component={Pairs} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/forgot-password" component={ForgotPassword} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/about" component={About} />
                    <Route path="/not-found" component={NotFound} />
                    <Route path="/" exact component={Home} />
                    <Redirect to="/not-found" />
                </Switch>
            </ThemeProvider>
        </Fragment>
    );
}

export default App;
