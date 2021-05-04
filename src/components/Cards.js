import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Card, CardMedia, CardContent, CardActions, Button, Typography } from '@material-ui/core';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import LayerIcon from '@material-ui/icons/Layers';

const Cards = () => {
  const cardsList = [1, 2, 3, 4, 5, 6];
  const useStyles = makeStyles((theme) => ({
    cardGrid: {
      marginTop: theme.spacing(4),
    },
    cardMedia: {
      paddingTop: '56.25%',
    },
    cardContent: {
      flexGrow: 1,
    },
  }));

  const classes = useStyles();
  const url = 'https://source.unsplash.com/random';

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {cardsList.map((card) => {
          return (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} image={url} title="Image title" />
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5" gutterBottom>
                    Blog Post
                  </Typography>
                  <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, reiciendis?</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                  <LayerIcon />
                  <PlayCircleFilledIcon />
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
export default Cards;
