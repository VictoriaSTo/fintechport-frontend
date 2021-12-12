import * as React from 'react';
import { styled } from '@mui/material/styles';

import bluehand from '../../assets/bluehand2.jpg';
import bluenet from "../../assets/bluenet.jpg";


import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';

export default function RecipeReviewCard() {


  return (
    <Card >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#4a3c45" }} aria-label="event">
            E
          </Avatar>
        }
        title="Connect to the Future 2021"
        subheader="October 14, 2021"
      />
      <CardMedia
        component="img"
        // height="250"
        image={bluenet}
        alt="Paella dish"
      />
    </Card>
  );
}