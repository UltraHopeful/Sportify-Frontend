import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import { ListItemText} from "@mui/material";
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import { clubFacilities } from "../../data/FacilitiesData";
import {useEffect, useState} from "react";

export default function AppSearch() {


    const[data,setData]=useState(clubFacilities);
    const [searched, setSearched] = useState(clubFacilities);

    useEffect(() => {
        getFacilities();
    },[]);

    async function getFacilities() {
        setData(clubFacilities);
        setSearched(clubFacilities);
    };
    
    console.log(data)
    const filter = (e) => {
        const keyword = e.target.value;
        if (keyword !== '') {
            const results = data.filter(facility => {
                return facility.name.toLowerCase().startsWith(keyword.toLowerCase());
            });
            setSearched(results);
          } else {
            setSearched(data);
          }
        };

  return (
    <Paper>
    <div>
    <TextField
         placeholder="Search"
         type="search"
         variant="outlined"
         fullWidth
         size="small"
            onChange={filter}
        InputProps={{
            startAdornment: (
                 <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
        )
     }}
     />

        {searched.length > 0 && searched ? (
            <List itemLayout="vertical"
            size="large" sx={{ width: '100%', maxWidth: 1000, bgcolor: 'background.paper' }} >
                {searched.map(facility => {
                    return(
                    <ListItem key={facility.id} alignItems="flex-start">
                        <img width={250} height={250}
                            alt="new"
                            src={facility.image} />
                        <ListItemText primary={<div>{"Name: " + facility.name}</div>}
                        secondary={<div>{"Category: " + facility.category + ", " + "Location: " + facility.location}</div>}
                        /><Link to={'../resources/'+facility.id}>Click Here to register</Link>
                    </ListItem>

                    
                )})}
            </List>  
        ): (
            <h1> No results</h1>
        )}
    </div>
</Paper>
  );
}
