import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import "./membership.css";
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const steps = ['Billing Information', 'Review your order'];


const theme = createTheme();

export default function Checkout() {
    const location = useLocation();
    const product = location.state.product;
  const [activeStep, setActiveStep] = React.useState(0);
  const navigate = useNavigate();
  const handleNext = () => {
    if (error == false){
      setActiveStep(activeStep + 1);
      if(activeStep===1){
        navigate('/payment');
      }
    }
    else{
      alert("Please fill the details to proceed.");
    }
  };

    

  const handleBack = () => {
    if(activeStep===0){
        navigate('/membership');
    }

    setActiveStep(activeStep - 1);
  };

  // start of billing
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [address, setAddress] = useState();
    const [zip, setZip] = useState();
    const [country, setCountry] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [error, setError] = useState(true);
    const [formErrors, setFormErrors]= useState({firstName: '', lastName:'', address:'', zip:'', city:'',state:'', country:''});
    
    const handleValueChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        validateField(name, value);
    }

    const validateField = (fieldName, value) => {
       
        let updatedFormErrors = formErrors
        switch(fieldName) {
            case 'firstName':
                setFirstName(value);
                updatedFormErrors.firstName = '';
                if (value === '' || value == null){
                    updatedFormErrors.firstName = "Please provide first name";
                }
                else{
                    let isNameValid = value.match(/^(?![\s.]+$)[a-zA-Z\s.]*$/i);
                    updatedFormErrors.firstName = isNameValid ? '' : 'Invalid characters';
                }
                break;
            case 'lastName':
                setLastName(value);
                updatedFormErrors.lastName = '';
                if (value === '' || value == null){
                    updatedFormErrors.lastName = "Please provide last name";
                }
                else{
                    let isNameValid = value.match(/^(?![\s.]+$)[a-zA-Z\s.]*$/i);
                    updatedFormErrors.lastName = isNameValid ? '' : 'Invalid characters';
                }
                break;
            case 'address1':
                setAddress(value);
                updatedFormErrors.address = '';
                if (value === '' || value == null){
                    updatedFormErrors.address = "Please provide address";
                }
                else{
                    let isNameValid = value.match(/^\d+\s[A-z]+\s[A-z]+/g);
                    updatedFormErrors.address = isNameValid ? '' : 'Invalid characters';
                }
                break;
            case 'zip':
                setZip(value);
                updatedFormErrors.zip = '';
                if (value === '' || value == null){
                    updatedFormErrors.zip = "Please provide zip";
                }
                else{
                    let isNameValid = value.match(/^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i);
                    updatedFormErrors.zip = isNameValid ? '' : 'Invalid characters';
                }
                break;
            case 'city':
                setCity(value);
                updatedFormErrors.city = '';
                if (value === '' || value == null){
                    updatedFormErrors.city = "Please provide city";
                }
                else{
                    let isNameValid = value.match(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/i);
                    updatedFormErrors.city = isNameValid ? '' : 'Invalid characters';
                }
                break;
            case 'state':
                setState(value);
                updatedFormErrors.state = '';
                if (value === '' || value == null){
                    updatedFormErrors.state = "Please provide state";
                }
                else{
                    let isNameValid = value.match(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/i);
                    updatedFormErrors.state = isNameValid ? '' : 'Invalid characters';
                }
                break;
            case 'country':
                setCountry(value);
                updatedFormErrors.country = '';
                if (value === '' || value == null){
                    updatedFormErrors.country = "Please provide country";
                }
                break;
            default:
                break;
        }
        setFormErrors(updatedFormErrors);
        setError(false);
        for (let x in updatedFormErrors) {
          if (updatedFormErrors[x] !== '') {
              setError(true);
          }
        }
    }
    //end of billing

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your purchase.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your membership
                  confirmation.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                 {activeStep === 0 ? 
                    <React.Fragment>
                        <Typography variant="h6" gutterBottom>
                            Billing Information
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="firstName"
                                name="firstName"
                                label="First name"
                                fullWidth
                                autoComplete="given-name"
                                variant="standard"
                                value={firstName}
                                onChange={handleValueChange}
                            />
                            <span className='spanText' id='firstNameSpan'>{formErrors.firstName}</span>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="lastName"
                                name="lastName"
                                label="Last name"
                                fullWidth
                                autoComplete="family-name"
                                variant="standard"
                                value={lastName}
                                onChange={handleValueChange}
                            />
                            <span className='spanText' id='lastNameSpan'>{formErrors.lastName}</span>
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                required
                                id="address1"
                                name="address1"
                                label="Address line 1"
                                fullWidth
                                autoComplete="shipping address-line1"
                                variant="standard"
                                value={address}
                                onChange={handleValueChange}
                            />
                            <span className='spanText' id='addressSpan'>{formErrors.address}</span>
                            </Grid>
                            
                            <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="city"
                                name="city"
                                label="City"
                                fullWidth
                                autoComplete="shipping address-level2"
                                variant="standard"
                                value={city}
                                onChange={handleValueChange}
                            />
                            <span className='spanText' id='citySpan'>{formErrors.city}</span>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                id="state"
                                name="state"
                                label="State/Province/Region"
                                fullWidth
                                variant="standard"
                                value={state}
                                onChange={handleValueChange}
                            />
                            <span className='spanText' id='stateSpan'>{formErrors.state}</span>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="zip"
                                name="zip"
                                label="Zip / Postal code"
                                fullWidth
                                autoComplete="shipping postal-code"
                                variant="standard"
                                value={zip}
                                onChange={handleValueChange}
                            />
                            <span className='spanText' id='zipSpan'>{formErrors.zip}</span>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="country"
                                name="country"
                                label="Country"
                                fullWidth
                                autoComplete="shipping country"
                                variant="standard"
                                value={country}
                                onChange={handleValueChange}
                            />
                            <span className='spanText' id='countrySpan'>{formErrors.country}</span>
                            </Grid>
                            {/* <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                                label="Use this address for payment details"
                            />
                            </Grid> */}
                        </Grid>
                    </React.Fragment>
                  : 
                  <React.Fragment>
                    <Typography variant="h6" gutterBottom>
                        Order summary
                    </Typography>
                    <List disablePadding>
                        <ListItem key={product.name} maxWidth="sm" >
                            <ListItemText primary={product.name}  maxWidth="sm" secondary={product.desc} />
                            <Typography variant="body2">${product.price}</Typography>
                        </ListItem>

                        <ListItem >
                        <ListItemText primary="Total" />
                        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                            ${(product.price*1.15).toFixed(2)}
                        </Typography>
                        </ListItem>
                    </List>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                            Shipping
                        </Typography>
                        <Typography gutterBottom>{firstName} {lastName}</Typography>
                        <Typography gutterBottom>{address} {city} {state} {country} {zip}</Typography>
                        </Grid>
                    </Grid>
                </React.Fragment>
    }

                
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep >= 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Proceed to pay' : 'Proceed to review'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}