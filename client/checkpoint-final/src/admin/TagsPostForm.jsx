import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import { TextField, Box, Grid, Button } from '@material-ui/core';

const TagsPostForm = () => {
  const { handleSubmit, register } = useForm();
  const onSubmit = data => {
    const dataForms = {
      ...data
    };

    axios
      .post('/tags', dataForms)
      .then(res => res.data)
      .then(res => {
          if(window.confirm(`Le tag a bien été créé.`)) {
          document.location.reload(true);
          } else {
              document.location.reload(true);
          }
      })
      .catch(e => {
        console.error(e);
        alert(`Erreur concernant l'ajout d'une tag ${e.message}`);
      });
  };

  return (
    <Box p={2} bgcolor="background.paper" display="flex">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={9}>
            <TextField
              name="tag_name"
              inputRef={register}
              id="outlined-basic"
              label="Nom du tag"
              variant="outlined"
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Créer un nouveau tag
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default TagsPostForm;
