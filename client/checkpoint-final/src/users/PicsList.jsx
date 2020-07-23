import React from 'react';
import { Container, Grid } from '@material-ui/core';
import PicCard from './PicCard';

const PicsList = props => {
  const { picsList, catSelected } = props;

  return (
    <div>
      <div>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {picsList.map(pic => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <PicCard pic={pic}
                  catSelected={catSelected} 
                  />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default PicsList;
