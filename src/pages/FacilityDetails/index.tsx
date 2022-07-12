import { Box, Button, Card, Checkbox, Divider, FormControlLabel, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FacilitiesInterface } from "../../data/FacilitiesInterfac";
import { DetailHeader, DetailRow } from "../ReservationDetails";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import './FacilityDetails.css';
import FormControl from '@mui/material/FormControl';
import axios from "axios";
import { getFromDate, getRemainingAvailableSlots, getToDate } from "../../data/AvailabilityData";
import Loader from "../../components/Loader";
import { AvailabilitySlots } from "../../data/AvailaibilitySlots";

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
    from?: Date | null,
    to?: Date | null,
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
    const [facilityNotFound, setFacilityNotFound] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [timeslotsLoading, setTimeslotsLoading] = useState(false);
    const [availableSlots, setAvailableSlots] = useState<AvailabilitySlots[]>([]);
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

    const [resource, setResource] = useState<FacilitiesInterface|null>(null);

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
    useEffect( () =>{
        axios.get("http://localhost:5000/facility/" + resourceId)
        .then(response => response.data)
        .then(content => {
            setResource(content.data);
            setIsLoading(false);
            // setDisplayList(content.data);
        })
        .catch(function(err){
            if (err.response.status === 404) {
                setFacilityNotFound(true);
                setIsLoading(false);
            }
        });
    }, [resourceId]);

    const availabilityMenuItems = (availableSlots?.map((availabilitySlot) => {
        return (
            <MenuItem key={availabilitySlot.id} value={availabilitySlot.id}>{availabilitySlot.displayValue}</MenuItem>
        );
    }));

    const loaderMenuItem = (<MenuItem disabled><div className="TimeslotLoader"><Loader/></div></MenuItem>);

    const onDateChange = async (updatedDate: Date | null) => {
        const reservationDetailsTemp = {
            ...reservationDetails,
            date: updatedDate,
            timeRange: '',
            from: null,
            to: null
        };
        setReservationDetails(reservationDetailsTemp);
        validateForm(reservationDetailsTemp);
        setTimeslotsLoading(true);
        axios({
            method: 'get',
            url: `http://localhost:5000/facility/booked-slots?facilityId=${resourceId}&date=${updatedDate?.getTime()}`
        }).then (res => {
            setTimeslotsLoading(false);
            setAvailableSlots(getRemainingAvailableSlots(res.data.data));
        }).catch(err => {
            console.log(err);
        })
    }

    const onTimeslotChange = (event: SelectChangeEvent) => {
        const reservationDetailsTemp = {
            ...reservationDetails,
            from: getFromDate(+event.target.value, reservationDetails.date),
            to: getToDate(+event.target.value, reservationDetails.date),
            timeRange: event.target.value,
        };
        console.log('state: ', reservationDetailsTemp);
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

    const getReservationApiReqBody = (filledDetails: ReservationForm) => {
        const requestBody = {
            from: filledDetails.from,
            to: filledDetails.to,
            facility_id: resourceId,
            booked_date: new Date(),
            reserved_by: "672dee56-6895-4b20-8daa-6b08461aec95",
            reserved_for: filledDetails.fullName
        }
        return requestBody;
    }

    const onSubmitBooking = () => {
        if(!validateForm(reservationDetails)) {
            return;
        }
        else {
            const reqBody = getReservationApiReqBody(reservationDetails);
            axios({
                method: 'post',
                url: 'http://localhost:5000/reservation',
                data: reqBody
            }).then(() => {
                navigate('/facility', {state: {snackbar: true, snackbarMsg: 'Successfuly booked facility!'}})
            }).catch((err) => {
                console.log('Exception occured', err);
            });
        }
    }

    return (
        (isLoading) ? (<Loader/>) : ((facilityNotFound || !resource) ? (<h1>Facility Not Found!</h1>): (
        <Box sx={{ width: '100%', mt: '20px' }}>
            <Grid container rowSpacing={2} columnSpacing={2}>
                <Grid item xs={12} md={4} sm={6}>
                    <Card sx={{ margin: '20px', width: '90%', height: '90%', justifyContent: 'center' }} elevation={6}>
                        <img className='Image' src={`${resource.image}`} alt="" />
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
                                    {(timeslotsLoading) ? loaderMenuItem : availabilityMenuItems}
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
        </Box>))
    );
}

export default FacilityDetails;