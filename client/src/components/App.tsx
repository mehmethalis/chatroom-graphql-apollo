import React from 'react';
import Header from "./Header";
import Home from "./pages/Home";

function App() {
    return (
        <div id="app">
            <div className="container">
                <Header/>
                <Home/>
            </div>
        </div>
    );
}

export default App;
