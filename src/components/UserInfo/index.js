import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import { useSelector, useDispatch } from "react-redux";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { userSignOut } from "actions/Auth";
import { NavLink } from "react-router-dom";

const UserInfo = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  const [anchorE1, setAnchorE1] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = event => {
    setOpen(true);
    setAnchorE1(event.currentTarget);
  };

  const handleRequestClose = () => {
    setOpen(false);
  };

  return (
    <div className="user-profile d-flex flex-row align-items-center">
      <Avatar
        alt="..."
        src={"https://via.placeholder.com/150x150"}
        className="user-avatar "
      />
      <div className="user-detail">
        <h4 className="user-name d-flex" onClick={handleClick}>
          <span className="text-truncate">
            {auth.user ? `${auth.user.username}` : "cargando..."}
          </span>
          <i className="zmdi zmdi-caret-down zmdi-hc-fw align-middle" />
        </h4>
      </div>
      <Menu
        className="user-info"
        id="simple-menu"
        anchorEl={anchorE1}
        open={open}
        onClose={handleRequestClose}
        PaperProps={{
          style: {
            minWidth: 120,
            paddingTop: 0,
            paddingBottom: 0
          }
        }}
      >
        <MenuItem onClick={handleRequestClose}>
          <NavLink to="/app/perfil" style={{ textDecoration: "none" }}>
            <i className="zmdi zmdi-account zmdi-hc-fw mr-2" />
            Perfil
          </NavLink>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleRequestClose();
            dispatch(userSignOut());
          }}
        >
          <i className="zmdi zmdi-sign-in zmdi-hc-fw mr-2" />
          Cerrar Sesión
        </MenuItem>
      </Menu>
    </div>
  );
};

export default UserInfo;
