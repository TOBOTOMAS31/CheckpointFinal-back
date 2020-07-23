/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import PicsPostForm from './PicsPostForm';
import PicsTab from './PicsTab';
import './admin.scss';

const ProgramPage = () => {
  const [updateMode, setUpdateMode] = useState(false);
  const [picToUpdate, setPicToUpdate] = useState(null);
  const [picsData, setPicsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/pics').catch(error => {
        return console.log(error.toJSON());
      });
      return setPicsData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="admin-pic">
      <>
        <Container>
          <Paper elevation={2}>
            <PicsPostForm
              updateMode={updateMode}
              picToUpdate={picToUpdate}
              picsData={picsData}
            />
          </Paper>
          <Paper elevation={2}>
            <PicsTab
              setUpdateMode={setUpdateMode}
              picToUpdate={picToUpdate}
              setPicToUpdate={setPicToUpdate}
              picsData={picsData}
            />
          </Paper>
        </Container>
      </>
    </div>
  );
};

ProgramPage.propTypes = {};

export default ProgramPage;
