import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import CircularProgress from "@material-ui/core/CircularProgress";
import { showAuthLoader, userSignIn } from "actions/Auth";

const SignIn = ({ history }) => {
  const dispatch = useDispatch();
  const { loader, alertMessage, showMessage, access } = useSelector(
    ({ auth }) => auth
  );

  const [auth, setAuth] = useState({
    username: "",
    password: ""
  });

  const onChange = e => setAuth({
    ...auth,
    [e.target.name]: e.target.value 
  });

  useEffect(() => {
    if (access !== null) {
      history.push("/");
    }
  }, [access]);

  return (
    <div className="app-login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
      <div className="app-login-main-content">
        <div className="app-logo-content d-flex align-items-center justify-content-center">
          <Link className="logo-lg" to="/" title="Super">
            <img
              src={require("assets/images/super.png")}
              alt="super"
              title="super"
            />
          </Link>
        </div>

        <div className="app-login-content">
          <div className="app-login-header mb-4">
            <h1>Login</h1>
          </div>

          <div className="app-login-form">
            <form>
              <fieldset>
                <TextField
                  inputProps={{ maxLength: 40 }}
                  label="Username"
                  fullWidth
                  onChange={onChange}
                  value={auth.username}
                  margin="normal"
                  name="username"
                  className="mt-1 my-sm-3"
                />
                <TextField
                  type="password"
                  label="Password"
                  fullWidth
                  onChange={onChange}
                  value={auth.password}
                  name="password"
                  margin="normal"
                  className="mt-1 my-sm-3"
                />

                <div className="mb-3 d-flex align-items-center justify-content-between">
                  <Button
                    onClick={() => {
                      dispatch(showAuthLoader());
                      dispatch(userSignIn(auth.username, auth.password));
                    }}
                    variant="contained"
                    color="primary"
                  >
                    Login
                  </Button>

                  <Link to="/signup">Cambiar contraseña</Link>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      {loader && (
        <div className="loader-view">
          <CircularProgress />
        </div>
      )}
      {showMessage && NotificationManager.error(alertMessage)}
      <NotificationContainer />
    </div>
  );
};

export default SignIn;
