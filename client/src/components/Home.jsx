import React from 'react';
import { Container, Grow, Grid } from '@material-ui/core';

// import { getPosts } from '../actions/posts';
// import Posts from './Posts/Posts';

const Home = () => {
 
  return (
    <Container maxWidth="lg">
    <Grow in>
      <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>
          {/* <Posts  /> */}
          </Grid>
          <Grid item xs={12} sm={4}>
          <h1 className="font-weight-light">How About We Blog About It!?</h1>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  </Container>
);
};

export default Home;