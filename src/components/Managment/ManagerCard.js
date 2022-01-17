import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


export default function MediaCard(props) {
  const { image, name, surname, position, email } = props.manager;
  const apiUrl = process.env.REACT_APP_API_URL;

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
        image={image[0].url}
        alt={surname}
        sx={{
          objectPosition: "top"
        }}
      />
      <CardContent>
        <h3 class="heading-tertiary">{name} {surname}</h3>
        <p>{position} <br/><span style={{color: "#08D9D6"}}>{email}</span></p>
      </CardContent>
    </Card>
  );
}