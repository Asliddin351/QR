import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { AuthProvider } from "../contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Places from "../pages/Places";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <PrivateRoute path='/places'>
            <Places />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;
