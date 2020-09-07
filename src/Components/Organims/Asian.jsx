import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from '../Organims/Header';
import MainFeaturedPost from '../Organims/MainFeaturedPost';
import FeaturedPost from '../Organims/FeaturedPost';
import Main from '../Organims/Main';
import Sidebar from '../Organims/Sidebar';
import Footer from '../Organims/Footer';
import post1 from '../Organims/blog-post.1.md';
import post2 from '../Organims/blog-post.2.md';
import post3 from '../Organims/blog-post.3.md';
import Blogpost1 from './Blogpost1';
import InfoAsian from './InfoAsian';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));


const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'FASHION',
    date: 'Jul 25',
    description:
      'At Asian American Girl Club, All Are Welcome.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
    reference: "moda/asian"
  },
  {
    title: 'FASHION',
    date: 'Set 10',
    description:
      'Cardi B Takes Her Rightful Place on the Louvre.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',    
    reference: "moda/asian"
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function Asian() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          {/* <MainFeaturedPost post={mainFeaturedPost} /> */}
          {/* <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} reference={post.reference} />
            ))}
          </Grid> */}
          {/* <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="From the firehose" posts={posts} />
         
          </Grid> */}
            <Grid item xs={12} md={12}>
      <Typography variant="h6" gutterBottom>
        Fashion
      </Typography>
      <Divider />
       <InfoAsian />
    </Grid>
        </main>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </React.Fragment>
  );
}