import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";

const ScrollableTabs = ({ tabOptions = ['Tab'], tabSelect, setTab }) => {
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
          variant="fullWidth"
          scrollButtons="auto"
        > 
          {tabOptions.map((tabOption, index) => (
            <Tab key={index} label={tabOption} />
          ))}
        </Tabs>
      </AppBar>
    </div>
  );
};

ScrollableTabs.propTypes = {
  tabOptions: PropTypes.array.isRequired,
  tabSelect: PropTypes.number.isRequired,
  setTab: PropTypes.func.isRequired
};

export default ScrollableTabs;
