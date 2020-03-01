import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Layout
import Register from "../src/components/auth/Register";
import Login from "../src/components/auth/Login";
import Navbar from "../src/components/layout/Navbar";
import Landing from "../src/components/layout/Landing";
import Alert from "../src/components/layout/Alert";
import Dashboard from "../src/components/dashboard/Dashboard";
import PrivateRoute from "../src/components/routing/PrivateRoute";
import CreateProfile from "./components/profileForms/CreateProfile";
import EditProfile from "./components/profileForms/EditProfile";
import AddExperience from "./components/profileForms/AddExperience";
import AddEducation from "./components/profileForms/AddEducation";
import Profiles from "./components/profiles/Profiles";
import Profile from "./components/profile/Profile";

// Redux
import { Provider } from "react-redux";
import store from "./store";

// Utils
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";

import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />{" "}
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />{" "}
              <Route exact path="/login" component={Login} />{" "}
              <Route exact path="/profiles" component={Profiles} />{" "}
              <Route exact path="/profile/:id" component={Profile} />{" "}
              <PrivateRoute exact path="/dashboard" component={Dashboard} />{" "}
              <PrivateRoute
                exact
                path="/create-profile"
                component={CreateProfile}
              />{" "}
              <PrivateRoute
                exact
                path="/edit-profile"
                component={EditProfile}
              />{" "}
              <PrivateRoute
                exact
                path="/add-experience"
                component={AddExperience}
              />{" "}
              <PrivateRoute
                exact
                path="/add-education"
                component={AddEducation}
              />{" "}
            </Switch>{" "}
          </section>{" "}
        </Fragment>{" "}
      </Router>{" "}
    </Provider>
  );
};

export default App;
