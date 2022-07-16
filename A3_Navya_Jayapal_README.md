# CSCI 5709 Advanced Web Services Assignment 3

- _Date Created_: 15 July 2022
- _Last Modification Date_: 15 July 2022
- _Frontend URL_: <https://sportify-prd.herokuapp.com/>
- _Backend URL_: <https://sportify-backend-prd.herokuapp.com/>
- _Frontend Repository URL_: <https://git.cs.dal.ca/ajayanthi/5709-group10>
- _Frontend Repository My Branch URL_: <https://git.cs.dal.ca/ajayanthi/5709-group10/-/tree/navya_jayapal_1>
- _Backend Repository URL_: <https://git.cs.dal.ca/kabtiyal/5709-g10-sportify-backend>
- _Backend Repository My Branch URL_: <https://git.cs.dal.ca/kabtiyal/5709-g10-sportify-backend/-/tree/navya>

## Authors

- [Navya Jayapal (B00886554)] (mailto: pr522601@dal.ca) - _Developer_

## Assignment 3 - Membership Management (Customer)

As part of assignment 3, I implemented membership management feature. This features is developed for a potential sportsclub member who is looking for buying a membership. User views the memberships plans and selects the one to checkout. User is prompted to enter their billing details that included first name, last name and address. User enters/changes the start and end date of the plan, reviews the entered information and proceed to payment.

Navigation: Go to the following website URL and click on "Blog" tab in Nav bar <https://sportify-prd.herokuapp.com/>

### Tasks

**View membership plans** - When user clicks on "Membership" tab, list of all the available plans are displayed. This tasks is achieved by calling a backend nodejs API call to fetch all existing plans from the database. The backend retrieves all the configured plans from the database and returns it to the front end.

**Display the pre-saved billing information. Enter/edit the details** - User clicks on the membership tab of the Sportify website to view the available membership plans. He selects a membership plan and clicks on “Get started” to proceed to purchase. The system redirects the user to a page to fill in the details about the billing of the purchase. After filling up the form, he clicks on “Next” button. This task is achieved by calling an api to fetch the existing billing details corresponding to the logged in user. If the api return data, it is pre-populated in the designated fields on the user interface. If the api does not return any data, then an empty form is displayed. The backend api retrieves the billing details from the database and returns it to the frontend.

**Review purchase details, pick the start and end date and proceed to payment** - User clicks on the membership tab of the Sportify website to view the available membership plans. He selects a membership plan and clicks on “Get started” to proceed to purchase. The system redirects the user to a page to fill in the details about the billing of the purchase. After filling up the form, he clicks on “Next” button. System redirects the user to review page. User reviews the details, enters start and end date and clicks on “Proceed to pay”. This task is achieved by calling three backend APIS. One API is to create a new entry of billing details in the database. This API is called when there is no previous entry. Second API is to update the billing details present in the database. The third API is to create a new entry of purchased membership. The third API is called when the payment is successfully completed by the user.

**View existing membership** - User has purchased a membership. User clicks on membership tab and the system displays the details of the purchased membership to the user. The details include plan name, start date, end date and status of the membership. This task is achieved by calling a backend API that fetches purchased membership that has "Ongoing" status. The backend api integrates with the mongodb database, queries and returns the details to the frontend.

**Cancel existing membership** - User has purchased a membership. User clicks on membership tab and the system displays the details of the purchased membership to the user. User clicks on Cancel Membership button. The system shows a dialog box confirming the processing of the cancellation request. On clicking close, the user is redirected to the membership plans listiing page. This task is achieved by calling a backend API that updates the ongoing active membership plan and cancels it.

## Backend folder structure

The below folders are present in the backend server:

1. `models` folder contains the structure of the entities or data used in the application. Models used for membership feature are membership.js, membershipBilling.js Collection objects are exported from these files to be imported in the controllers where ORM functions like create, findOneAndUpdate, findAll, findOneAndDelete are called.
2. `routes` contain the application routes to receive HTTP requests like GET, POST, PUT, etc. Routes to several http methods are defined in the files present in this folder.
3. `controllers` folder contains the business logic. The execution control is redirected from index.js to routes to controller. Models are imported in controller js files and business logic is implemneted on the data retrieved.

## Frontend folder structure

1. src folder contains the source code of Sportify project. package.json contains the dependencies of the project. The root directory contains `index.js` where all the possible routes of the website are configured. The second entry point after index.js is `App.js`. It is also present in the root directory.
2. `Theme` folder contains the color palette of the entire website.
3. `assets` folder contains static contents like images used in various web pages.
4. `components` contain presentational components comprising of static content.
5. `pages` contain stateful functional components which render UI components based on states and user interactions.
6. `data` folder contains the static data content needed to be embedded in the components.

## Authored files for system backend

- `index.js`
- `app.js`
- `controllers/Blogging/allBlogs.js`
- `routes/blogs.js`
- `models/Blogging/blogs.js`

## Authored files for system frontend

- `pages/Membership/billingInfo.js`
- `pages/Membership/checkout.js`
- `pages/Membership/pricing.js`
- `pages/Membership/membership.css`
- `pages/Membership/purchasedMembership.js`
- `Routes/index.js`

## Backend Built With

- [ExpressJS](https://expressjs.com/) - NodeJS to develop backend project
- [Mongoose](https://mongoosejs.com/) - Library to connect to mongodb, model data and perform ORM operations
- [Express-Validator](https://express-validator.github.io/) - Dependency to validate request bodies
- [Cors](https://www.npmjs.com/package/cors) - Library to enable cors

## Frontend Built With

- [ReactJS](https://reactjs.org/) - JS Library to develop the website
- [Material UI](https://mui.com/) - Used to develop responsive and styles UI components
- [Axios](https://axios-http.com/docs/intro) - Library to integrate the frontend project with backend

## Sources Used

### pricing.jsx

_Lines 131 - 132_

```
<React.Fragment>
  {render === true ? (<div className="backgroundClassPricing">
```

The code above was created by adapting the code in [React Docs](https://reactjs.org/docs/conditional-rendering.html) as shown below:

```
<div>
  {isLoggedIn
    ? <LogoutButton onClick={this.handleLogoutClick} />
    : <LoginButton onClick={this.handleLoginClick} />
  }
</div>
```

- [React Docs](https://reactjs.org/docs/conditional-rendering.html) Code from the source was used because it demonstrated a simplied way of conditional rendering.

### pricing.jsx

\_Lines 73 - 93

```
useLayoutEffect(() => {
    axios
      .get(domain+'/api/membership/purchase/user/'+userId)
      .then((res) => {
        if(res.data.data.length >0) {
          let current = new Date();
          let endDate = new Date(res.data.data[0].end_date);
          if(endDate>=current){
            navigate('/purchased-membership', {state: {'memberships': res.data.data}});
          }
          else{
            //cancel membership automatically
            cancelMembership();
          }
        }
        else{
          setRender(true);
        }
      })

}, []);
```

The code above was created by adapting the code in [StackOverflow](https://stackoverflow.com/questions/51741828/need-to-execute-function-before-render-in-reactjs) as shown below:

```
import React, { useLayoutEffect } from "react";
...
const App = () => {

  useLayoutEffect(() => {
      //check local token or something

  }, []);
}
```

- [StackOverflow](https://stackoverflow.com/questions/51741828/need-to-execute-function-before-render-in-reactjs) Code from this source is used to call an api before the component renders.

### checkout.jsx

\_Lines 142 - 225

```
switch (fieldName) {
      case 'firstName':
        setFirstName(value);
        updatedFormErrors.firstName = '';
        if (value === '' || value == null) {
          updatedFormErrors.firstName = "Please provide first name";
        }
        else {
          let isNameValid = value.match(/^(?![\s.]+$)[a-zA-Z\s.]*$/i);
          updatedFormErrors.firstName = isNameValid ? '' : 'Invalid characters';
        }
        break;
      case 'lastName':
        setLastName(value);
        updatedFormErrors.lastName = '';
        if (value === '' || value == null) {
          updatedFormErrors.lastName = "Please provide last name";
        }
        else {
          let isNameValid = value.match(/^(?![\s.]+$)[a-zA-Z\s.]*$/i);
          ...
          ...
          ...
      case 'country':
        setCountry(value);
        updatedFormErrors.country = '';
        if (value === '' || value == null) {
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
```

The code above was created by adapting the code in [Dev Community](https://dev.to/omnisyle/handle-form-and-validation-with-react-1a9p) as shown below:

```
onst validate = () => {
    const { validators } = formState;

    // always reset form errors
    // in case there was form errors from backend
    setFormState(state => ({
      ...state,
      errors: {}
    }));

    if (isEmpty(validators)) {
      return true;
    }

    const formErrors = Object.entries(validators).reduce(
      (errors, [name, validators]) => {
        const { data } = formState;
        const messages = validators.reduce((result, validator) => {
          const value = data[name];
          const err = validator(value, data);
          return [...result, ...err];
        }, []);

        if (messages.length > 0) {
          errors[name] = messages;
        }

        return errors;
      },
      {}
    );

    if (isEmpty(formErrors)) {
      return true;
    }

    setFormState(state => ({
      ...state,
      errors: formErrors
    }));

    return false;
  };
```

- [Dev Community](https://dev.to/omnisyle/handle-form-and-validation-with-react-1a9p) Code from source used to refere form validation to implement validation in the billing details form.

## Acknowledgments

- https://reactjs.org/docs/conditional-rendering.html
- https://stackoverflow.com/questions/51741828/need-to-execute-function-before-render-in-reactjs
- https://dev.to/omnisyle/handle-form-and-validation-with-react-1a9p
- https://mui.com/x/react-date-pickers/getting-started/
- https://mui.com/material-ui/react-typography/
- https://mongoosejs.com/docs/schematypes.html
- https://www.youtube.com/watch?v=W1Kttu53qTg
- https://github.com/akashyap2013/CRUD_Application_Node/blob/master/server.js
