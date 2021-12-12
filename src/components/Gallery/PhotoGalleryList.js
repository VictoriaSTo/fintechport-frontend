import { Grid } from "@mui/material";

import Wrapper from '../UI/WrapperNoColor';
import classes from './PhotoGalleryList.module.css';
import photosInfo from "./photosInfo";

const PhotoGalleryList = () => {
  return (
    <Wrapper className={classes.gallery}>
      <div className={classes["gallery__title"]}>
        <h2>SUCCESSFULL COLLABORATIONS</h2>
        <p>Confidential contents for your membership. Please do NOT repost this webpage.</p>
      </div>
      <div className={classes.gallery} data-aos-duration="1000" data-aos="fade-right" data-aos-once="true">
      <Grid container spacing={8}>
         {photosInfo.map((photo) => {
          const {id, name, image, title, desc } = photo
          return (
            <Grid item xs={12} md={4} key={id}>
              <article className={classes["gallery__photo"]}>
                <img src={image} alt={name} className={classes.photo}/>
                <div className={classes["gallery__text"]}>
                  <h3>{title}</h3>
                  <h4>{desc}</h4>
                </div>
              </article>
            </Grid>
          )
          })}
      </Grid>
      </div>
    </Wrapper>
  )
}

export default PhotoGalleryList;