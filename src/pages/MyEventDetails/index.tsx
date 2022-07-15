//Author: Aravind Jayanthi (B00868943)
//Email: ar687531@dal.ca
import { useNavigate, useParams } from "react-router-dom";
import eventsRegistered from "../../data/MyEvents";
import { Box, Button, Card, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, Stack, Typography } from "@mui/material";
import { DetailHeader, DetailRow } from "../ReservationDetails";
import { useState } from "react";
import { MyEventInterface } from "../../data/MyEventInterface";
import { DetailDescription } from "../EventDetails";


export default function MyEventDetails () {
    const [cancelDialogOpen, setCancelDialogOpen] = useState(false);
    const navigate = useNavigate();
    const params = useParams();
    const bookingId = (!params.bookingId) ? "1" : params.bookingId;
    const details: MyEventInterface = eventsRegistered.filter((event) => {return (event.bookingId === bookingId)})[0];

    const closeDialog = () => {
        setCancelDialogOpen(false);
    }

    const onCancelReservation = () => {
        setCancelDialogOpen(true);
    }

    const cancelConfirmationSnackbar = () => {
        navigate('/my-events', {state: {snackbar: true}});
    }
    return (
        <div className="App">
            <Box sx={{ width: '100%', mt: '20px' }}>
                <Grid container rowSpacing={2} columnSpacing={2}>
                    {/* Image Grid */}
                    <Grid item xs={12} md={4} sm={6}>
                        <Card sx={{ margin: '20px', width: '90%', height: '90%', justifyContent: 'center' }} elevation={6}>
                            <img className='Image' src={`../${details.image}`} alt="" />
                        </Card>
                    </Grid>
                    {/* Primary Reservation Grid */}
                    <Grid item xs={12} md={4} sm={6}>
                        <Card sx={{ margin: '20px', width: '90%', height: '90%' }} elevation={6}>
                            <Stack sx={{ my: '30px' }} alignItems='center' spacing={2.5} divider={<Divider orientation="horizontal" variant="middle" flexItem />}>
                                <DetailHeader heading='Reservation Details' />
                                <DetailRow columnName='Reference ID' columnData={details.bookingId} />
                                <DetailRow columnName='Event Date' columnData={details.eventDate.toDateString()} />
                                <DetailRow columnName='Booked Date' columnData={details.bookingDate.toDateString()} />
                                <DetailRow columnName='Max. Capacity' columnData={details.capacity} />
                                <DetailRow columnName='Booked Tickets' columnData={details.bookedTickets} />
                                {/* <DetailRow columnName='Reservation For' columnData={details.reservedFor} /> */}
                            </Stack>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4} sm={6}>
                        <Card sx={{ margin: '20px', width: '90%', height: '90%' }} elevation={6}>
                            <Stack sx={{ my: '30px' }} alignItems='center' spacing={3} divider={<Divider orientation="horizontal" variant="middle" flexItem />}>
                                <DetailHeader heading='Event Descrption' />
                                <DetailDescription content={details.eventDescription}/>
                                {/* <DetailRow columnName="Property Name" columnData={details.equipmentName} />
                                <DetailRow columnName="Property Location" columnData={details.equipmentLoc} /> */}
                            </Stack>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={12} sm={6} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <Button sx={{
                            color: '#000000',
                            backgroundColor: '#ffffff',
                            ':hover': {
                                backgroundColor: '#000000',
                                color: '#ffffff'
                            },
                            mr: '10px',
                            height: '36.5px'
                        }}
                            variant='contained'
                            onClick={() => {
                                navigate("/my-events");
                            }}
                        >
                            Back
                        </Button>
                        <Button sx={{
                            ml: '10px',
                            backgroundColor: '#d9534f',
                            color: '#ffffff',
                            borderColor: '#d43f3a',
                            ':hover': {
                                backgroundColor: '#d43f3a'
                            },
                            height: '36.5px'
                        }}
                            onClick={onCancelReservation}
                        >
                            Cancel Reservation
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            <Dialog
                open={cancelDialogOpen}
                onClose={closeDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Cancel Confirmation"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure, want to cancel the reservation?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={cancelConfirmationSnackbar}>Yes</Button>
                    <Button variant="contained" onClick={closeDialog} autoFocus>
                        No
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}