import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import PicsList from "./PicsList";
import { Container, Grid } from "@material-ui/core/";
import _ from 'lodash';

const Home = () => {
  const [picsList, setPicsList] = useState([]);
  const [catList, setCatList] = useState([]);
  const [catSelected, setCatSelected] = useState();
  const [tagSelected, setTagSelected] = useState();

  // récupérer toutes les photos avec ou sans filtre
  useEffect(() => {
    const fetchData = async () => {
      const resultTagSelected = tagSelected
      ? await axios.get(`/pics?tag=${tagSelected}`).catch(function(error) {
        console.log(error.toJSON());
      })
    : [];
    const resultCatSelected = catSelected
      ? await axios.get(`/pics?category=${catSelected}`).catch(function(error) {
        console.log(error.toJSON());
      })
    : [];
      if (catSelected && tagSelected) {
        const results = _.intersectionWith(
          resultTagSelected.data,
          resultCatSelected.data,
          _.isEqual
        );
        setPicsList(results);
      }
      else if (catSelected && !tagSelected) {
        return setPicsList(resultCatSelected.data);
      } else if (tagSelected && !catSelected) {
        return setPicsList(resultTagSelected.data);
      }
    };
    fetchData();
  }, [catSelected, tagSelected]);

  // récupérer toutes les catégories
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/category").catch((error) => {
        console.log(error.toJSON());
      });

      setCatList(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid xs={12} md={3} lg={2}>
            <Searchbar
              catList={catList}
              catSelected={catSelected}
              setCatSelected={setCatSelected}
            />
          </Grid>
          <Grid lg={10} xs={12} md={12}>
            <PicsList picsList={picsList} catSelected={catSelected} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
