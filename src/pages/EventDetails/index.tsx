//Author: Aravind Jayanthi (B00868943)
//Email: ar687531@dal.ca
import { Box, Button, Card, Divider, Grid, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DetailHeader, DetailRow } from "../ReservationDetails";
import '../FacilityDetails/FacilityDetails.css';
import availableEvents from "../../data/Events";
import { EventInterface } from "../../data/EventInterface";

const DetailDescription = (props: any) => {
    return (
        <Stack sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center' }} alignItems='center' direction='row' spacing={2}>
            <Typography sx={{ m: '20px', width: '100%', display: 'flex', justifyContent: 'center', fontSize: '15px' }} variant="h4">
                {props.content}
            </Typography>
        </Stack>
    );
}

interface ReservationForm {
    date?: Date | null,
    timeRange: string,
    selfBooking: boolean,
    fullName: string,
    age: number
}

interface EventBookingFormError {
    slots: {
        required: boolean,
        rangeError: boolean,
    }
}

const EventDetails = () => {
    const navigate = useNavigate();
    const [reservationDetails, setReservationDetails] = useState<ReservationForm>({
        date: null,
        timeRange: '',
        selfBooking: true,
        fullName: 'John Doe',
        age: 25
    });

    const [selectedSlots, setSelectedSlots] = useState<number|null>(1);

    const [reservationFormErrors, setReservationFormErrors] = useState<EventBookingFormError>({
        slots: {
            required: false,
            rangeError: false
        }
    });

    const onReservationDetailsChange = (event: any) => {
        setSelectedSlots(event.target.value);
        validateForm(event.target.value);
    }

    const validateForm = (selSlots: number | null) => {
        if (!selSlots) {
            setReservationFormErrors({
                slots: {
                    required: true,
                    rangeError: false,
                }
            });
            return false;
        }
       
        if (selSlots < 1 || selSlots > resource.available) {
            setReservationFormErrors({
                slots: {
                    required: false,
                    rangeError: true,
                }
            });
            return false;
        }

        setReservationFormErrors({
            slots: {
                required: false,
                rangeError: false
            }
        });
        return true;
    }

    let params = useParams();
    let resourceId: string = (!params.eventId) ? "1" : params.eventId;
    const resource: EventInterface = availableEvents.filter((event) => event.id === resourceId)[0];

    const onSubmitBooking = () => {
        if (!validateForm(selectedSlots)) {
            return;
        }
        else {
            navigate('/events', { state: { snackbar: true } })
        }
    }

    return (
        <Box sx={{ width: '100%', mt: '20px' }}>
            <Grid container rowSpacing={2} columnSpacing={2}>
                <Grid item xs={12} md={4} sm={6}>
                    <Card sx={{ margin: '20px', width: '90%', height: '90%', justifyContent: 'center' }} elevation={6}>
                        <img className='Image' src={`../${resource.image}`} alt="" />
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} sm={6}>
                    <Card sx={{ margin: '20px', width: '90%', height: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} elevation={6}>
                        <Stack sx={{ my: '30px' }} alignItems='center' spacing={2} divider={<Divider orientation="horizontal" variant="middle" flexItem />}>
                            <DetailHeader heading='Event Details' />
                            <DetailRow columnName='Event Name' columnData={resource.name} />
                            <DetailRow columnName='Event Date' columnData={resource.date.toDateString()} />
                            <DetailRow columnName='Event Location' columnData={resource.location} />
                            <DetailRow columnName='Event Capacity' columnData={resource.maxCapacity} />
                            <DetailRow columnName='Available slots' columnData={resource.available} />
                            <br />
                        </Stack>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} sm={6}>
                    <Card sx={{ margin: '20px', width: '90%', height: '90%' }} elevation={6}>
                        <Stack sx={{ my: '30px' }} alignItems='center' spacing={3}>
                            <DetailHeader heading='Event Description' />
                            <DetailDescription content={resource.description} />
                        </Stack>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} sm={6}>
                    <Card sx={{ margin: '20px', width: '90%', height: '90%' }} elevation={6}>
                        <Stack sx={{ mt: '30px', }} alignItems='center' spacing={3}>
                            <DetailHeader heading='Booking Details' />
                            {/* Full Name */}
                            <DetailRow columnName='Full Name' columnData='John Doe'/>
                            <DetailRow columnName='Age' columnData='25'/>
                        </Stack>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} sm={6} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Stack sx={{ mt: '30px', }} alignItems='center' spacing={3}>
                        <TextField
                            required
                            name='slots'
                            label="Total Participants"
                            type='number'
                            value={selectedSlots}
                            onChange={onReservationDetailsChange}
                            inputProps={{ min: 1, max: resource.available }}
                            helperText={reservationFormErrors.slots.required ? 'Please enter total participants!' : (reservationFormErrors.slots.rangeError ? `Total participants can't exceed available slots` : '')}
                            sx={{
                                '.MuiFormHelperText-root': {
                                    color: 'red'
                                }
                            }}
                        />
                        <Stack direction='row'>
                            <Button sx={{
                                color: '#000000',
                                backgroundColor: '#ffffff',
                                ':hover': {
                                    backgroundColor: '#000000',
                                    color: '#ffffff'
                                },
                                mr: '10px',
                                height: '36.5px',
                                mt: '20px'
                            }}
                                variant='contained'
                                onClick={() => { navigate('/events') }}
                            >
                                Back
                            </Button>
                            <Button sx={{
                                ml: '10px',
                                backgroundColor: '#326DD9',
                                color: '#ffffff',
                                ':hover': {
                                    backgroundColor: '#152D59'
                                },
                                height: '36.5px',
                                mt: '20px'
                            }}
                                onClick={onSubmitBooking}
                            >
                                Book Tickets
                            </Button>
                        </Stack>
                    </Stack>

                </Grid>
            </Grid>
        </Box>
    );
}

export {EventDetails, DetailDescription};