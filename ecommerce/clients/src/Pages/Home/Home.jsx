import React from 'react';
import {Box, Button, styled, Typography} from '@mui/material';

export default function Home() {
    //Intro image
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
      //images of descriptive stuffs
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
      const ImgRev = styled("img")(({ theme }) => ({
        [theme.breakpoints.down('md')]: {
            width:850,
            // height:500
          },
          [theme.breakpoints.up('md')]: {
            width:260,
            height:100
          },
          [theme.breakpoints.down('sm')]: {
            width:370,
            height:300
          },
      }));
      //container of content within image
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
      //text of content within image
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
      //Text for heading
      const HeadTypo=styled(Typography)(({ theme }) => ({
        fontWeight:"1000",

        [theme.breakpoints.down('md')]: {
            fontSize:"30px",
        },
          [theme.breakpoints.up('md')]: {
          },
          [theme.breakpoints.down('sm')]: {
            fontSize:"20px",

          },
      }));
      //Text for content
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
     const ConRev = styled("div")(({ theme }) => ({
        display:"flex",
        padding:"30px 0",
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

      
  return (
    <Box>
        {/* Intro pic with content */}
        <Box sx={{position:"relative"}}>
        <IntroImg src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnutramanix.com%2Fwp-content%2Fuploads%2F2018%2F10%2Fshutterstock_762211207.jpg" alt="Man drinking water"/>
        <Imgstuf>
            <Typography variant='h4' fontWeight="1000" color="white" >
                Mineral Water & Drinks
            </Typography>
            <Typo variant='h5'sx={{padding:"20px 0"}} fontWeight="500" color="white">
                Delivered at your doorstep
            </Typo>
            <Button>
                Shop
            </Button>
        </Imgstuf>
        </Box>
        {/* images and thier description */}
        <Box>
            <ConDes>
            <Box >
            <HeadTypo variant='h4' fontWeight="500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </HeadTypo>
                    <TextTypo variant='body'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt earum nobis soluta deserunt nisi tempora esse fugit dolores libero vitae commodi nesciunt, quaerat animi tenetur id nemo ut harum. Quibusdam?
                    </TextTypo>
                </Box>
                <Box>
                    
                    <Img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FYogIv06lZFw%2Fmaxresdefault.jpg" alt="Rush Energy Drink"/>
                </Box>
              
            </ConDes>
            <ConDes>
                <Box>
                  <Img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fafiaghana.com%2Fwp-content%2Fuploads%2F2020%2F11%2Fmalta_ghana.jpg%3Fresize%3D503%252C586%26ssl%3D1&f=1&nofb=1" alt="Malt can"/>  
                </Box>
                <Box>
                <HeadTypo variant='h4'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </HeadTypo>
                    <TextTypo variant='body'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt earum nobis soluta deserunt nisi tempora esse fugit dolores libero vitae commodi nesciunt, quaerat animi tenetur id nemo ut harum. Quibusdam?
                    </TextTypo>
                </Box>
            </ConDes>
            <ConDes>
                <Box>
                    <Img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.multipacgh.com%2Fwp-content%2Fuploads%2F2015%2F11%2F15.png&f=1&nofb=1" alt=""/>
                </Box>
                <Box>
                    <Img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pcs.org%2Fassets%2FGhanaian-Cocktail-Blog_Banner_1200.jpg&f=1&nofb=1" alt=""/>
                </Box>
            </ConDes>
        {/* Customer Review */}
        <HeadTypo variant='h4'>
            Customers love our service
        </HeadTypo>
            <ConRev>
                <Box>
                    <ImgRev src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fcdn-prod.medicalnewstoday.com%2Fcontent%2Fimages%2Farticles%2F319%2F319373%2Fyoung-people-drinking.jpg%3Fw%3D1155%26h%3D1541&f=1&nofb=1"/>
                </Box>
                <Box>
                    <TextTypo variant='body2'>
                    “I love this product! I've gone through the entire collection and have not found one that I didn't like. Fantastic service and quick delivery as well.” — Alicia Brown
                    </TextTypo>
                </Box>
            </ConRev>
            <ConRev>
                <Box>
                    <ImgRev src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.huffpost.com%2Fgen%2F1899283%2Fimages%2Fo-PEOPLE-DRINKING-ALCOHOL-facebook.jpg&f=1&nofb=1"/>
                </Box>
                <Box>
                    <TextTypo variant='body2'>
                    “I’ve been buying these juices for a while now and it’s absolutely delicious and filling. So happy I discovered it!” — Ellen Carder
                    </TextTypo>
                </Box>
            </ConRev>
            <ConRev>
                <Box>
                    <ImgRev src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nydailynews.com%2Fresizer%2Fm4Le5HNQi0FmX0D4yS-p7_qwryc%3D%2F1400x0%2Fwww.trbimg.com%2Fimg-5b857afb%2Fturbine%2Fny-1535474416-eazpazywsa-snap-image&f=1&nofb=1"/>
                </Box>
                <Box>
                    <TextTypo variant='body2'>
                    “This product is amazing. Experience ordering and receiving products are more than exceptional. Thank you, highly recommending it.” — Francis Perry
                    </TextTypo>
                    
                </Box>
            </ConRev>
        </Box>

        <Box sx={{position:"relative"}}>
        <IntroImg src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftwellium.com%2Fwp-content%2Fuploads%2F2019%2F04%2Fbbb-960x600.jpg&f=1&nofb=1" alt="Don simon"/>
        <Imgstuf>
            <Button >
                Shop
            </Button>
        </Imgstuf>
        </Box>
    </Box>
  )
}
