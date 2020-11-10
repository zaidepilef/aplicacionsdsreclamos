import React, { useEffect } from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import URLSearchParams from "url-search-params";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Redirect, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IntlProvider } from "react-intl";
import "assets/vendors/style";
import defaultTheme from "./themes/defaultTheme";
import AppLocale from "../lngProvider";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { setInitUrl } from "../actions/Auth";
import RTL from "util/RTL";
import asyncComponent from "util/asyncComponent";
import { setDarkTheme, setThemeColor } from "../actions/Setting";
import AppLayout from "./AppLayout";

import { loadUser } from "actions/Auth";

const RestrictedRoute = ({ component: Component, access, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      access ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/signin",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const App = props => {
  const dispatch = useDispatch();
  const { locale, isDirectionRTL } = useSelector(({ settings }) => settings);
  const { access, initURL } = useSelector(({ auth }) => auth);
  const { match, location } = props;

  useEffect(() => {
    window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
    if (initURL === "") {
      dispatch(setInitUrl(props.history.location.pathname));
    }
    const params = new URLSearchParams(props.location.search);
    if (params.has("theme-name")) {
      dispatch(setThemeColor(params.get("theme-name")));
    }
    if (params.has("dark-theme")) {
      dispatch(setDarkTheme());
    }
  }, [
    dispatch,
    initURL,
    props.history.location.pathname,
    props.location.search
  ]);

  useEffect(() => {
    dispatch(loadUser());
  }, [access]);

  let applyTheme = createMuiTheme(defaultTheme);

  if (location.pathname === "/") {
    if (access === null) {
      return <Redirect to={"/signin"} />;
    } else if (initURL === "" || initURL === "/" || initURL === "/signin") {
      return <Redirect to={"/app/index"} />;
    } else {
      return <Redirect to={initURL} />
    }
  }
  if (isDirectionRTL) {
    applyTheme.direction = "rtl";
    document.body.classList.add("rtl");
  } else {
    document.body.classList.remove("rtl");
    applyTheme.direction = "ltr";
  }

  const currentAppLocale = AppLocale[locale.locale];
  return (
    <ThemeProvider theme={applyTheme}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <IntlProvider
          locale={currentAppLocale.locale}
          messages={currentAppLocale.messages}
        >
          <RTL>
            <div className="app-main">
              <Switch>
                <RestrictedRoute
                  path={`${match.url}app`}
                  access={access}
                  component={AppLayout}
                />
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route
                  component={asyncComponent(() =>
                    import("app/routes/extraPages/routes/404")
                  )}
                />
              </Switch>
            </div>
          </RTL>
        </IntlProvider>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

export default App;
