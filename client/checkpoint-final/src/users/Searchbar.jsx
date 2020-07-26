/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Grid, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import './Searchbar.scss';

const AdvancedSearchSelect = (props) => {
    const { catSelected, setCatSelected, catList, tagSelected, setTagSelected,
    tagList } = props;

    return (
    <div className="filter-bar">
      <Grid container direction="row" justify="flex-start" alignItems="center">
          <Grid xs={6} sm={6} md={12} lg={12} >
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
                className="cat-select"
              >
                  <MenuItem value=''>Toutes les photos</MenuItem>
                {catList.map(category => {
                  return <MenuItem value={category.cat_id}>{category.cat_name}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </Grid>

          <Grid xs={6} sm={6} md={12} lg={12} >
            <FormControl variant="outlined" className="MuiFormControl-fullWidth">
              <InputLabel id="demo-simple-select-outlined-label" fullWidth>
                Tags
              </InputLabel>

              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                label="tag"
                name="tags_tag_id"
                value={tagSelected}
                onChange={e => setTagSelected(e.target.value)}
              >
                  <MenuItem value=''>Toutes les photos</MenuItem>
                {tagList.map(tag => {
                  return <MenuItem value={tag.tag_id}>{tag.tag_name}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </Grid>
      </Grid>
    </div>
  );
};

export default AdvancedSearchSelect;
