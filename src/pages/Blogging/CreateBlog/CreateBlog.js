import React, { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const { v4: uuidv4 } = require('uuid');

/**
* @author
* @function CreateBlog
**/

const baseURL = "http://localhost:5000/blogs/api/blogs/postBlog"
const CreateBlog = (props) => {
    const navigate = useNavigate();
    const notify = () => toast("Under Construction as it involves database!");
    const [data2, setData2] = useState([]);
    const [blogTitle,setBlogTitle] = useState([]);
    const [image, setImage] = useState(null);
    const [selectedFile,setSelectedFile] = useState([]);
    const shortContent = data2.toString().split(" ");
    var first_line = shortContent.slice(0,5).join(" ");

    const handleChange = (e) => {
     //   console.log(`Typed => ${e.target.value}`)
        setBlogTitle(e.target.value);
    }

    const fileSelectHandler = (e) =>{
        const img = e.target.files[0];
        const reader = new FileReader(img);
        reader.onload = () => {
            setImage(reader.result);
            console.log(reader.result);
        }
    }

    const myFunction = (e) =>{
     e.preventDefault();
     const jsonData = {
        blogId: uuidv4(),
        blogContent: data2,
        blogTitle: blogTitle,
        blogImage:  image,
        shortContent : first_line,
        userId : uuidv4(),
        timeStamp: Date.now().toString()
     }
     console.log({jsonData});
      
     axios.post(baseURL,{jsonData})
      .then((response) => {
        navigate("/yourblogs")
        console.log(response);
      }, (error) => {
        console.log(error);
      });


     }
    return (
        <div>
            <div>
                <Grid container direction="row" spacing={2} columns={12}
                >
                    <Grid item xs={8}>
                    
                        <Box
                            sx={{
                                marginLeft: "15%",
                                marginY: "20%",
                                width: "80%",
                                height: "100%",
                                backgroundColor: '#DFF6FF',
                                '&:hover': {
                                    backgroundColor: '#DFF6FF',
                                    opacity: [0.9, 0.8, 0.7],
                                },
                            }}
                        >   
                        <Typography  variant="h4" component="h2" sx={{display: 'flex', flexDirection:'row', justifyContent:"center",color:"#234c99"}} >
                         Create Blog
                        </Typography>
                            <div>
                                <TextField fullWidth label="Title" id="fullWidth"
                                    sx={{
                                        marginX: "8%",
                                        marginY: "5%",
                                        width: "80%",
                                        backgroundColor: 'white',
                                        '&:hover': {
                                            backgroundColor: 'white',
                                            opacity: [0.9, 0.8, 0.7],
                                        },
                                    }}
                                    value = {blogTitle}
                                    onChange = {handleChange}
                                />
                            </div>
                            <div className="gridmargins">
                                <CKEditor
                                    editor={ClassicEditor}
                                    data="Hello from CKEditor 5!"
                                    onReady={editor => {
                                        // You can store the "editor" and use when it is needed.
                                        console.log('Editor is ready to use!', editor);
                                    }}
                                    onChange={(event, editor) => {
                                        console.log('On change called'+editor.getData())
                                        setData2(editor.getData());
                                        console.log(data2);
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
                                marginTop: "25%",
                                paddingY:"25%"
                            }}
                        >
                         {/* <Button sx={{width:"50%"}} variant="contained" type="file" ><ToastContainer />Upload Blog image</Button>
                        </Box>
                            
                            </Grid>
                            <Grid item xs={6}>
                            <Box
                            sx={{
                                marginX: "10%",
                                marginY: "5%",
                                paddingY:"25%"
                            }}
                        > */}

                        <div>
                            <input type="file" onChange={fileSelectHandler}></input>
                            <button onClick={fileSelectHandler}/>
                        </div>
                         <Button sx={{width:"50%"}} variant="contained" onClick={myFunction}><ToastContainer />Create Blog</Button>
                        </Box>
                            </Grid>
                        </Grid>
                        
                    </Grid>
                </Grid>
            </div>

        </div>




    )

}



export default CreateBlog;