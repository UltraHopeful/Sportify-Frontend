import { Box, Card, Checkbox, Divider, FormControlLabel, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { availabilitySlots, clubFacilities } from "../../data/FacilitiesData";
import { FacilitiesInterface } from "../../data/FacilitiesInterfac";
import { DetailHeader, DetailRow } from "../ReservationDetails";
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

const FacilityDetails = () => {
    const [date, setDate] = useState<Date | null>(null);
    const [timeRange, setTimeRange] = useState<string | undefined>('');
    const [selfBooking, setSelfBooking] = useState<boolean>(true);
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

    const onDateChange = (updatedDate: Date|null) => {
        setDate(updatedDate);
        setTimeRange('');
    }

    const onTimeslotChange = (event: SelectChangeEvent) => {
        setTimeRange(event.target.value);
    }

    const onSelfBookingCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelfBooking(event.target.checked);
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
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="Choose Date"
                                    value={date}
                                    minDate={minDate}
                                    maxDate={maxDate}
                                    onChange={(newValue) => {
                                        onDateChange(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                            <FormControl sx={{ width: 227 }}>
                                <InputLabel id="timeslot-label">Choose Timeslot</InputLabel>
                                <Select
                                    labelId="timeslot-label"
                                    id="timeslot-label"
                                    sx={{ justifyContent: 'center' }}
                                    value={timeRange}
                                    onChange={onTimeslotChange}
                                    label='Choose Timeslot'
                                    disabled={date == null}
                                >
                                    {availabilityMenuItems}
                                </Select>
                            </FormControl>
                            <FormControlLabel
                                control={
                                    <Checkbox checked={selfBooking} onChange={onSelfBookingCheckboxChange} name='selfBooking'/>
                                }
                                label="Self Booking" />
                        </Stack>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} sm={6}>
                    <Card sx={{ margin: '20px', width: '90%', height: '90%' }} elevation={6}>
                        <Stack sx={{ mt: '30px', }} alignItems='center' spacing={3}>

                        </Stack>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default FacilityDetails;