import { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Box, Button, Grid, TextField } from '@mui/material';
/**
* @author
* @function CreateBlog
**/

const EditBlog = (props) => {
    const [text, setText] = useState('');
    return (
        <div>
            <div>
                <Grid container direction="row" spacing={2} columns={12}
                >
                    <Grid item xs={6}>
                        <div className="createblog">
                            <h2>Create Blogs</h2>
                        </div>
                        <Box
                            sx={{
                                marginX: "15%",
                                marginY: "15%",
                                width: "70%",
                                height: "100%",
                                backgroundColor: '#DFF6FF',
                                '&:hover': {
                                    backgroundColor: '#DFF6FF',
                                    opacity: [0.9, 0.8, 0.7],
                                },
                            }}
                        >
                            <div>
                                <TextField fullWidth label="Title" id="fullWidth"
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
                                    data="<p>Hello from CKEditor 5!</p>"
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
                    <Grid item xs={6}>
                        <Grid container direction="column"spacing={2} columns={12}>
                            <Grid item xs={6}>
                            <Box
                            sx={{
                                marginX: "10%",
                                marginY: "15%",
                                paddingY:"25%"
                            }}
                        >
                         <Button sx={{width:"50%"}} variant="contained">Upload Blog image</Button>
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
                         <Button sx={{width:"50%"}} variant="contained">Create Blog</Button>
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