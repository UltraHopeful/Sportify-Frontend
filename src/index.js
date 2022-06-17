import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';

import Home from "./pages/Home/index"
import ReservationList from "./pages/Reservations";
import userReservations from "./data/Data";
import LogIn from "./pages/LogIn/index"
import Pricing from './pages/Membership/pricing';
import Checkout from './pages/Membership/checkout';
import { ReservationDetails } from './pages/ReservationDetails';
import MembershipPlan from "./pages/Payment/membershipPlan";
import Products from "./pages/Merchandise/products";
import CreateBlog from './pages/Blogging/CreateBlog/CreateBlog';
import EditBlog from './pages/Blogging/EditBlog/EditBlog';
import BlogPost from './pages/Blogging/BlogPost/BlogPost';
import YourBlogs from './pages/Blogging/YourBlogs/YourBlogs';
import Facilities from './pages/Facilities';
import FacilityDetails from './pages/FacilityDetails';
import Blogs from './pages/Blogging/Blogs/Blogs';
import AfterPayment from './pages/Payment/afterPayment';
import EventsList from './pages/Events/index';
import { EventDetails } from './pages/EventDetails';
import MyEvents from './pages/MyEvents/MyEvents';
import MyEventDetails from './pages/MyEventDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));

// cite : https://reactrouter.com/docs/en/v6/components/routes
// I used some of the code for routing
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* todo add path only which needs header */}
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="store" element={<Products />} />
          <Route path='my-reservations' element={<ReservationList reservations={userReservations} />} />
          <Route path="resources" element={<Facilities />} />
          <Route path='resources/:resourceId' element={<FacilityDetails />} />
          <Route path='my-reservations/:reservationId' element={<ReservationDetails />} />
          <Route path="store" element={<Home />} />
          <Route path="membership" element={<Pricing />} />
          <Route path="membership/checkout" element={<Checkout />} />
          <Route path="events" element={<EventsList />} />
          <Route path="events/:eventId" element={<EventDetails />} />
          <Route path='my-events' element={<MyEvents />}/>
          <Route path='my-events/:bookingId' element={<MyEventDetails />}/>
          <Route path="rewards" element={<Home />} />
          <Route path="payment" element={<MembershipPlan />} />
          <Route path="afterpayment" element={<AfterPayment/>} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="createblog" element={<CreateBlog />} />
          <Route path="editblogs/:id" element={<EditBlog />} />
          <Route exact path="blogpost/:id" element={<BlogPost />} />
          <Route path="yourblogs" element={<YourBlogs />} />
        </Route>
        {/* todo add path only which doesn't need header */}
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
