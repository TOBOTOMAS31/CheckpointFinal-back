import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import CategoriesPostForm from "./CategoriesPostForm";
import CategoriesTab from "./CategoriesTab";

const CategoriesPage = () => {
  const [updateMode, setUpdateMode] = useState(false);
  const [categoryToUpdate, setCategoryToUpdate] = useState(null);
  const [categoriesList, setCategoriesList] = useState([]);

  // get all categories
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/category").catch((error) => {
        console.log(error.toJSON());
      });
      setCategoriesList(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <>
        <Container>
          <Paper elevation={2}>
            <CategoriesPostForm
              updateMode={updateMode}
              categoryToUpdate={categoryToUpdate}
            />
          </Paper>

          <Paper elevation={2}>
            <CategoriesTab
              updateMode={updateMode}
              categoryToUpdate={categoryToUpdate}
              categoriesList={categoriesList}
              setCategoriesList={setCategoriesList}
            />
          </Paper>
        </Container>
      </>
    </div>
  );
};

CategoriesPage.propTypes = {};

export default CategoriesPage;
