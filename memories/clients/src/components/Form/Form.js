import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import FileBase from "react-file-base64"
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';

const Forms=()=>{
    const [postData,setPostData]=useState({creator:'',title:'',message:'',tags:'',selectedFile:''})
   const dispatch = useDispatch();

    const handleSubmit=async(e)=>{
        e.preventDefault()
        dispatch(createPost(postData))
    }

    const clear=()=>{

    }
    return(
        <Paper elevation={4}>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant="h6" sx={{paddingBottom:"10px"}}>Creating a memory</Typography>
                <TextField name="creator" sx={{paddingBottom:"10px"}} variant="standard" label="Creator" fullWidth value={postData.creator} onChange={(e)=>setPostData({...postData, creator:e.target.value})}/>
                <TextField name="title" sx={{paddingBottom:"10px"}} variant="standard" label="title" fullWidth value={postData.title} onChange={(e)=>setPostData({...postData, title:e.target.value})}/>
                <TextField name="message" sx={{paddingBottom:"10px"}} variant="standard" label="message" fullWidth value={postData.message} onChange={(e)=>setPostData({...postData, message:e.target.value})}/>
                <TextField name="tags"  sx={{paddingBottom:"10px"}} variant="standard" label="tags" fullWidth value={postData.tags} onChange={(e)=>setPostData({...postData, tags:e.target.value.split(',')})}/>
                <div sx={{paddingBottom:"10px"}}>
                    <FileBase type="file" multiple={false} onDone={({base64})=>setPostData({ ...postData,selectedFile:base64})}/>
                </div>
                <Button sx={{marginBottom:"10px"}} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button  variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Forms;