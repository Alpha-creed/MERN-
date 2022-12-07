import { Box, styled, Typography } from '@mui/material';
import React from 'react'

const ImgText = (props) => {
    const {img,head,content,imgTitle} =props

        //customization of content after into
        const ConDes = styled("div")(({ theme }) => ({
            display:"flex",
            padding:"30px 0",
            justifyContent:"center",
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
         const Img = styled("img")(({ theme }) => ({
            [theme.breakpoints.down('md')]: {
                width:850,
                // height:500
              },
              [theme.breakpoints.up('md')]: {
                width:760,
                height:300
              },
              [theme.breakpoints.down('sm')]: {
                width:370,
                height:300
              },
          }));
          const TextTypo=styled(Typography)(({ theme }) => ({
            [theme.breakpoints.down('md')]: {
                fontSize:"20px"
              
              },
              [theme.breakpoints.up('md')]: {
                padding:"30px 0"
              },
              [theme.breakpoints.down('sm')]: {
                fontSize:"15px"
    
              },
          }));
  return (
    <ConDes>
                <Box>
                  <Img src={img} alt={imgTitle}/>  
                </Box>
                <Box>
                <TextTypo variant='h4' fontWeight="1000">
                        {head}
                    </TextTypo>
                    <TextTypo variant='body'>
                {content}
                    </TextTypo>
                </Box>
            </ConDes>
  )
}

export default ImgText
