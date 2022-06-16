import React from "react";
import Container from "@mui/material/Container";
import {Grid} from "@mui/material";
import {ToastContainer} from "material-react-toastify";
import 'material-react-toastify/dist/ReactToastify.css';

const main = () => {
    return (
        <Grid container>
            <Grid item xl={12}>
                <h1>Hello</h1>
            </Grid>
            <Grid item xl={6}>

            </Grid>
            <Grid item xl={6}>

            </Grid>
            <ToastContainer />
        </Grid>
    );
};
export default main;