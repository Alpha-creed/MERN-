import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import FileBase64 from "react-file-base64"
import { useDispatch,useSelector} from 'react-redux';
import { createPost,updatePost } from '../../actions/posts';

const Forms=({currentId,setCurrentId})=>{
    const [postData,setPostData]=useState({creator:'',title:'',message:'',tags:'',selectedFile:''})
    const post = useSelector((state)=>currentId ? state.posts.find((p)=>p._id === currentId):null);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(post) 
            setPostData(post)
    },[post])
    const handleSubmit=async(e)=>{
        e.preventDefault()
        if(currentId){
            dispatch(updatePost(currentId,postData))
        }else{
            dispatch(createPost(postData))
        }
        clear()
    }

    const clear=()=>{ 
        setCurrentId(null)
        setPostData({creator:'',title:'',message:'',tags:'',selectedFile:''})
    }
    return(
        <Paper elevation={4}>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant="h6" sx={{paddingBottom:"10px"}}>{currentId?'Editing':'Creating'} a memory</Typography>
                <TextField name="creator" sx={{paddingBottom:"10px"}} variant="standard" label="Creator" fullWidth value={postData.creator} onChange={(e)=>setPostData({...postData, creator:e.target.value})}/>
                <TextField name="title" sx={{paddingBottom:"10px"}} variant="standard" label="title" fullWidth value={postData.title} onChange={(e)=>setPostData({...postData, title:e.target.value})}/>
                <TextField name="message" sx={{paddingBottom:"10px"}} variant="standard" label="message" fullWidth value={postData.message} onChange={(e)=>setPostData({...postData, message:e.target.value})}/>
                <TextField name="tags"  sx={{paddingBottom:"10px"}} variant="standard" label="tags" fullWidth value={postData.tags} onChange={(e)=>setPostData({...postData, tags:e.target.value.split(',')})}/>
                <div sx={{paddingBottom:"10px"}}>
                    <FileBase64 type="file" multiple={false} onDone={({base64})=>setPostData({ ...postData,selectedFile:base64})}/>
                </div>
                <Button sx={{marginBottom:"10px"}} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button  variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Forms;