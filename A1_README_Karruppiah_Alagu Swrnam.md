# Assignment-1

- _Date Created_: 05 JUN 2022
- _Last Modification Date_: 06 JUN 2022
- _Heroku URL_: <https://web-assignment1-ask.herokuapp.com/>
- _Gitlab URL_: <https://git.cs.dal.ca/karruppiah/tutorial2/-/tree/main/Assignment1/payment>

## Authors

- [Alagu Swrnam Karruppiah](al581093@dal.ca) - _Maintener_

### Prerequisites

To have a local copy of this lab / assingnment / project up and running on your local machine, you will first need to install the following libraries

```
Node.js
React.js
```

### Installing

In the project directory, you can run:

```
npm start
```

## Deployment

The code is deployed on heroku

## Built With

- [React](https://reactjs.org/docs/getting-started.html) - The web framework used

## Sources Used

### checkout.jsx

_Lines 300 - 323_

```
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Shipping Details Submitted"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="shipping-alert">
            Success
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
      </Modal>
```

The code above was created by adapting the code in [Material UI](https://mui.com/material-ui/react-modal/) as shown below:

```
<Button onClick={handleOpen}>Open modal</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
  </Box>
</Modal>

```

- The code in [Material UI](https://mui.com/material-ui/react-modal/) was implemented
- [Bootstrap](https://mui.com/material-ui/react-modal/)'s Code was used to get modal component template
- [Bootstrap](https://mui.com/material-ui/react-modal/)'s Code was modified by customizing the modal according to the UI need.

### checkout.jsx

_Lines 65 - 115_

```
const regex_email = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const regex_phonenumber = /(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
const regex_zip = /[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d$/;
const regex_name = /^[A-Z]{2,}$/i

const validate = (values) => {
  const Formerrors = {};
  if (!values.firstName) {
      Formerrors.firstName = "First Name cannot be empty!";
  }
  else if(!regex_name.test(values.firstName)){
    Formerrors.firstName = "Enter a valid First Name!"
  }
  if (!values.lastName) {
      Formerrors.lastName = "Last Name cannot be empty!";
  }
  else if(!regex_name.test(values.lastName)){
    Formerrors.lastName = "Enter a valid Last Name!"
  }
  if (!values.address1) {
      Formerrors.address1 = "Address cannot be empty!";
  }
  if (!values.lastName) {
      Formerrors.city = "City cannot be empty!";
  }
  if (!values.state) {
    Formerrors.state = "State cannot be empty!";
  }
  if (!values.zip) {
    Formerrors.zip = "Zip code cannot be empty!";
  }
  else if(!regex_zip.test(values.zip)){
    Formerrors.zip = "Enter a valid zip code!"
  }
  if (!values.phonenumber) {
    Formerrors.phonenumber = "Phone Number cannot be empty!";
  }
  else if(!regex_phonenumber.test(values.phonenumber)){
    Formerrors.phonenumber = "Enter a valid phone number!";
  }
  if (!values.country) {
    Formerrors.country = "Country cannot be empty!";
  }
  if (!values.emailid) {
    Formerrors.emailid = "Email id cannot be empty!";
  }
   else if (!regex_email.test(values.emailid)) {
    Formerrors.emailid = "Enter a valid email format!";
  }
  return Formerrors;
};

```

The code above was created by adapting the code in [dmalvia/React_Forms_Tutorials](https://github.com/dmalvia/React_Forms_Tutorials/blob/use-native/src/App.js) as shown below:

```
const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

```

- The code in [dmalvia/React_Forms_Tutorials](https://github.com/dmalvia/React_Forms_Tutorials/blob/use-native/src/App.js) was implemented
- [dmalvia/React_Forms_Tutorials](https://github.com/dmalvia/React_Forms_Tutorials/blob/use-native/src/App.js)'s Code was used to refer for validation
- [dmalvia/React_Forms_Tutorials](https://github.com/dmalvia/React_Forms_Tutorials/blob/use-native/src/App.js)'s Code was modified by customizing the requirements according to the form elements used.

### checkout.jsx

_Lines 151 - 286_

```
<Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            variant="outlined"
            value = {formData.firstName}
            onChange = {handleChange}
          />
          <p style = {{color : "red"}}>{error.firstName}</p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            variant="outlined"
            value = {formData.lastName}
            onChange = {handleChange}
          />
           <p style = {{color : "red"}}>{error.lastName}</p>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            variant="outlined"
            value= {formData.address1}
            onChange = {handleChange}
          />
           <p style = {{color : "red"}}>{error.address1}</p>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            variant="outlined"
            value = {formData.address2}
            onChange = {handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            variant="outlined"
            value = {formData.city}
            onChange = {handleChange}
          />
           <p style = {{color : "red"}}>{error.city}</p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
          required
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="outlined"
            value={formData.state}
            onChange = {handleChange}
          />
           <p style = {{color : "red"}}>{error.state}</p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            variant="outlined"
            value={formData.zip}
            onChange = {handleChange}
          />
           <p style = {{color : "red"}}>{error.zip}</p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            variant="outlined"
            value={formData.country}
            onChange = {handleChange}
          />
           <p style = {{color : "red"}}>{error.country}</p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phonenumber"
            name="phonenumber"
            label="Phone number (xxx)xxx-xxxx "
            fullWidth
            variant="outlined"
            value={formData.phonenumber}
            onChange = {handleChange}
          />
           <p style = {{color : "red"}}>{error.phonenumber}</p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="emailid"
            name="emailid"
            label="Email id"
            fullWidth
            variant="outlined"
            value = {formData.emailid}
            onChange = {handleChange}
          />
           <p style = {{color : "red"}}>{error.emailid}</p>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
```

The code above was created by adapting the code in [latest-thinking/blog/id/10114](https://www.dmcinfo.com/latest-thinking/blog/id/10114/a-simple-guide-to-material-ui-grids) as shown below:

```
<div  className="App">
      <Grid container spacing={3}>
        <Grid item xs>
          <div style={{background:randomColor()}}> A</div>
        </Grid>
        <Grid item xs={7}>
          <div style={{background:randomColor()}}> B </div>
        </Grid>
        <Grid item xs>
          <div style={{background:randomColor()}}> C </div>
        </Grid>
        <Grid item xs>
          <div style={{background:randomColor()}}> D </div>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <div style={{background:randomColor()}}> 1</div>
        </Grid>
        <Grid item xs>
          <div style={{background:randomColor()}}> 2 </div>
        </Grid>
        <Grid item xs>
          <div style={{background:randomColor()}}> 3 </div>
        </Grid>
        <Grid item xs>
          <div style={{background:randomColor()}}> 4 </div>
        </Grid>
      </Grid>
    </div>

```

- The code in [latest-thinking/blog/id/10114](https://www.dmcinfo.com/latest-thinking/blog/id/10114/a-simple-guide-to-material-ui-grids) was implemented
- [latest-thinking/blog/id/10114](https://www.dmcinfo.com/latest-thinking/blog/id/10114/a-simple-guide-to-material-ui-grids)'s Code was used to get Grid component template
- [latest-thinking/blog/id/10114](https://www.dmcinfo.com/latest-thinking/blog/id/10114/a-simple-guide-to-material-ui-grids)'s Code was modified by customizing the Grid according to the UI
