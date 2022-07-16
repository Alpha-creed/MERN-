
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from './mem.png'
 import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment'
import './Style.css'



const Post=({post,setCurrentId})=> {
  return (
    <Card sx={{ maxWidth: 345 }} className="card">
      <CardMedia
        component="img"
        height="140"
        image={post.selectedFile}
        title={post.title}
        alt={post.title}
      />
        <div className='overlay'>
             <Typography variant="h6">{post.creator}</Typography>
             <Typography variant="body2">{moment(post.createdAt).fromNow() }</Typography>
         </div>
         <div className='overlay2'>
             <Button style={{color:"white"}} size="small" onClick={()=>{setCurrentId(post._id)}}>
                 <MoreHorizIcon fontSize="large"/>
             </Button>
         </div>
         <div className='details'>
             <Typography variant='body2' color="textSecondary">{post.tags.map((tag)=> `#${tag} `)}</Typography>
         </div>
         <Typography className="title" gutterBottom variant="h5" component="h2">{post.title}</Typography>
      <CardContent>
               <Typography variant='h5' gutterBottom>{post.message}</Typography>

      </CardContent>
      <CardActions>
      <Button size="small" color="primary" onClick={()=>{}}>
                 <ThumbUpAltIcon fontSize="small"/>
                 Like
                 {post.likeCount}
             </Button>
             <Button size="small" color="primary" onClick={()=>{}}>
                 <DeleteIcon fontSize="small"/>
                             Delete
            </Button>
      </CardActions>
    </Card>
  );
}
export default Post