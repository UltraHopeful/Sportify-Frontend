import {Component} from "react";
import { Outlet } from 'react-router-dom';

import './App.css';
import Header from "./components/Header"

class App extends Component {
    render() {
        return (<div className="App">
            <Header/>
            <Outlet></Outlet>
        </div>);
    }
}

export default App;
