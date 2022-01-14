import { Grid } from "@mui/material";
import useFetch from '../../hooks/useFetch';
import ServerResponseStatus from '../../pages/HelperPages/ServerResponseStatus';

const PhotoGalleryList = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const { loading, error, data } = useFetch(`${apiUrl}/photos`);

  if (loading || error) return <ServerResponseStatus loading={loading} error={error} />

  return (
    <div class="section-gallery">
        <h1 class="heading-secondary u-margin-bottom-small">A portfolio of <br/> collaboration & innovation</h1>
        <p class="u-margin-bottom-big">We connect with talants, start-ups and organizations in a variety of ways. Explore our network of more than 500 contacts. </p>
      <div data-aos-duration="1000" data-aos="fade-up" data-aos-once="true">
      <Grid container spacing={8}>
         {data.map((photo) => {
          const {id, name, image, title, description } = photo
          return (
            <Grid item xs={12} md={4} key={id}>
              <article class="photo">
                <img src={image[0].url} alt={name} class="photo__image"/>
                <div class="photo__text">
                  <h3 class="photo__text--main">{title}</h3>
                  <h4 class="photo__text--sub">{description}</h4>
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