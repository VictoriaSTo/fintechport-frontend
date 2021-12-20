import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import anny from '../../assets/managment/anny.webp';
import { EmailRounded } from '@mui/icons-material';

export default function MediaCard(props) {
  const { image, name, surname, position, email } = props.manager;
  const apiUrl = 'http://localhost:1337';

  return (
    <Card 
      sx={{ 
        maxWidth: 345, 
        marginBottom: "5%", 
        marginTop: "5%",
        filter: "drop-shadow(0px 2px 6px rgba(68, 68, 68, 0.2))",
        ":hover": {
          filter: "drop-shadow(0px 4px 6px black)"
        }
      }}>
      <CardMedia
        component="img"
        height="280"
        image={`${apiUrl}${image[0].url}`}
        alt={surname}
        sx={{
          objectPosition: "top"
        }}
      />
      <CardContent>
        <h3>{name} {surname}</h3>
        <p>{position} <br/><span style={{color: "#08D9D6"}}>{email}</span></p>
      </CardContent>
    </Card>
  );
}