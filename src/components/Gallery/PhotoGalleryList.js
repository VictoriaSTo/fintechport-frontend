import { Grid } from "@mui/material";

import classes from './PhotoGalleryList.module.css';
import useFetch from '../../hooks/useFetch';
import LoadingSpinner from '../UI/LoadingSpinner';
import ServerError from '../../pages/HelperPages/ServerError';

const PhotoGalleryList = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const { loading, error, data } = useFetch(`${apiUrl}/photos`);

  if (loading) return <LoadingSpinner />
  if (error) return <ServerError />

  console.log(data)

  return (
    <div className={classes.gallery}>
        <h1 className={classes["gallery__title"]}>A portfolio of <br/> collaboration & innovation</h1>
        <p className={classes["gallery__subtitle"]}>We connect with talants, start-ups and organizations in a variety of ways. Explore our network of more than 500 contacts. </p>
      <div data-aos-duration="1000" data-aos="fade-up" data-aos-once="true">
      <Grid container spacing={8}>
         {data.map((photo) => {
          const {id, name, image, title, description } = photo
          return (
            <Grid item xs={12} md={4} key={id}>
              <article className={classes["gallery__photo"]}>
                <img src={`${apiUrl}${image[0].url}`} alt={name} className={classes.photo}/>
                <div className={classes["gallery__text"]}>
                  <h3>{title}</h3>
                  <h4>{description}</h4>
                </div>
              </article>
            </Grid>
          )
          })}
      </Grid>
      </div>
    </div>
  )
}

export default PhotoGalleryList;