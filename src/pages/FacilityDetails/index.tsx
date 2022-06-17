import { Box, Button, Card, Checkbox, Divider, FormControlLabel, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { availabilitySlots, clubFacilities } from "../../data/FacilitiesData";
import { FacilitiesInterface } from "../../data/FacilitiesInterfac";
import { DetailHeader, DetailRow, ReservationDetails } from "../ReservationDetails";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import './FacilityDetails.css';
import FormControl from '@mui/material/FormControl';
// import { AvailabilitySlots } from "../../data/AvailaibilitySlots";

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

interface ReservationFormError {
    date: boolean,
    timeRange: boolean,
    fullName: boolean,
    age: {
        required: boolean,
        rangeError: boolean,
    }
}

const FacilityDetails = () => {
    const navigate = useNavigate();
    const [reservationDetails, setReservationDetails] = useState<ReservationForm>({
        date: null,
        timeRange: '',
        selfBooking: true,
        fullName: 'John Doe',
        age: 25
    });

    const [reservationFormErrors, setReservationFormErrors] = useState<ReservationFormError>({
        fullName: false,
        date: false,
        timeRange: false,
        age: {
            required: false,
            rangeError: false
        }
    });

    const onReservationDetailsChange = (event: any) => {
        const reservationDetailsTemp = {
            ...reservationDetails,
            [event.target.name]: event.target.value,
        };
        setReservationDetails(reservationDetailsTemp);
        validateForm(reservationDetailsTemp);
    }

    const validateForm = (formDetails: ReservationForm) => {
        if (formDetails.date === null) {
            setReservationFormErrors({
                ...reservationFormErrors,
                date: true,
            });
            return false;
        }
        if (formDetails.timeRange === '') {
            setReservationFormErrors({
                ...reservationFormErrors,
                date: false,
                timeRange: true,
            });
            return false;
        }
        if (formDetails.fullName === '') {
            setReservationFormErrors({
                ...reservationFormErrors,
                date: false,
                timeRange: false,
                fullName: true,
            });
            return false;
        }
        if (!formDetails || !formDetails.age) {
            setReservationFormErrors({
                ...reservationFormErrors,
                date: false,
                timeRange: false,
                fullName: false,
                age: {
                    required: true,
                    rangeError: false,
                }
            });
            return false;
        }
        else if (formDetails.age < 18 || formDetails.age > 70) {
            setReservationFormErrors({
                ...reservationFormErrors,
                date: false,
                timeRange: false,
                fullName: false,
                age: {
                    required: false,
                    rangeError: true,
                }
            });
            return false;
        }

        setReservationFormErrors({
            fullName: false,
            date: false,
            timeRange: false,
            age: {
                required: false,
                rangeError: false
            }
        });
        return true;
    }

    let minDate = new Date();
    minDate.setDate(minDate.getDate() + 1);
    let maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 7);
    let params = useParams();
    let resourceId: string = (!params.resourceId) ? "1" : params.resourceId;
    const resource: FacilitiesInterface = clubFacilities.filter((facility) => facility.id === resourceId)[0];

    const availabilityMenuItems = (availabilitySlots.map((availabilitySlot) => {
        return (
            <MenuItem key={availabilitySlot.id} value={availabilitySlot.id}>{availabilitySlot.displayValue}</MenuItem>
        );
    }));

    const onDateChange = (updatedDate: Date | null) => {
        const reservationDetailsTemp = {
            ...reservationDetails,
            date: updatedDate,
            timeRange: ''
        };
        setReservationDetails(reservationDetailsTemp);
        validateForm(reservationDetailsTemp);
    }

    const onTimeslotChange = (event: SelectChangeEvent) => {
        const reservationDetailsTemp = {
            ...reservationDetails,
            timeRange: event.target.value,
        };
        setReservationDetails(reservationDetailsTemp);
        validateForm(reservationDetailsTemp);
    }

    const onSelfBookingCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let reservationDetailsTemp = {
            ...reservationDetails,
            selfBooking: event.target.checked,
        };
        if (event.target.checked) {
            reservationDetailsTemp = {
                ...reservationDetailsTemp,
                fullName: 'John Doe',
                age: 25,
            }
        }
        setReservationDetails(reservationDetailsTemp);
        validateForm(reservationDetailsTemp);
    }

    const onSubmitBooking = () => {
        if(!validateForm(reservationDetails)) {
            return;
        }
        else {
            navigate('/facility', {state: {snackbar: true}})
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
                        <Stack sx={{ my: '30px' }} alignItems='center' spacing={3} divider={<Divider orientation="horizontal" variant="middle" flexItem />}>
                            <DetailHeader heading='Facility Details' />
                            <DetailRow columnName='Facility Name' columnData={resource.name} />
                            <DetailRow columnName='Facility Category' columnData={resource.category} />
                            <DetailRow columnName='Facility Location' columnData={resource.location} />
                            <DetailRow columnName='Facility Status' columnData={'Active'} />
                            <br />
                        </Stack>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} sm={6}>
                    <Card sx={{ margin: '20px', width: '90%', height: '90%' }} elevation={6}>
                        <Stack sx={{ my: '30px' }} alignItems='center' spacing={3}>
                            <DetailHeader heading='Facility Description' />
                            <DetailDescription content={resource.description} />
                        </Stack>
                    </Card>
                </Grid>
                {/* Date and timeslot grid */}
                <Grid item xs={12} md={4} sm={6}>
                    <Card sx={{ margin: '20px', width: '90%', height: '90%' }} elevation={6}>
                        <Stack sx={{ mt: '30px', }} alignItems='center' spacing={3}>
                            <DetailHeader heading='For Booking' />
                            {/* Date Picker */}
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="Choose Date"
                                    value={reservationDetails.date}
                                    minDate={minDate}
                                    maxDate={maxDate}
                                    onChange={(newValue) => {
                                        onDateChange(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                                {reservationFormErrors.date && <p className="Error">Please pick a date!</p>}
                            </LocalizationProvider>
                            {/* Time Picker */}
                            <FormControl sx={{ width: 227 }}>
                                <InputLabel id="timeslot-label">Choose Timeslot</InputLabel>
                                <Select
                                    labelId="timeslot-label"
                                    id="timeslot-label"
                                    sx={{ justifyContent: 'center' }}
                                    value={reservationDetails.timeRange}
                                    onChange={onTimeslotChange}
                                    label='Choose Timeslot'
                                    disabled={reservationDetails.date == null}
                                >
                                    {availabilityMenuItems}
                                </Select>
                                {reservationFormErrors.timeRange && <p className="Error">Please choose a timeslot!</p>}
                            </FormControl>
                            {/* Self Booking */}
                            <FormControlLabel
                                control={
                                    <Checkbox checked={reservationDetails.selfBooking} onChange={onSelfBookingCheckboxChange} name='selfBooking' />
                                }
                                label="Self Booking" />
                        </Stack>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} sm={6}>
                    <Card sx={{ margin: '20px', width: '90%', height: '90%' }} elevation={6}>
                        <Stack sx={{ mt: '30px', }} alignItems='center' spacing={3}>
                            <DetailHeader heading='Booking Details' />
                            {/* Full Name */}
                            <TextField
                                required
                                name='fullName'
                                label="Full Name"
                                value={reservationDetails.fullName}
                                onChange={onReservationDetailsChange}
                                disabled={reservationDetails.selfBooking}
                                helperText={reservationFormErrors.fullName ? 'Please enter full name' : ''}
                                sx={{
                                    '.MuiFormHelperText-root': {
                                        color: 'red'
                                    }
                                }}
                            />
                            <TextField
                                required
                                name='age'
                                label="Age"
                                type='number'
                                value={reservationDetails.age}
                                onChange={onReservationDetailsChange}
                                inputProps={{ min: 18, max: 70 }}
                                disabled={reservationDetails.selfBooking}
                                helperText={reservationFormErrors.age.required ? 'Please enter age!' : (reservationFormErrors.age.rangeError? 'Age must be between 18 and 70': '')}
                                sx={{
                                    '.MuiFormHelperText-root': {
                                        color: 'red'
                                    }
                                }}
                            />
                        </Stack>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} sm={6} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                    {/* <Card sx={{ margin: '20px', width: '90%', height: '90%' }} elevation={6}>
                        <Stack sx={{ mt: '30px', }} alignItems='center' spacing={3}>
                            
                        </Stack>
                    </Card> */}
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
                            onClick={() => {navigate('/facility')}}
                        >
                            Back
                        </Button>
                        <Button sx={{
                            ml: '10px',
                            backgroundColor: '#326DD9',
                            color: '#ffffff',
                            borderColor: '#d43f3a',
                            ':hover': {
                                backgroundColor: '#326DD9'
                            },
                            height: '36.5px',
                            mt: '20px'
                        }}
                            onClick={onSubmitBooking}
                        >
                            Book Facility
                        </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default FacilityDetails;