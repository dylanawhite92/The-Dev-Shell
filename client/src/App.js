import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  AddEducation,
  AddExperience,
  Alert,
  CreateProfile,
  EditProfile,
  Dashboard,
  Landing,
  Login,
  Navbar,
  NotFound,
  Post,
  Posts,
  PrivateRoute,
  Profile,
  Profiles,
  Register
} from "./components/index";
import "./App.css";
// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

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
        <>
          <Navbar />
          <Route exact path="/" component={Landing} />
        </>
      </Router>
    </Provider>
  );
};

export default App;
