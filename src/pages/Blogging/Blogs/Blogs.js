import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React, { useEffect, useState } from 'react'
import blogs from '../../../blogs';
import { Box } from '@mui/system';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import renderHTML from 'react-render-html';

/**
* @author
* @function Blogs
**/
///api/blogs/allblogs
const baseURL = "http://localhost:5000/blogs/api/blogs/allblogs"
const Blogs = (props) => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const notify = () => toast("Successfully liked this post!");
    const removeHTML= (str) =>{ 
        var tmp = document.createElement("p");
        tmp.innerHTML = str;
        return tmp.innerText;
    };
    useEffect(() => {
        axios.get(baseURL).then((response) => {
            console.log(response.data);
            response.data.data.shortContent= removeHTML(response.data.data[0].shortContent);
            setData(response.data.data);
            console.log(response.data.data[0].shortContent);
          });
       // setData(require('../../../blogs'));
    }, [])
    return (
        <Grid>
            <Grid item sx={{marginY:"4%",marginLeft:"20%",alignContent:"center"}}>
                        <Grid container direction="row"spacing={2} columns={12}>
                            <Grid item xs={6}>   
                          <Button sx={{width:"50%"}} variant="contained" onClick={() => {
                                navigate("/yourblogs");
                            }}>      
                            Your Blogs
                        </Button>
                            </Grid>
                            <Grid item xs={6}>
                           
                         <Button sx={{width:"50%"}} variant="contained" onClick={() => {
                                navigate("/createblog");
                            }}>
                         
                            Create Blog
                             
                         </Button>
                       
                            </Grid>
                        </Grid>
                        
                        
                    </Grid>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {data.map((display, index) => (
                <Grid item xs={12} sm={4} md={4} key={index}>
                    <Card sx={{ maxWidth: 345, marginY: "5%", marginLeft: "15%" ,marginRight:"10%",}}>
                        <CardActionArea onClick={() => {
                                navigate("/blogpost/"+display.id);
                            }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={display.blogImage}
                                alt={display.id}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {display.blogTitle}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                 {renderHTML(display.shortContent)}
                                </Typography>
                            </CardContent>
                            

                        </CardActionArea>
                        <CardActions>
                                <IconButton aria-label="add to favorites" onClick={notify}>
                                <ToastContainer />
                                    <FavoriteIcon />
                                </IconButton>
                         </CardActions>

                    </Card>
                </Grid>
            ))}
        </Grid>
        </Grid>
        
    )

}

export default Blogs;