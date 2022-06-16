import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes,} from 'react-router-dom';

import Home from "./pages/Home/index"
import ReservationList from "./pages/Reservations";
import userReservations from "./data/Data";
import LogIn from "./pages/LogIn/index"
import Signup from "./pages/Signup/index"
import Profile from "./pages/Profile/index"
import Pricing from './pages/Membership/pricing';
import Checkout from './pages/Membership/checkout';
import {ReservationDetails} from './pages/ReservationDetails';
import CreateBlog from './pages/Blogging/CreateBlog/CreateBlog';
import EditBlog from './pages/Blogging/EditBlog/EditBlog';
import BlogPost from './pages/Blogging/BlogPost/BlogPost';
import ChangePassword from "./pages/ChangePassword/index";
import ForgotPassword from "./pages/ForgotPassword/index";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {ToastContainer} from "material-react-toastify";
import 'material-react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
    typography: {
        fontFamily: [
            'Montserrat',
            'sans-serif',
        ].join(','),
    },
    palette: {
        primary: {main:'#326dd9'},
    },
});

// cite : https://reactrouter.com/docs/en/v6/components/routes
// I used some of the code for routing
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    {/* todo add path only which needs header */}
                    <Route path="/" element={<App/>}>
                        <Route index element={<Home/>}/>
                        <Route path="resources" element={<ReservationList reservations={userReservations}/>}/>
                        <Route path='resources/:reservationId' element={<ReservationDetails/>}/>
                        <Route path="store" element={<Home/>}/>
                        <Route path="membership" element={<Pricing/>}/>
                        <Route path="membership/checkout" element={<Checkout/>}/>
                        <Route path="events" element={<Home/>}/>
                        <Route path="rewards" element={<Home/>}/>
                        <Route path="blogs" element={<Home/>}/>
                        <Route path="createblog" element={<CreateBlog/>}/>
                        <Route path="editblogs" element={<EditBlog/>}/>
                        <Route path="blogpost" element={<BlogPost/>}/>
                        <Route path="my-account" element={<Profile/>}/>
                    </Route>
                    {/* todo add path only which doesn't need header */}
                    <Route path="/login" element={<LogIn/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="forgot-password" element={<ForgotPassword/>}/>
                    <Route path="change-password" element={<ChangePassword/>}/>
                </Routes>
                <ToastContainer/>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
