import React from "react";
import Register from "../auth/Register";
import Login from "../auth/Login";
import Alert from "../layout/Alert";
import Notfound from "../layout/NotFound";
import Dashboard from "../dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import CreateProfile from "../profileForms/CreateProfile";
import EditProfile from "../profileForms/EditProfile";
import AddExperience from "../profileForms/AddExperience";
import AddEducation from "../profileForms/AddEducation";
import Profiles from "../profiles/Profiles";
import Profile from "../profile/Profile";
import Posts from "../posts/Posts";
import Post from "../post/Post";

import { Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />{" "}
        <Route exact path="/login" component={Login} />{" "}
        <Route exact path="/profiles" component={Profiles} />{" "}
        <Route exact path="/profile/:id" component={Profile} />{" "}
        <PrivateRoute exact path="/dashboard" component={Dashboard} />{" "}
        <PrivateRoute exact path="/create-profile" component={CreateProfile} />{" "}
        <PrivateRoute exact path="/edit-profile" component={EditProfile} />{" "}
        <PrivateRoute exact path="/add-experience" component={AddExperience} />{" "}
        <PrivateRoute exact path="/add-education" component={AddEducation} />{" "}
        <PrivateRoute exact path="/posts" component={Posts} />{" "}
        <PrivateRoute exact path="/posts/:id" component={Post} />{" "}
        <Route component={Notfound} />
      </Switch>{" "}
    </section>
  );
};

export default Routes;
