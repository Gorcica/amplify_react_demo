import { Box } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid';

// import SampleProductImage from '../../../sampleImages/sample_tshirt_men.png';

// eslint-disable-next-line
const ProductMainImage = ({pictureUrl}) => (
  <Box sx={{ flexGrow: 1, maxWidth: '100%' }}>
    <img src={pictureUrl} alt="" style={{ width: '100%', height: '100%' }} />
  </Box>
);

// eslint-disable-next-line
const ProductSubImage = ({pictureUrl, selectedPic, pictureIndex}) => (
  <Box sx={{ flexGrow: 1, maxWidth: '100%', justifyContent: 'center', display: 'flex', border: selectedPic === pictureIndex ? 'solid 1px' : 0}}>
    <img src={pictureUrl} alt="" style={{ width: '100%', height: '100%'}} />
  </Box>
);

/* eslint-disable */
const ImagesModule = ({pictures}) => {
  const [selectedPic, setSelectedPic] = React.useState(0);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center">
        <Grid item>
          <ProductMainImage pictureUrl={pictures[selectedPic].file_url} />
        </Grid>
        <Grid item>
          <Box sx={{ flexGrow: 1, maxWidth: '100%' }}>
            <Grid container spacing={1}>
              {pictures.map((picture, pictureIndex)=>(
                <Grid item xs={3} onClick={()=>setSelectedPic(pictureIndex)}>
                  <ProductSubImage pictureUrl={picture.file_url} selectedPic={selectedPic} pictureIndex={pictureIndex} />
                </Grid>
              ))}
              <Grid item xs={3}>
                <ProductMainImage />
              </Grid>
              <Grid item xs={3}>
                <ProductMainImage />
              </Grid>
              <Grid item xs={3}>
                <ProductMainImage />
              </Grid>
              <Grid item xs={3}>
                <ProductMainImage />
              </Grid>
              <Grid item xs={3}>
                <ProductMainImage />
              </Grid>
              <Grid item xs={3}>
                <ProductMainImage />
              </Grid>
              <Grid item xs={3}>
                <ProductMainImage />
              </Grid>
              <Grid item xs={3}>
                <ProductMainImage />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
);};

export default ImagesModule;
