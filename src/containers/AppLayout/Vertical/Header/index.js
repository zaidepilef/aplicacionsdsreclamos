import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import { COLLAPSED_DRAWER, FIXED_DRAWER } from "constants/ActionTypes";
import { toggleCollapsedNav, changeSidebar } from "actions/Setting";
// REDIRECT
import { home_redirect } from "constants/constants";

const Index = ({ history }) => {
  const dispatch = useDispatch();
  const { navCollapsed } = useSelector(({ common }) => common);
  const { drawerType, navbar_selected } = useSelector(
    ({ settings }) => settings
  );

  const [apps, setApps] = useState(false);

  const onAppsSelect = () => {
    setApps(!apps);
  };

  const onToggleCollapsedNav = e => {
    const val = !navCollapsed;
    dispatch(toggleCollapsedNav(val));
  };

  const onChangeSideBar = value => {
    if (navbar_selected === value) return;
    console.log(value);
    dispatch(changeSidebar(value));
    history.push(`${home_redirect}`);
    setApps(false);
  };

  const Apps = () => {
    return (
      <ul className="jr-list jr-list-half">
        <li className="jr-list-item">
          <div
            className={
              navbar_selected === "if" ? "jr-list-active-menu" : "jr-list-link"
            }
            onClick={() => onChangeSideBar("if")}
          >
            <i className="zmdi zmdi zmdi-storage zmdi-hc-fw" />
            <span className="jr-list-text">Admisibilidad IF</span>
          </div>
        </li>

        <li className="jr-list-item">
          <div
            className={
              navbar_selected === "ip" ? "jr-list-active-menu" : "jr-list-link"
            }
            onClick={() => onChangeSideBar("ip")}
          >
            <i className="zmdi zmdi zmdi-storage zmdi-hc-fw" />
            <span className="jr-list-text">Admisibilidad IP</span>
          </div>
        </li>
      </ul>
    );
  };

  const drawerStyle = drawerType.includes(FIXED_DRAWER)
    ? "d-block d-xl-none"
    : drawerType.includes(COLLAPSED_DRAWER)
    ? "d-block"
    : "d-none";

  return (
    <AppBar className="app-main-header">
      <Toolbar className="app-toolbar" disableGutters={false}>
        <IconButton
          className={`jr-menu-icon mr-3 ${drawerStyle}`}
          aria-label="Menu"
          onClick={onToggleCollapsedNav}
        >
          <span className="menu-icon" />
        </IconButton>

        <Link className="app-logo mr-2 d-none d-sm-block" to="/">
          <img
            src={require("assets/images/super.png")}
            alt="Apiux"
            title="Apiux"
          />
        </Link>

        <ul className="header-notifications list-inline ml-auto">
          <li className="list-inline-item">
            <Dropdown
              className="quick-menu app-notification"
              isOpen={apps}
              toggle={onAppsSelect}
            >
              <DropdownToggle
                className="d-inline-block"
                tag="span"
                data-toggle="dropdown"
              >
                <span className="app-notification-menu">
                  <i className="zmdi zmdi-apps zmdi-hc-fw zmdi-hc-lg" />
                  <span>Procesos</span>
                </span>
              </DropdownToggle>

              <DropdownMenu>{Apps()}</DropdownMenu>
            </Dropdown>
          </li>
        </ul>
        <div className="ellipse-shape" />
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Index);
