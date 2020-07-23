import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import "./admin.scss";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const PicsTab = (props) => {
  const { setUpdateMode, setPicToUpdate, picToUpdate, picsData } = props;
  const classes = useStyles();

  // Delete Podcast
  const DeletePic = (id) => {
    axios.delete(`/pics/${id}`).then((res) => {
        alert('Image supprimée avec succès')
    });
  };

  return (
    <Box mx="auto" mt={5}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="center">Image</TableCell>
              <TableCell align="center">Nom</TableCell>
              <TableCell align="center">Catégorie</TableCell>
              <TableCell align="center">Supprimer</TableCell>
              <TableCell align="center">Mettre à jour</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {picsData.map((pic) => (
              <TableRow key={pic.pic_name}>
                <TableCell component="th" scope="row">
                  {pic.pic_id}
                </TableCell>
                <TableCell align="center">
                  <div
                    className="coverProgram"
                    style={{
                      backgroundImage: `url(${pic.pic_link})`,
                    }}
                  />
                </TableCell>
                <TableCell align="center">{pic.pic_name}</TableCell>
                <TableCell align="center">{pic.cat_name}</TableCell>
                <TableCell align="center">
                  <IconButton
                    aria-label="delete"
                    className={classes.margin}
                    onClick={() => DeletePic(pic.pic_id)}
                  >
                    <DeleteIcon fontSize="large" />
                  </IconButton>
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    aria-label="edit"
                    className={classes.margin}
                    onClick={() => {
                      setPicToUpdate(pic.pic_id);
                      setUpdateMode(true);
                    }}
                  >
                    <EditIcon fontSize="large" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PicsTab;
