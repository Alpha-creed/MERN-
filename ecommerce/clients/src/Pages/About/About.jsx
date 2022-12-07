import React from 'react'
import { Box, styled, Typography} from '@mui/material'
import Intro from '../../Components/Designs/IntroImg';
import TextImg from '../../Components/Designs/TextImg';
import ImgText from '../../Components/Designs/ImgText';


export default function About() {
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
  return (
    <Box>
   
        <Intro img={`https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.indesprocom.com%2Fwp-content%2Fuploads%2F2015%2F07%2Fbelaqua-grass.jpg&f=1&nofb=1`} color={`white`} details={`About`}/>
        <Box>
            <ImgText img={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcitinewsroom.com%2Fwp-content%2Fuploads%2F2019%2F01%2FWater-765x510.jpg&f=1&nofb=1"} imgTitle={"BelAqua"} head={"Our Mission"} content={"We understand the health and happiness value of tasty, organic juices. That’s why we’re proud to share our products with the world, safe in the knowledge we’re helping our customers enjoy every day to the max."}/>
            <Intro img={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmir-s3-cdn-cf.behance.net%2Fproject_modules%2F1400_opt_1%2F233cf438578765.5767cb78ef0e3.png&f=1&nofb=1"} color={"#FF1C1C"} details={"A passion For Healthy living"}/>
            <TextImg img={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Fde%2Fd6%2Fe9%2Fded6e94e9485d39894d10512ae8ab4dc.jpg&f=1&nofb=1"} imgTitle={"Malta Guinness"} head={"Our family recipes"} content={" All our juice mixes are based on old family recipes that have been honed over decades. We know our products are delicious because we created and tested them all ourselves. If you want to know more about our juices, feel free to reach out."}/>
        </Box>
    </Box>
  )
}
