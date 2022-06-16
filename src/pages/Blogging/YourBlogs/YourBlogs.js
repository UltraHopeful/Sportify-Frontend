import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, Box, Paper } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import Cards from '../../../components/Cards/Cards';

/**
* @author
* @function YourBlogs
**/




const YourBlogs = (props) => {
    return (
        <Grid container  spacing={2} columns={12}
                >
                    <Grid item xs={11}>
                        <div className="createblog">
                            <h2>Your Blogs</h2>
                        </div>
            <Box >
            <Grid container spacing={1}>
                <Grid container item spacing={1}>
                    <React.Fragment>
                        <Grid item xs={4}>

                            <Card sx={{ maxWidth: 345,marginX:"20%",marginY:"5%" }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                   
                                    image= {require('../../../assets/images/fruits.jpg')}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Edit</Button>
                                    <Button size="small">Delete</Button>
                                </CardActions>
                            </Card>

                        </Grid>
                        <Grid item xs={4}>

                            <Card sx={{ maxWidth: 345,marginY:"5%",marginX:"20%" }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image= {require('../../../assets/images/lady_weightlift.jpg')}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Edit</Button>
                                    <Button size="small">Delete</Button>
                                </CardActions>
                            </Card>

                        </Grid>
                        <Grid item xs={4}>

                            <Card sx={{ maxWidth: 345 ,marginY:"5%",marginX:"20%"}}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image= {require('../../../assets/images/fruits2.jpg')}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Edit</Button>
                                    <Button size="small">Delete</Button>
                                </CardActions>
                            </Card>

                        </Grid>
                    </React.Fragment>
                </Grid>
                <Grid container item spacing={3}>
                    <React.Fragment>
                        <Grid item xs={4}>

                            <Card sx={{ maxWidth: 345,marginX:"20%",marginY:"5%" ,marginX:"20%"}}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image= {require('../../../assets/images/fruits.jpg')}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                <Button size="small">Edit</Button>
                                    <Button size="small">Delete</Button>
                                </CardActions>
                            </Card>

                        </Grid>
                        <Grid item xs={4}>

                            <Card sx={{ maxWidth: 345 ,marginY:"5%",marginX:"20%"}}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image= {require('../../../assets/images/fruits2.jpg')}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                <Button size="small">Edit</Button>
                                    <Button size="small">Delete</Button>
                                </CardActions>
                            </Card>

                        </Grid>
                        <Grid item xs={4}>

                            <Card sx={{ maxWidth: 345,marginY:"5%",marginX:"20%" }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image= {require('../../../assets/images/fruits.jpg')}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                <Button size="small">Edit</Button>
                                    <Button size="small">Delete</Button>
                                </CardActions>
                            </Card>

                        </Grid>
                    </React.Fragment>
                </Grid>
                <Grid container item spacing={3} >
                    <React.Fragment>
                        <Grid item xs={4}>

                            <Card sx={{ maxWidth: 345,marginX:"20%",marginY:"5%"}}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image= {require('../../../assets/images/lady_weightlift.jpg')}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                <Button size="small">Edit</Button>
                                    <Button size="small">Delete</Button>
                                </CardActions>
                            </Card>

                        </Grid>
                        <Grid item xs={4}>

                        <Card sx={{ maxWidth: 345 ,marginY:"5%",marginX:"20%"}}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image= {require('../../../assets/images/fruits2.jpg')}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                <Button size="small">Edit</Button>
                                    <Button size="small">Delete</Button>
                                </CardActions>
                            </Card>


                        </Grid>
                        <Grid item xs={4}>

                        <Card sx={{ maxWidth: 345,marginY:"5%",marginX:"20%" }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image= {require('../../../assets/images/lady_weightlift.jpg')}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                <Button size="small">Edit</Button>
                                    <Button size="small">Delete</Button>
                                </CardActions>
                            </Card>


                        </Grid>
                    </React.Fragment>
                </Grid>
            </Grid>
        </Box>
                    </Grid>
                    
                </Grid>
        
    )

}

export default YourBlogs;