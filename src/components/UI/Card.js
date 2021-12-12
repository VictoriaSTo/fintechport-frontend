import * as React from 'react';
import { styled } from '@mui/material/styles';

import bluehand from '../../assets/bluehand2.jpg';
import bluenet from "../../assets/bluenet.jpg";


import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function RecipeReviewCard() {


  return (
    <Card >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#4a3c45" }} aria-label="event">
            E
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="Connect to the Future 2021"
        subheader="October 14, 2021"
      />
      <CardMedia
        component="img"
        // height="250"
        image={bluenet}
        alt="Paella dish"
      />
      {/* <CardContent>
        <p>2021 Double Innovation Week Event Zhongdian Zhigu Rongtong Innovation Robotics Technology Forum</p>
      </CardContent> */}
    </Card>
  );
}

{/* <img src={bluehand} alt="Nvidia logo" className={classes["image-card"]}/>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
<p className={classes.link}>Learn more</p> */}