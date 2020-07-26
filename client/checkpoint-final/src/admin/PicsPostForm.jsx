import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

import {
  Input,
  TextField,
  Box,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  Button,
  FormControl,
  Chip,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 500,
    maxWidth: 500,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const PicsPostForm = (props) => {
  const { updateMode, picToUpdate } = props;

  // Get Category
  const [categorys, setCategorys] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/category").catch((error) => {
        return console.log(error.toJSON());
      });
      return setCategorys(result.data);
    };
    fetchData();
  }, []);

  // Get tags
  const [tags, setTags] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/tags").catch((error) => {
        return console.log(error.toJSON());
      });
      return setTags(result.data);
    };
    fetchData();
  }, []);

  const { handleSubmit, register, control } = useForm();
  const classes = useStyles();

  const [tagName, setTagName] = React.useState([]);

  const handleChange = event => {
    const tagId = event.target.value;
    setTagName(tagId);
  };

  const onSubmit = (data) => {
    if (!updateMode) {
      const dataForms = {
        ...data,
        tags_tag_id: tagName
      };
      axios
        .post("/pics", dataForms)
        .then((res) => res.data)
        .then((res) => {
          alert(`L'image a bien été ajoutée`);
        })
        .catch((e) => {
          console.error(e);
          alert(`Erreur concernant l'ajout de l'image`);
        });
    } else if (updateMode) {
      const dataForms = {
        ...data,
        tags_tag_id: tagName
      };
      axios
        .put(`/pics/${picToUpdate}`, dataForms)
        .then(res => res.data)
        .then(res => {
          alert(`Photo est modifiée avec succès'`);
        })
        .catch(e => {
          console.error(e);
          alert(`Erreur concernant la modification  de la photo ${e}`);
        });
    }
    document.location.reload(true);
  };

  return (
    <Box p={2} bgcolor="background.paper" display="flex">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              name="pic_name"
              inputRef={register}
              id="outlined-basic"
              label="Nom de l'image"
              variant="outlined"
              fullWidth
            />
          </Grid>
          {/* <Grid item xs={12}>
            <TextField
              name="pic_description"
              inputRef={register}
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
            />
          </Grid> */}
          <Grid item xs={6}>
            <TextField
              name="pic_link"
              type="text"
              label="Url de l'image"
              inputRef={register}
              id="outlined-basic"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl
              variant="outlined"
              className="MuiFormControl-fullWidth"
            >
              <InputLabel id="demo-simple-select-outlined-label" fullWidth>
                Catégorie
              </InputLabel>

              <Controller
                as={
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    label="Catégorie"
                  >
                    {categorys.map((category) => {
                      return (
                        <MenuItem value={category.cat_id}>
                          {category.cat_name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                }
                name="category_cat_id"
                control={control}
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-mutiple-chip-label">Tags</InputLabel>
              <Select
                inputRef={register}
                labelId="demo-mutiple-chip-label"
                id="demo-mutiple-chip"
                multiple
                value={tagName}
                onChange={handleChange}
                input={<Input id="select-multiple-chip" />}
                renderValue={selected => (
                  <div className={classes.chips}>
                    {selected.map((value, i) => (
                      <Chip key={value.tag_id} label={value.tag_name} className={classes.chip} />
                    ))}
                  </div>
                )}
                MenuProps={MenuProps}
              >
                {tags.map(tag => (
                  <MenuItem key={tag.tag_id} value={tag}>
                    {`${tag.tag_id} - ${tag.tag_name}`}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              {updateMode ? "Mettre à jour l'image" : "Ajouter l'image"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default PicsPostForm;
