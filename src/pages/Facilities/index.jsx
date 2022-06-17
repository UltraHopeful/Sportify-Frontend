import { Checkbox, Container, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, Snackbar, Stack } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import FacilityItem from "../../components/FacilityItem";
import { clubFacilities } from "../../data/FacilitiesData";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert from '@mui/material/Alert';

export default function Facilities() {
    const [categoryFilters, setCategoryFilters] = useState({
        gym: false,
        badminton: false,
        pool: false,
        basketBall: false
    });
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

    const originalList = clubFacilities;

    const [displayList, setDisplayList] = useState(clubFacilities);
    const { gym, badminton, pool, basketBall } = categoryFilters;


    const onFiltersChange = (event) => {
        let updatedFilters = {...categoryFilters, [event.target.name]: event.target.checked};
        setCategoryFilters({
            ...categoryFilters,
            [event.target.name]: event.target.checked
        });
        applyFilters(updatedFilters);
    };

    const applyFilters = (filters) => {
        let filteredList = originalList.filter((item) => {
            let result = false;
            if (filters.gym) {
                result = result || (item.category === 'Gym');
            }
            if (filters.badminton) {
                result = result || (item.category === 'Badminton');
            }
            if (filters.pool) {
                result = result || (item.category === 'Swimming Pool');
            }
            if (filters.basketBall) {
                result = result || (item.category === 'Basket Ball');
            }
            if (!(filters.gym || filters.badminton || filters.pool || filters.basketBall)) {
                return true;
            }
            return result;
        });
        setDisplayList(filteredList);
    }

    return (
        <Container maxWidth='xl'>
            <div>
                <FormControl sx={{ display: 'flex', flexDirection: {md: 'row', sm: 'column', xs: 'column'}, m: '10px auto', alignItems: 'center', justifyContent: 'center' }}>
                    <FormLabel sx={{ mt: '8px', mr: '20px' }} component="legend">Categories:</FormLabel>
                    <Stack directions={{xs: 'row', sm: 'row', md: 'column', lg:'row', xl: 'row'}}>
                    <FormGroup sx={{ flexDirection: {md: 'row', sm: 'column', xs: 'column'} }}>
                        <FormControlLabel
                            control={
                                <Checkbox checked={gym} onChange={onFiltersChange} name="gym" />
                            }
                            label="Gym"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={badminton} onChange={onFiltersChange} name="badminton" />
                            }
                            label="Badminton"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={pool} onChange={onFiltersChange} name="pool" />
                            }
                            label="Swimming Pool"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={basketBall} onChange={onFiltersChange} name="basketBall" />
                            }
                            label="Basket Ball"
                        />
                    </FormGroup>
                    </Stack>
                </FormControl>

            </div>
            <Grid container spacing={2}>
                {displayList.map((facility) => {
                    return (
                        <FacilityItem key={facility.id} facility={facility}></FacilityItem>
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
                    Successfuly booked facility!
                </MuiAlert>
            </Snackbar>
        </Container>
    );
}