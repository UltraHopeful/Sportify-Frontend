# CSCI 5709 Advanced Web Services Assignment 3

- _Date Created_: 15 July 2022
- _Last Modification Date_: 15 July 2022
- _Frontend URL_: <https://sportify-prd.herokuapp.com/>
- _Backend URL_: <https://sportify-backend-prd.herokuapp.com/>
- _Frontend Repository URL_: <https://git.cs.dal.ca/ajayanthi/5709-group10>
- _Frontend Repository My Branch URL_: <https://git.cs.dal.ca/ajayanthi/5709-group10/-/tree/navya_jayapal>
- _Backend Repository URL_: <https://git.cs.dal.ca/kabtiyal/5709-g10-sportify-backend>
- _Backend Repository My Branch URL_: <https://git.cs.dal.ca/kabtiyal/5709-g10-sportify-backend/-/tree/navya>

## Authors

- [Navya Jayapal (B00886554)] (mailto: nv408879@dal.ca) - _Developer_

## Assignment 3 - Blogging (Customer)

As part of assignment 3, This feature allows customers to engage in a blogging environment, only customers with membership plans can view and create blogs. The main goal is to create a healthy community where everyone can benefit from the other.

Navigation: Go to the following website URL and click on "Blogging" tab in Nav bar <https://sportify-prd.herokuapp.com/>

### Tasks

**Create Blogs** - This depicts the front-end of the blogging feature of our web application where users can select their blogs. Then the user can select create blog tab or view your blogs tab.After that create the contents of the blog and click create blog button.

**View the Blogs** - This depicts the front-end of blog feature of our web application where users can view the blogs. There they can select “View your blogs” feature. They can select the blog they are interested in and view the contents of the blog.

**Edit Blog** - 
The user can select the blog they want to edit by going into view your blog tab and edit the contents of the blog. 

**View your blogs** -
This depicts the front-end of blog feature of our web application
where users can view the blogs. There they can select “View your blogs” feature. They can select the blog they are interested in and view the contents of the blog.

**View All Blogs**-
This depicts the front-end of blog feature of our web application
where users can view the blogs. They can select the blog they are interested in and view the contents of the blog. Users can select their blogs and view them and give report and like/comment on the blog. Then the user can select create blog tab or view your blogs tab.


##  Backend Folder Structure
The backend server has the following folders:

1. The structure of the entities or data utilised in the programme is contained in the "models" folder.
blogs.js are the models used for the blogging functionality. Collection objects are exported from these files and imported in the controllers using  methods like save, findOneAndUpdate, find.

2. "routes" includes the application routes for GET, POST, PUT, and other HTTP requests.
The files in this folder define routes to a number of http methods.

3. The business logic is located in the "controllers" folder.
Index.js's execution control is transferred via routes to the controller.
Business logic is implemented on the obtained data when models have been loaded into controller JS files. 

# Frontend folder hierarchy
1. The project's dependencies are listed in package.json. 'App.js' is the next entry point after index.js. 
2. The "Theme" folder houses the website's overall colour scheme. 
3. The "assets" section includes static information, such as photos used on different web pages. 
4. Presentational components made up of static material are included in "components." 
5. "Pages" include stateful functional components that produce user interface elements in response to user interactions and state. 
6. The static data information required to be incorporated in the components is located in the "data" folder. 

## Authored files for system backend

- `index.js`
- `app.js`
- `controllers/Blogging/allblogs.js`
- `routes/blog.js`
- `models/Blogging/allblogs.js`

## Authored files for system frontend

- `pages/Blogging/CreateBlog.js`
- `pages/Blogging/Blogs.js`
- `pages/Blogging/BlogPost.js`
- `pages/Blogging/EditBlog.css`
- `pages/Blogging/YourBlogs.js`
- `Routes/index.js`

## Backend Built With

- [ExpressJS](https://expressjs.com/) - NodeJS to develop backend project
- [Mongoose](https://mongoosejs.com/) - Library to connect to mongodb

## Frontend Built With

- [ReactJS](https://reactjs.org/) - JS Library to develop the website
- [Material UI](https://mui.com/) - Used to develop responsive and styles UI components
- [Axios](https://axios-http.com/docs/intro) - Library to integrate the frontend project with backend

## Sources Used
* The app above was created by adapting the code in <https://www.bezkoder.com/react-hook-form-material-ui-validation/>
* The app above was created by adapting the code in <https://www.codegrepper.com/code-examples/whatever/yup+number+validation/>
* <https://www.codegrepper.com/code-examples/javascript/how+to+pass+value+to+another+page+in+react+js>
* <https://stackoverflow.com/questions/50135723/import-in-body-of-module-reorder-to-top-import-first-across-many-files>
* <https://stackabuse.com/how-to-make-put-http-request-with-axios/>
* <https://stackoverflow.com/questions/27934238/rendering-raw-html-with-reactjs>
* <https://www.codegrepper.com/code-examples/javascript/remove+html+tags+in+react+js>
* <https://stackoverflow.com/questions/62014165/ is-there-a-way-to-read-or-convert-object-received-by-request-with-fs-readfile>

## Acknowledgments

* Good knowledge due to assignment problem statement.
