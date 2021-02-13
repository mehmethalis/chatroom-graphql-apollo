import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import SessionWrapperHOC from "./SessionWrapperHOC";

import Header from "./Header";
import Home from "./pages/home/Home";
import Login from "./pages/Login";
import Join from "./pages/Join";
import Profile from "./pages/Profile";

const Root = ({refetch,session}:any) => (
    <Router>
        <>
            <Header session={session}/>
            <Switch>
                <Route path={"/"} exact render={()=><Home  session={session}/>} />
                <Route path={"/login"} render={()=><Login refetch={refetch}/>}/>
                <Route path={"/join"} render={()=><Join  refetch={refetch}/>}/>
                <Route path={"/profile"} render={()=><Profile  session={session}/>}/>
                <Redirect to={"/"}/>
            </Switch>
        </>

    </Router>)

const RootWithSessionWrapper =SessionWrapperHOC(Root);

const App = () => {
    return (
        <div id="app">
            <div className="container">
                <RootWithSessionWrapper/>
            </div>
        </div>
    );
}

export default App;
