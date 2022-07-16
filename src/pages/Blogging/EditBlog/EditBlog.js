import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';
import { useNavigate,useParams} from 'react-router-dom';
import { useEffect,useState} from 'react';
const parse = require('html-react-parser');
const { v4: uuidv4 } = require('uuid');
/**
* @author
* @function EditBlog
**/

const baseURL = "http://localhost:5000/blogs/api/blogs/blog"
const baseURL2= "http://localhost:5000/blogs/api/blogs/updateBlog"
const EditBlog = (props) => {
    
    const [data2, setData2] = useState([]);
    const [data, setData] = useState([]);// to fetrch the data from the database
    const [blogTitle,setBlogTitle] = useState([]);
    const [image, setImage] = useState(null);
    const notify = () => toast("Under Construction as it involves database!");
    const navigate = useNavigate();
    let params = useParams();
    const resId = params.id;
   
    useEffect(() => {
        axios.get(baseURL+ "/" + resId).then((response) => {
            console.log(response.data);
            response.data.data.blogContent = parse(response.data.data.blogContent);
            setData(response.data.data);
            console.log(data.blogContent)
          });
    }, [])

    const handleChange = (e) => {
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
        blogId: resId,
        blogContent: data2,
        blogTitle: blogTitle,
        blogImage:  image,
        shortContent : data.shortContent,
        userId : data.userId,
        timeStamp: Date.now().toString()
     }
     console.log({jsonData});
      
     axios.put(baseURL2,{jsonData})
      .then((response) => {
        navigate("/allblogs")
        console.log(response);
      }, (error) => {
        console.log(error);
      });


     }

    // const details = blogsData.filter(res => res.id === (+resId));
    // const answer = details[0];
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
                                <TextField fullWidth label="Title" id="fullWidth" defaultValue= {data.title}
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
                                    value = {blogTitle}
                                    onChange = {handleChange}
                                />
                            </div>
                            <div className="gridmargins">
                                <CKEditor
                                    editor={ClassicEditor}
                                    data={data.blogContent}
                                    onReady={editor => {
                                        // You can store the "editor" and use when it is needed.
                                        console.log('Editor is ready to use!', editor);
                                    }}
                                    onChange={(event, editor) => {
                                        console.log({ event, editor, data });
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
                                marginY: "15%",
                                paddingY:"25%"
                            }}
                        >
                        {/* // <Button sx={{width:"50%"}} variant="contained" onClick={notify}><ToastContainer />Upload Image</Button>
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
                         <Button sx={{width:"50%"}} variant="contained" onClick={myFunction}>Create Blog!</Button>
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