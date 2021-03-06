import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PicsPage from './PicsPage';
import CategoriesPage from './CategoriesPage';

import TagsPage from './TagsPage';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100vh'
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Images" {...a11yProps(0)} />
        <Tab label="Catégories" {...a11yProps(1)} />
        <Tab label="Tags" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <PicsPage />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CategoriesPage />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TagsPage />
      </TabPanel>
      <span className="desktop-link">
        <Link className="link" to="/">
          <Button>Aller sur le site</Button>
        </Link>
      </span>
    </div>
  );
}
