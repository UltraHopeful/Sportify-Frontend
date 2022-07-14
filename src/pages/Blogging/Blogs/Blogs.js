import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React, { useEffect, useState } from 'react'
import blogs from '../../../blogs';
import { Box } from '@mui/system';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
* @author
* @function Blogs
**/

const Blogs = (props) => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const notify = () => toast("Successfully liked this post!");
    useEffect(() => {
        setData(require('../../../blogs'));
        // console.log(data);
    }, [])
    // console.log(data);
    // sx={{ maxWidth: 345,marginX:"20%",marginY:"5%" }}
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
                                image={require(`../../../assets/images/${display.image}`)}
                                alt={display.id}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {display.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                {display.shortContent}
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