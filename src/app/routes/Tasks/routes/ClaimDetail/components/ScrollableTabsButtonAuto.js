import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const ScrollableTabsButtonAuto = ({tabSelect, setTab}) => {

  const handleChange = (event, value) => {
    setTab(value);
  };

    return (
      <div className="w-100">
        <AppBar position="static" color="inherit">
          <Tabs
            value={tabSelect}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Acciones"/>
            <Tab label="Caratula"/>
            <Tab label="Expediente"/>
            <Tab label="Observaciones"/>
            <Tab label="Historia"/>
          </Tabs>
        </AppBar>
      </div>
    );
  }


export default ScrollableTabsButtonAuto;