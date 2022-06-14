import React from 'react';
import {Formik} from "formik";
import {LoginForm} from "./loginForm";
import * as Yup from "yup";
import {Divider, Grid, Hidden, Link} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// cite : https://dev.to/finallynero/react-form-using-formik-material-ui-and-yup-2e8h
// I used some of the code from article, but I change as per my preferences

const validations = Yup.object({
    email: Yup.string("Enter your email")
        .email("Enter valid email like abc@xyz.com")
        .required("Email is required"),
    password: Yup.string("")
        .min(8, "Minimum 8 characters needed for password")
        .matches("[a-z]", "Must contain one lowercase letter")
        .matches("[A-Z]", "Must contain one uppercase letter")
        .matches("[0-9]", "Must contain one number character")
        .matches(/[\W]/, "Must contain one special character")
        .max(25, "Maximum 25 characters allowed for password")
        .required("Password is required")
});

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const values = {email: "", password: ""};
        return (
            <React.Fragment>
                <Grid container id="loginPage" height="100%" alignItems="center" className="bg-gray">
                    <Hidden smDown xsDown>
                        <Grid id="loginSideBack" item xl={9} lg={9} md={7} sm={0} xs={0} className="loginSide"
                              justifyContent="flex-start">
                            <div className="loginSideText">
                                {/*<img src={backImage} height="100%" className="img-responsive">*/}
                                {/*</img>*/}
                                <Typography variant="h3" color="white" textAlign='left'>
                                    Just Bring Yourself
                                </Typography>
                                <Typography variant="h2" color="white" textAlign='left'>
                                    Fitness
                                </Typography>
                                <Typography variant="h5" color="white" textAlign='left'>
                                    In this day in age, keeping fit has<br/> become one of the hectic task.<br/>To keep
                                    your body in shape you have<br/> to do different workout.
                                </Typography>

                            </div>
                        </Grid>
                    </Hidden>
                    <Grid item xl={3} lg={3} md={5} sm xs={12}>
                        <div>
                            <Typography variant="h3" color="black" marginBottom="20px">
                                Login
                            </Typography>
                            <Divider variant="middle"></Divider>
                            <Box sx={{m: 4}}></Box>
                            <Formik initialValues={values}
                                    validationSchema={validations}
                                    onSubmit={(values) => {
                                        console.log(values)
                                    }}>
                                {(props) => (<LoginForm {...props} />)}
                            </Formik>
                        </div>
                        <Box component="div"
                             sx={{m: 3, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
                            <Link display='flex' justifySelf='flex-start' marginBottom={1} href="#" underline="none">
                                {'Create a new account'}
                            </Link>
                            <Link display='flex' marginBottom={1} href="#" underline="none">
                                {'Forgot password?'}
                            </Link>

                            <Link display='flex' marginBottom={1} href="/" underline="none">
                                {'Back to Home'}
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default (InputForm);
