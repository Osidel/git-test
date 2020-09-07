import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import MainFeaturedPost from "./MainFeaturedPost"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));
const mainFeaturedPost = {
    title: 'At Ally Makis Asian American Girl Club, All Are Welcome.',
    description:
      "I knew what it was like being thrown into activity after activity, hoping something would stick—and being disappointed when it didn't.",
    // image: 'https://source.unsplash.com/random',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/img-7421-1599076931.jpeg?resize=768:*',
    imgText: 'main image description',
    linkText: 'Continue reading…',
  };
  

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function InfoAsian() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      {/* <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
          At Ally Maki's Asian American Girl Club, All Are Welcome.
          </Typography>
        </Toolbar>
      </AppBar> */}
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
        <MainFeaturedPost post={mainFeaturedPost} />
          {/* <Container maxWidth="md">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Ally Maki
            </Typography>
            <Typography variant="h5" align="justify" color="textSecondary" paragraph>            
            Long before Ally Maki appeared in movies and TV shows like Toy Story 4, Cloak & Dagger, and Wrecked, the Japanese American actress was hitting the club. And no, not the high heels, music-blaring, vodka cran kind of club, but actual extracurriculars. "When I was younger, I was totally the club girl, and not the club girl who's going to the club, but the activities girl," she tells ELLE.com over Zoom. "My mom put me in every after school activity: Brownies, Girl Scouts, baseball, drama, everything."
            As a fellow club girl and Asian American, I knew what it was like being thrown into activity after activity, hoping something would stick—and being disappointed when it didn't. "In every club that was designed to be inclusive, I always felt excluded," Maki explains. "Now as an adult, I look back and I get it. It was because there was no one there who looked like me. There was no one there who shared that depth of experience and identity."
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container> */}
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    // image="https://source.unsplash.com/random"
                    image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/img-7421-1599076931.jpeg?resize=768:*"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>     
    </React.Fragment>
  );
}