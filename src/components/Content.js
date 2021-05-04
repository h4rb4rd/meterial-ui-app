import React from 'react';
import { Container, Typography, Grid, Button } from '@material-ui/core';

import Cards from './Cards';

const Content = () => {
  return (
    <div>
      <Container maxWidth="md">
        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
          Lorem, ipsum dolor.
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt fugiat officiis ipsa nulla deserunt vero quidem eaque,
          nostrum consequuntur officia error quibusdam velit animi perferendis fugit adipisci expedita provident doloremque?
        </Typography>
        <div>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="primary">
                Start Now
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                Learn More
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
      <Cards />
    </div>
  );
};
export default Content;
