import React, { useState } from 'react';
import { Pagination } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar';
import Reservation from './components/Reservation';
import { ReservationInterface } from './ReservationInterface';
import { ReservationDetails } from './components/ReservationDetails';
import userReservations from './Data';
import { Outlet } from 'react-router-dom';

// const primaryThemeColor: string = '#ff8a80';

function App() {

  const [page, setPage] = useState(1);

  const [list, setList] = useState(userReservations.slice(0, 5));

  const [details, setDetails] = useState<ReservationInterface | null>(null);

  const itemsPerPage: number = 5;

  const totalPages: number = Math.ceil(userReservations.length / 5);

  const maxPagesMd = 5;

  const maxPagesSm = 3;

  const maxPagesXs = -1;

  const updatePageList = (pageNumber: number) => {
    const start: number = (pageNumber - 1) * itemsPerPage;
    const end: number = (pageNumber) * itemsPerPage;
    setList(userReservations.slice(start, end));
  }

  const paginationUpdate = (event: React.ChangeEvent<unknown>, value: number) => {
    updatePageList(value);
    setPage(value);
  }

  function showDetails(id: number) {
    setDetails(userReservations.filter(res => res.id === id)[0]);
  }

  const showList = () => {
    setDetails(null);
  }

  const reservations = list.map((reservation) => {
    return (<Reservation key={reservation.id} reservationDetails={reservation} showDetails={showDetails}></Reservation>);
  });

  return (
    <div>
      <Outlet/>
      {/* {(details != null) ? (
        <>
          <ReservationDetails details={details} onBack={showList}></ReservationDetails>
        </>
      ) : (
        <div className='List-container'>
          {reservations}
          <Pagination sx={{
            my: "15px",
            display: { md: 'flex', sm: 'none', xs: 'none' },
            justifyContent: 'center',
          }}
            count={totalPages}
            siblingCount={Math.min(totalPages, maxPagesMd)}
            page={page}
            onChange={paginationUpdate}
          />
          <Pagination sx={{
            my: "15px",
            display: { md: 'none', sm: 'flex', xs: 'none' },
            justifyContent: 'center'
          }}
            count={totalPages}
            siblingCount={Math.min(totalPages, maxPagesSm)}
            page={page}
            onChange={paginationUpdate}
          />
          <Pagination sx={{
            my: "15px",
            display: { md: 'none', xs: 'flex', sm: 'none' },
            justifyContent: 'center'
          }}
            count={totalPages}
            siblingCount={Math.min(totalPages, maxPagesXs)}
            boundaryCount={0}
            page={page}
            onChange={paginationUpdate}
            showLastButton={false}
          />
        </div>)} */}
    </div>
  );
}

export default App;
