import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import Header from "./Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Join from "./pages/Join";

const Root = () => (
    <Router>
        <>
            <Header/>
            <Switch>
                <Route path={"/"} exact component={Home}/>
                <Route path={"/login"} component={Login}/>
                <Route path={"/join"} component={Join}/>
                <Redirect to={"/"}/>
            </Switch>
        </>

    </Router>)


const App = () => {
    return (
        <div id="app">
            <div className="container">
                <Root/>
            </div>
        </div>
    );
}

export default App;
