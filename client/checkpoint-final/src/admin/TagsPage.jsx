import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import TagsPostForm from "./TagsPostForm";
import TagsTab from "./TagsTab";

const TagsPage = () => {
  const [updateMode, setUpdateMode] = useState(false);
  const [tagToUpdate, setTagToUpdate] = useState(null);
  const [tagsList, setTagsList] = useState([]);

  // get all tags
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/tags").catch((error) => {
        console.log(error.toJSON());
      });
      setTagsList(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <>
        <Container>
          <Paper elevation={2}>
            <TagsPostForm
              updateMode={updateMode}
              tagToUpdate={tagToUpdate}
            />
          </Paper>

          <Paper elevation={2}>
            <TagsTab
              updateMode={updateMode}
              tagToUpdate={tagToUpdate}
              tagsList={tagsList}
              setTagsList={setTagsList}
            />
          </Paper>
        </Container>
      </>
    </div>
  );
};

TagsPage.propTypes = {};

export default TagsPage;
