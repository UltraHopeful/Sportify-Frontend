import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid } from "@mui/material";
import { useState } from "react";
import FacilityItem from "../../components/FacilityItem";
import { clubFacilities } from "../../data/FacilitiesData";
import { FacilitiesInterface } from "../../data/FacilitiesInterfac";



export default function Facilities() {
    const [categoryFilters, setCategoryFilters] = useState({
        gym: false,
        badminton: false,
        pool: false,
        basketBall: false
    });
    const originalList: FacilitiesInterface[] = clubFacilities;

    const [displayList, setDisplayList] = useState(clubFacilities);
    const { gym, badminton, pool, basketBall } = categoryFilters;


    const onFiltersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let updatedFilters = {...categoryFilters, [event.target.name]: event.target.checked};
        setCategoryFilters({
            ...categoryFilters,
            [event.target.name]: event.target.checked
        });
        applyFilters(updatedFilters);
    };

    const applyFilters = (filters: any) => {
        let filteredList: FacilitiesInterface[] = originalList.filter((item) => {
            let result: boolean = false;
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
        <div className="Container">
            <div>
                <FormControl sx={{ display: 'flex', flexDirection: 'row', my: '30px', justifyContent: 'center' }}>
                    <FormLabel sx={{ mt: '8px', mr: '20px' }} component="legend">Categories:</FormLabel>
                    <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
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
                </FormControl>
            </div>
            <Grid container sx={{ m: '10px' }} spacing={2}>
                {displayList.map((facility) => {
                    return (
                        <FacilityItem key={facility.id} facility={facility}></FacilityItem>
                    );
                })}
            </Grid>
        </div>
    );
}