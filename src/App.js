import React, {Component} from "react";
import {
    BrowserRouter, Routes, Route,
} from 'react-router-dom';

import './App.css';
import Header from "./components/Header"
import LogIn from "./pages/LogIn/index"
import Home from "./pages/Home/index"
// import {Button} from "@mui/material";

// cite : https://reactrouter.com/docs/en/v6/components/routes
// I used some of the code for routing

class App extends Component {
    render() {
        return (<div className="App">

            <BrowserRouter>
                <Routes>
                    // todo add path only which needs header
                    <Route element={<Header/>}>
                        <Route index element={<Home/>} />
                        <Route path="/resources" element={<Home/>} />
                        <Route path="/store" element={<Home/>} />
                        <Route path="/membership" element={<Home/>} />
                        <Route path="/events" element={<Home/>} />
                        <Route path="/rewards" element={<Home/>} />
                        <Route path="/blogs" element={<Home/>} />
                    </Route>
                    // todo add path only which doesn't need header
                    <Route path="/login" element={<LogIn/>} />
                </Routes>
            </BrowserRouter>
        </div>);
    }
}

export default App;
