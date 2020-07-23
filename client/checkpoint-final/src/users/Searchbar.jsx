/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Grid, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import './Searchbar.scss';

const AdvancedSearchSelect = (props) => {
    const { catSelected, setCatSelected, catList } = props;

  return (
    <div className="filter-bar">
      <Grid container direction="row" justify="flex-start" alignItems="center">
          <Grid xs={12} md={12} lg={12} >
            <FormControl variant="outlined" className="MuiFormControl-fullWidth">
              <InputLabel id="demo-simple-select-outlined-label" fullWidth>
                Catégories
              </InputLabel>

              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                label="catégorie"
                name="category_cat_id"
                value={catSelected}
                onChange={e => setCatSelected(e.target.value)}
              >
                  <MenuItem value=''>Toutes les photos</MenuItem>
                {catList.map(category => {
                  return <MenuItem value={category.cat_id}>{category.cat_name}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </Grid>
      </Grid>
    </div>
  );
};

export default AdvancedSearchSelect;
