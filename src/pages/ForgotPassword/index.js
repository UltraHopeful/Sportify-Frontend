import React, {useEffect} from "react";
import {Card, Grid, Link} from "@mui/material";
import {useNavigate} from "react-router-dom";
import Typography from "@mui/material/Typography";
import Logo from "../../assets/images/Sportify.png";
import Box from "@mui/material/Box";
import {Formik} from "formik";
// import verifiedImage from "./public/MailConfirmed.svg";
import {ChangePasswordForm} from "../ChangePassword/changePasswordForm";
const Main = () => {

    const navigate = useNavigate();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        navigate('/change-password',{});
    }, []);

    return (
        <Grid container id="loginPage"
              height="100%"
              justifyContent="center"
              alignItems="center"
              className="loginSide1">
            <Grid item xl={3} lg={4} md={5} sm={7} xs={11}>
                <Card sx={{p:'1.5rem'}} elevation={5}>
                    <img src="/MailConfirmed.svg" className="img-responsive"/>
                    <Typography variant="h5" align="center">Link Verified Successfully</Typography>
                    <Box component="div"
                         sx={{mt: 3, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
                        <Link display='flex' justifySelf='flex-start' marginBottom={1} href="/login1" underline="none">
                            {'Back to login'}
                        </Link>

                        <Link display='flex' marginBottom={1} href="/" underline="none">
                            {'Back to Home'}
                        </Link>
                    </Box>
                </Card>
            </Grid>
        </Grid>
    );

};
export default Main;