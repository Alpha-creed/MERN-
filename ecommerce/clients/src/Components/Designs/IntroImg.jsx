import { Box, Button, styled, Typography } from '@mui/material'
import React from 'react'

const Intro = (props) => {
    const  {img,details,motor,product,color} = props
    const IntroImg = styled("img")(({ theme }) => ({
        [theme.breakpoints.down('md')]: {
            width:850,
            height:300
          },
          [theme.breakpoints.up('md')]: {
            width:1600,
            height:500
          },
          [theme.breakpoints.down('sm')]: {
            width:370,
            height:300
          },
      }));
      const Imgstuf= styled("div")(({ theme }) => ({
        backgroundColor: "",
        position:"absolute",
    
        [theme.breakpoints.down('md')]: {
            top:"50%",
            left:"50%",
            transform:"translate(-50%, -50%)",
          },
          [theme.breakpoints.up('md')]: {
            top:"50%",
            left:"50%",
            transform:"translate(-50%, -50%)",
          },
          [theme.breakpoints.down('sm')]: {
            top:"45%",
            left:"50%",
            transform:"translate(-50%, -50%)",
            
        },
      }));
      const Typo= styled(Typography)(({ theme }) => ({
        color:"white",
        [theme.breakpoints.down('md')]: {
            padding:"10px 0"
          },
          [theme.breakpoints.up('md')]: {
            padding:"30px 0"
          },
          [theme.breakpoints.down('sm')]: {
            padding:"15px 0"

          },
      }));
  return (
    <Box sx={{position:"relative"}}>
        <IntroImg src={img}/>
        <Imgstuf>
            <Typography variant='h4' fontWeight="1000" color={color} fontSize="50px">
                {details}
            </Typography>
            <Typo variant='h5'sx={{padding:"20px 0"}} fontWeight="500" color="white">
                {/* Delivered at your doorstep */}{motor}
            </Typo>
            <Button>
                {/* Shop */}{product}
            </Button>
        </Imgstuf>
    </Box>
  )
}

export default Intro
