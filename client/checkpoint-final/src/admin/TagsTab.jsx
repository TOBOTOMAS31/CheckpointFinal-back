import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
  table: {
    minWidth: 150
  }
});

const CategorieTab = props => {
  const { tagsList, setTagsList } = props;

  const classes = useStyles();

  // Delete tag
  const DeleteTag = id => {
    axios.delete(`/tags/${id}`).then(res => {});
  };

  return (
    <Box mx="auto" mt={2}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="center">Tag</TableCell>
              {/* <TableCell align="center">Supprimer</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {tagsList.map(tag => (
              <TableRow key={tag.tag_name}>
                <TableCell component="th" scope="row">
                  {tag.tag_id}
                </TableCell>
                <TableCell align="center">{tag.tag_name}</TableCell>
                {/* <TableCell align="center">
                  <IconButton
                    aria-label="delete"
                    className={classes.margin}
                    onClick={() => DeleteCategories(categories.cat_id)}
                  >
                    <DeleteIcon fontSize="large" />
                  </IconButton>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CategorieTab;
