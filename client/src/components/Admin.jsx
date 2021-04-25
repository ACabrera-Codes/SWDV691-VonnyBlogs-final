import React from "react";
import { Container, Grow, Grid } from '@material-ui/core';
import Form from './Form/Form';

const Admin = () => {
  return (
    <Container maxWidth="lg">
    <Grow in>
      <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={4}>
            <Form />
          </Grid>
          <Grid item xs={12} sm={4}>
          <h1 class="font-weight-light">Admin</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

          </Grid>
        </Grid>
      </Container>
    </Grow>
  </Container>
);
};

export default Admin;