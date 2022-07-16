import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React, { useEffect, useState } from 'react'
import blogs from '../../../blogs';
import { Box } from '@mui/system';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
/**
* @author
* @function YourBlogs
**/
const baseURL = "https://sportify-backend-prd.herokuapp.com/blogs/api/blogs/yourblog"
const YourBlogs = (props) => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(baseURL+ "/" + "b4ddb5c5-0676-41ae-b663-c90cc9189193").then((response) => {
            console.log(response.data);
            setData(response.data.data);
          });
    }, [])
    console.log(data);
    return (
        <Grid>
            <Grid item sx={{marginY:"4%",marginLeft:"20%",alignContent:"center"}}>
                        <Grid container direction="row"spacing={2} columns={12}>
                            <Grid item xs={6}>   
                         <Button sx={{width:"50%"}} variant="contained" onClick={() => {
                                navigate("/blogs");
                            }}>      
                         {/* <Link sx={{color:"white"}} to={
                                 {pathname:'/blogs'}
                              }> */}
                              All Blogs
                             {/* </Link> */}
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
                                {display.shortContent}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" onClick={() => {
                                navigate("/editblogs/"+display.id);
                            }}>Edit</Button>
                            <Button size="small">Delete</Button>
                                <IconButton aria-label="add to favorites">
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

export default YourBlogs;