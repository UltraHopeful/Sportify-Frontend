import { Route, Routes } from "react-router-dom";
import { ReservationDetails } from "../components/ReservationDetails";
import ReservationList from "../components/reservations/ReservationList";
import userReservations from "../Data";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<ReservationList reservations={userReservations}/>}></Route>
            <Route path=":reservationId" element={<ReservationDetails />}> </Route>
        </Routes>
    );
}

export default AppRoutes;