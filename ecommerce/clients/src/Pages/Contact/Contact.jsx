import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import Intro from '../../Components/Designs/IntroImg'

export default function Contact() {
    const ConDes = styled("div")(({ theme }) => ({
        display:"flex",
        padding:"20px 0px",
        justifyContent:"space-around",
        alignItems:"center",
        [theme.breakpoints.down('md')]: {
            flexDirection:"column"
          },
          [theme.breakpoints.up('md')]: {
            flexDirection:"row"
          },
          [theme.breakpoints.down('sm')]: {
            

          },
     }))
     const Map = styled("iframe")(({ theme }) => ({
        [theme.breakpoints.down('md')]: {
            width:850,
            height:300
          },
          [theme.breakpoints.up('md')]: {
            width:1550,
            height:500
          },
          [theme.breakpoints.down('sm')]: {
            width:370,
            height:300
          },
      }));
  return (
    <Box>
        <Intro img={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftwellium.com%2Fwp-content%2Fuploads%2F2019%2F07%2Fmag-1150x600.jpg&f=1&nofb=1"} details={"CONTACT"} color={"white"}/>
        <ConDes>
            <Box >
            <Typography variant="h4" fontWeight="500">
            Our address
            </Typography>
            <Typography variant="body">
            2816 Haul Road<br/>
Saint Paul, MN 55102
            </Typography>
            </Box>
            <Box sx={{margin:"30px 0px"}}>
            <Typography variant="h4" fontWeight="500">
            Contact us
            </Typography>
            <Typography variant="body">
            info@tangier.com<br/>
123-456-7890
            </Typography>
            </Box>
            <Box>
            <Typography variant="h4" fontWeight="500">
            Working hours
            </Typography>
            <Typography variant="body">
            Monday - Thursday 10:00 to 20:00<br/>
Friday - Saturday 11:00 to 21:00
            </Typography>
            </Box>
        </ConDes>
        <Box>
        <Map src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d63601.792787257524!2d-1.7845447664766303!3d4.920914777117126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sgh!4v1659055832960!5m2!1sen!2sgh"  style={{border:"0px"}} allowfullscreen="Yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
        </Box>
    </Box>
  )
}
