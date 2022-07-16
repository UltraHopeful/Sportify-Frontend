CSCI 5709 Advanced Web Services
Assignment 3

Author: Samarth Jariwala
Email: sm228153@dal.ca

1. URL'S:
Frontend URL: https://sportify-prd.herokuapp.com/


Backend URL: https://sportify-backend-prd.herokuapp.com/


Group Frontend Repository URL: https://git.cs.dal.ca/ajayanthi/5709-group10


Frontend Repository My Branch URL: https://git.cs.dal.ca/ajayanthi/5709-group10/-/tree/assignment3_samarth_jariwala


Group Backend Repository URL: https://git.cs.dal.ca/kabtiyal/5709-g10-sportify-backend


Backend Repository My Branch URL: https://git.cs.dal.ca/kabtiyal/5709-g10-sportify-backend/-/tree/samarth_jariwala

2. Search Function Tasks:
I have implemented Search function which searches the facility, merchandise, Event, Blogs.
As soon as user searches any of above, the result is generated according to search of user.

The search function provides option for registration of facility and view the particular blog.

The search function in the backend fetches all the data for facility, merchandise, blogs and displays in the search function.

3. Backend folder structure:

The model folder creates the model for the particular collection which is then used to fetch the data for other functions to be searched.

The routes folder contains search which is used to fetch all data for facilities, merchandise, blogs from the database.

index.js
app.js
routes/search.js

4. Frontend folder structure:
 
The search folder inside pages contains mainSearch, facilitySearch, eventSearch, merchandiseSearch, blogSearch.
The mainSearch is the main page of search and rest are the search for other functions.

pages/search/mainSearch.js
pages/search/facilitySearch.js
pages/search/eventSearch.js
pages/search/blogSearch.js
pages/search/merchandiseSearch.js

5. Backend Built With:
ExpressJS - NodeJS to develop backend project

Mongoose - Library to connect to mongodb, model data and perform ORM operations

Express-Validator - Dependency to validate request bodies

Cors - Library to enable cors

6. Frontend Built With:
ReactJS - JS Library to develop the website

Material UI - Used to develop responsive and styles UI components

Axios - Library to integrate the frontend project with backend