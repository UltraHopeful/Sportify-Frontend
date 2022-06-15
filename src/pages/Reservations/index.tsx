import { Box, Pagination } from "@mui/material";
import { useState } from "react";
import { ReservationInterface } from "../../data/ReservationInterface";
import ReservationItem from "./ReservationItem";
import '../../App.css';

const ReservationList = (props: any) => {

    const [page, setPage] = useState(1);

    const [list, setList] = useState(props.reservations.slice(0, 5));

    const itemsPerPage: number = 5;

    const totalPages: number = Math.ceil(props.reservations.length / 5);

    const maxPagesMd = 5;

    const maxPagesSm = 3;

    const maxPagesXs = -1;

    const updatePageList = (pageNumber: number) => {
        const start: number = (pageNumber - 1) * itemsPerPage;
        const end: number = (pageNumber) * itemsPerPage;
        setList(props.reservations.slice(start, end));
    }

    const paginationUpdate = (event: React.ChangeEvent<unknown>, value: number) => {
        updatePageList(value);
        setPage(value);
    }

    const reservationList = list.map((reservation: ReservationInterface) => {
        return (<ReservationItem key={reservation.id} reservationDetails={reservation}></ReservationItem>);
    });
    
    return (
        <div className="App">
            <Box sx={{margin: '10px 15%', display: {md: 'flex', xs: 'none', sm: 'none'}, flexDirection: 'column'}}>
                {reservationList}
            </Box>
            <Box sx={{margin: '10px 5%', display: {xs: 'none', sm:'flex', md: 'none'}, flexDirection: 'column'}}>
                {reservationList}
            </Box>
            <Box sx={{margin: '10px 0%', display: {xs: 'flex', sm:'none', md: 'none'}, flexDirection: 'column'}}>
                {reservationList}
            </Box>
            <div className="List-container">
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
            </div>
        </div>
    );
}

export default ReservationList;