import {Component} from "react";
import {Outlet} from 'react-router-dom';

import './App.css';
import Header from "./components/Header"
import Container from "@mui/material/Container";
import {ToastContainer} from "material-react-toastify";
import 'material-react-toastify/dist/ReactToastify.css';


class App extends Component {
    render() {
        // @ts-ignore
        return (
            <div className="App">
                <Header/>
                <Container maxWidth="xl" sx={{height:'100vh'}}>
                    <Outlet></Outlet>
                    <ToastContainer/>
                </Container>
            </div>
        );
    }
}

export default App;
