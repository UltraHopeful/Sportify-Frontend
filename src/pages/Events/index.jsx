//Author: Aravind Jayanthi (B00868943)
//Email: ar687531@dal.ca
import { Container, Grid, Snackbar } from "@mui/material";
import EventItem from "../../components/EventItem";
import availableEvents from "../../data/Events";
import { useState } from "react";
import MuiAlert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import { useLocation } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';

const EventsList = () => {
    const originalList = availableEvents;

    const [displayList, setDisplayList] = useState(availableEvents);

    const { state } = useLocation();
    const [snackbarOpen, setSnackbarOpen] = useState({ open: (!!state?.snackbar), vertical: 'top', horizontal: 'right' });
    const { open, vertical, horizontal } = snackbarOpen;

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
        <Container maxWidth='xl'>
            <Grid sx={{ my: '10px' }} container spacing={2}>
                {displayList.map((event) => {
                    return (
                        <EventItem key={event.id} event={event}></EventItem>
                    );
                })}
            </Grid>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                autoHideDuration={3000}
                onClose={onCloseSnackbar}
                action={snackbarCloseAction}
            >
                <MuiAlert onClose={onCloseSnackbar} severity="success" sx={{ width: '100%' }} elevation={6} variant="filled">
                    Successfuly booked ticket(s) for the event!
                </MuiAlert>
            </Snackbar>
        </Container>
    );
}

export default EventsList;