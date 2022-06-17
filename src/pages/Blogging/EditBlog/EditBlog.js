import { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import blogsData from '../../../data/BlogsData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/**
* @author
* @function EditBlog
**/

const EditBlog = (props) => {

    const notify = () => toast("Under Construction as it involves database!");


    const navigate = useNavigate();
    let params = useParams();
    const resId = params.id;
    const details = blogsData.filter(res => res.id === (+resId));
    const answer = details[0];
    return (
        <div>
            <div>
                <Grid container direction="row" spacing={2} columns={12}
                >
                    <Grid item xs={8}>
                        <Box
                            sx={{
                                marginLeft: "15%",
                                marginY: "15%",
                                width: "80%",
                                height: "80%",
                                backgroundColor: '#DFF6FF',
                                '&:hover': {
                                    backgroundColor: '#DFF6FF',
                                    opacity: [0.9, 0.8, 0.7],
                                },
                            }}
                        >
                            <Typography  variant="h4" component="h2" sx={{display: 'flex', flexDirection:'row', justifyContent:"center",color:"#234c99"}} >
                         Edit Blog
                        </Typography>
                            <div>
                                <TextField fullWidth label="Title" id="fullWidth" defaultValue= {answer.title}
                                    sx={{
                                        marginX: "5%",
                                        marginY: "5%",
                                        width: "80%",
                                        backgroundColor: 'white',
                                        '&:hover': {
                                            backgroundColor: 'white',
                                            opacity: [0.9, 0.8, 0.7],
                                        },
                                    }}
                                />
                            </div>
                            <div className="gridmargins">
                                <CKEditor
                                    editor={ClassicEditor}
                                    data="The short answer is yes.Then why do commercials say you are wasting your time just doing cardio on the elliptical or treadmill, while basketball players and runners look so thin? The short answer is they want your money and are leaving details out by saying you won’t lose weight doing cardio to hook you to listen in and buy their products.
                                    
                                   There are 3 main ways I’ve lost weight, here is my article on those methods. One method that worked was to do cardio and watch my calories. I am a certified weight loss therapist and member of IAOTH. They tell you cardio is a“waste of time” to hook you into listening, becoming attached, convinced they are an expert and to buy. After you’ve bought it they tell you what you don’t want to hear, to watch your calories. Essentially the detail in the videos they leave out is you have to watch your caloric intake when you exercise, otherwise with no caloric deficit, cardio, HIIT or anything else won’t help you lose fat.
                                    
                                    The main successful method of weight loss regardless of how many details different people trying to sell you plans try to confuse you with is to have a calorie deficit. You already know that I’m sure, but many commercials and other articles confuse you and skew you off your path in hopes to sell you their products. So what these plans are leaving out in their commercials but eventually tell you when you buy it is that you have to watch your calories. Doing a lot of cardio without watching your calories probably wouldn’t help you very much if you’re not ending up in a deficit, that is true, however you don’t have to be a mega weightlifter to lose weight. You can lose fat not doing any exercise at all and most of the weight I’ve lost is strictly watching my diet. I talked about the three methods that I’ve actually used to lost weight and my article here if you want to look at the details.
                                    
                                    I hope you found this useful to clear out the confusing clutter that a lot of commercials try to hook you with. Cardio can be very useful in burning calories and burning fat, don’t leave it out of your regimen if you plan on using exercise in your weight loss journey. It’s also good for the heart, hence the term “cardio”. Looking for more advice or need an energy healing? Check out my offerings in the menu at the top of the page."
                                    onReady={editor => {
                                        // You can store the "editor" and use when it is needed.
                                        console.log('Editor is ready to use!', editor);
                                    }}
                                    onChange={(event, editor) => {
                                        const data = editor.getData();
                                        console.log({ event, editor, data });
                                    }}
                                    onBlur={(event, editor) => {
                                        console.log('Blur.', editor);
                                    }}
                                    onFocus={(event, editor) => {
                                        console.log('Focus.', editor);
                                    }}
                                />
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Grid container direction="column"spacing={2} columns={12}>
                            <Grid item xs={6}>
                            <Box
                            sx={{
                                marginX: "10%",
                                marginY: "15%",
                                paddingY:"25%"
                            }}
                        >
                         <Button sx={{width:"50%"}} variant="contained" onClick={notify}><ToastContainer />Upload Image</Button>
                        </Box>
                            
                            </Grid>
                            <Grid item xs={6}>
                            <Box
                            sx={{
                                marginX: "10%",
                                marginY: "5%",
                                paddingY:"25%"
                            }}
                        >
                         <Button sx={{width:"50%"}} variant="contained" onClick={notify}>Create Blog!</Button>
                        </Box>
                            </Grid>
                        </Grid>
                        
                    </Grid>
                </Grid>
            </div>

        </div>




    )

}



export default EditBlog;