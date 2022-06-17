import { Box, FormControl, MenuItem, Pagination, Select, Snackbar } from "@mui/material";
import { useState } from "react";
import '../../App.css';
import '../Reservations/Reservations.css';
import ReservationItem from "../Reservations/ReservationItem";
import { useLocation } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert from '@mui/material/Alert';
import eventsRegistered from "../../data/MyEvents";
import EventItem from "./EventItem";

export default function MyEvents () {
    const [page, setPage] = useState(1);

    const [list, setList] = useState(eventsRegistered.slice(0, 5));

    const itemsPerPage = 5;

    const [defaultItemsPerPage, setDetaultItemsPerPage] = useState(itemsPerPage);

    const [totalPages, setTotalPages] = useState(Math.ceil(eventsRegistered.length / defaultItemsPerPage));

    const { state } = useLocation();

    const [snackbarOpen, setSnackbarOpen] = useState({ open: (!!state?.snackbar), vertical: 'top', horizontal: 'right' });

    const { open, vertical, horizontal } = snackbarOpen;

    const maxPagesMd = 5;

    const maxPagesSm = 3;

    const maxPagesXs = -1;

    const updateDefaulItemsPerPage = (event) => {
        const itemsPerPageTemp = (+event.target.value);
        const totalPagesTemp = Math.ceil(eventsRegistered.length / itemsPerPageTemp);
        console.log('Update total pages: ' + totalPagesTemp);
        setDetaultItemsPerPage((+event.target.value));
        updatePagination(1, itemsPerPageTemp);
        setTotalPages(totalPagesTemp);
    }

    const updatePageList = (pageNumber, itemsPerPage) => {
        const start = (pageNumber - 1) * itemsPerPage;
        const end = (pageNumber) * itemsPerPage;
        setList(eventsRegistered.slice(start, end));
    }

    const updatePagination = (pageNumber, itemsPerPage) => {
        updatePageList(pageNumber, itemsPerPage);
        setPage(pageNumber);
    }

    const onPaginationChange = (event, value) => {
        updatePagination(value, defaultItemsPerPage);
    }

    const reservationList = list.map((reservation) => {
        return (<EventItem key={reservation.bookingId} reservationDetails={reservation}></EventItem>);
    });

    const onCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen({ ...snackbarOpen, open: false });
    }

    const snackbarCloseAction = (<IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={onCloseSnackbar}
    >
        <CloseIcon fontSize="small" />
    </IconButton>);

    return (
        <div>
            <Box sx={{ margin: '10px 15%', display: { md: 'flex', xs: 'none', sm: 'none' }, flexDirection: 'column' }}>
                {reservationList}
            </Box>
            <Box sx={{ margin: '10px 5%', display: { xs: 'none', sm: 'flex', md: 'none' }, flexDirection: 'column' }}>
                {reservationList}
            </Box>
            <Box sx={{ margin: '10px 0%', display: { xs: 'flex', sm: 'none', md: 'none' }, flexDirection: 'column' }}>
                {reservationList}
            </Box>
            <div className="Footer">
                {totalPages > 1 &&
                    (<div className="Pagination">

                        <Pagination sx={{
                            my: "15px",
                            display: { md: 'flex', sm: 'none', xs: 'none' },
                            justifyContent: 'center',
                        }}
                            count={totalPages}
                            siblingCount={Math.min(totalPages, maxPagesMd)}
                            page={page}
                            onChange={onPaginationChange}
                        />
                        <Pagination sx={{
                            my: "15px",
                            display: { md: 'none', sm: 'flex', xs: 'none' },
                            justifyContent: 'center'
                        }}
                            count={totalPages}
                            siblingCount={Math.min(totalPages, maxPagesSm)}
                            page={page}
                            onChange={onPaginationChange}
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
                            onChange={onPaginationChange}
                            showLastButton={false}
                        />
                    </div>)
                }
                <div className="Select-items">
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            value={defaultItemsPerPage}
                            onChange={updateDefaulItemsPerPage}
                        >
                            <MenuItem value={5}>5 per page</MenuItem>
                            <MenuItem value={10}>10 per page</MenuItem>
                            <MenuItem value={20}>20 per page</MenuItem>
                            <MenuItem value={30}>30 per page</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                autoHideDuration={3000}
                onClose={onCloseSnackbar}
                action={snackbarCloseAction}
            >
                <MuiAlert onClose={onCloseSnackbar} severity="success" sx={{ width: '100%' }} elevation={6} variant="filled">
                    Successfuly cancelled your reservation.
                </MuiAlert>
            </Snackbar>
        </div>
    );
}