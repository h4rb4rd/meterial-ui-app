import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Container, Grid, Typography } from '@material-ui/core';
import Content from './Content';

const Main = () => {
  const useStyles = makeStyles((theme) => ({
    overlay: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      background: 'rgba(0,0,0,.3)',
    },
    mainFeaturesPost: {
      position: 'relative',
      color: theme.palette.common.white,
      marginBottom: theme.spacing(4),

      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
    mainFeaturesPostContent: {
      position: 'relative',
      padding: theme.spacing(6),
      marginTop: theme.spacing(6),
    },
  }));

  const classes = useStyles();
  const url = 'https://source.unsplash.com/random';

  return (
    <main>
      <Paper className={classes.mainFeaturesPost} style={{ backgroundImage: `url(${url})` }}>
        <Container maxWidth="lg">
          <div className={classes.overlay} />
          <Grid container>
            <Grid item md={6}>
              <div className={classes.mainFeaturesPostContent}>
                <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                  Lorem ipsum dolor!
                </Typography>
                <Typography variant="h5" color="inherit" paragraph>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste iusto nostrum sequi!
                </Typography>
                <Button variant="contained" color="secondary">
                  Learn More
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <Content />
    </main>
  );
};

export default Main;
