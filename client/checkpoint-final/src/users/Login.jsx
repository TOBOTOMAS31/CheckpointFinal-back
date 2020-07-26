import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { TextField, Box, Grid, Button } from '@material-ui/core';

const LoginPage = (props) => {
    const { redirection, setRedirection } = props;

  const { handleSubmit, register } = useForm();

  const onSubmit = data => {
    const dataForms = {
      ...data
    };
    axios
      .post('/login', dataForms)
      .then(res => res.data)
      .then(res => {
        if (res.message === 'OK') {
          return setRedirection({
            redirection: true
          });
        }
      })
      .catch(e => {
        console.error(e);
        alert('Mauvais mot de passe ou mauvais email');
      });
  };

  return (
    <Box p={2} bgcolor="background.paper" display="flex">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={9}>
            <TextField
              name="admin_mail"
              inputRef={register}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={9}>
            <TextField
              name="admin_password"
              inputRef={register}
              id="outlined-basic"
              label="Mot de passe"
              variant="outlined"
              type="password"
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            {redirection && <Redirect to="/admin" />}
            <Button type="submit" variant="contained" color="primary">
              Se connecter
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default LoginPage;