import { Container,AppBar,Typography,Grow,Grid, styled } from "@mui/material";
import Forms from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import memories from './images/mem.png'
import useStyles from './styles'
import { useDispatch } from "react-redux";
import {getPosts} from './actions/posts'
import { useEffect } from "react";
import { fetchPosts } from "./api";
import React from 'react'

// image within appbar
const Img = styled("img")(({ theme }) => ({
 marginLeft:"15px",
 width:"60px",
})); 
// text within appbar
const Text = styled("div")(({ theme }) => ({
    color:"cyan",
    ...theme.typography.h2,
    alignItems:"center"
   })); 
//  appbar
  const Appbar = styled(AppBar)(({ theme }) => ({
    borderRadius:15,
    margin:"30px 0",
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    postion:'static',
    background:"inherit",
})); 

const App =()=> {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    },[dispatch]);

    return (
        <Container maxWidth="lg">
            <Appbar>
                <Text >Memories</Text>
                <Img src={memories} alt="memories" />
            </Appbar>
            <Grow in sx={{marginTop:"120px"}}>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={4}>
                        <Grid item xs={12} sm={7} >
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Forms />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}
export default App;