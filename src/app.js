import React, { useState } from "react";
import { BrowserRouter, Navigate, Routes } from "react-router-dom";
import Header from "./components/header";
import Navbar from "./components/navbar";
import { Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import RUDProduct from "./pages/RUDProduct";
import Category from "./pages/Category";
import Customer from "./pages/Customer";
import RUDCustomer from "./pages/RUDCustomer";
import Transactions from "./pages/Transactions";
import DetailTransaction from "./pages/DetailTransaction";
import Product from "./pages/Product";
import Login from "./pages/Login";

const App = () => {
  const [user, setUser] = useState({});

  return (
    <BrowserRouter>
      <Header user={user} />
      <Navbar user={user} />
      <Routes>
        <Route path="/" exact element={<Navigate to="/Login" />} />
        <Route
          path="/Login"
          exact
          element={
            user ? <Navigate to="/Dashboard" /> : <Login setUser={setUser} />
          }
        />
        <Route
          path="/Dashboard"
          exact
          element={!user ? <Navigate to="/Login" /> : <Dashboard />}
        />
        <Route
          path="/Product"
          exact
          element={!user ? <Navigate to="/Login" /> : <Product />}
        >
          <Route
            path="/Product/:Type"
            exact
            element={!user ? <Navigate to="/Login" /> : <RUDProduct />}
          />
          <Route
            path="/Product/:Type/:Id"
            exact
            element={!user ? <Navigate to="/Login" /> : <RUDProduct />}
          />
        </Route>
        <Route
          path="/Category"
          exact
          element={!user ? <Navigate to="/Login" /> : <Category />}
        />
        <Route
          path="/Customer"
          exact
          element={!user ? <Navigate to="/Login" /> : <Customer />}
        >
          <Route
            path="/Customer/:Id"
            exact
            element={!user ? <Navigate to="/Login" /> : <RUDCustomer />}
          />
        </Route>
        <Route
          path="/Transactions"
          exact
          element={!user ? <Navigate to="/Login" /> : <Transactions />}
        >
          <Route
            path="/Transactions/:Id"
            exact
            element={!user ? <Navigate to="/Login" /> : <DetailTransaction />}
          />
        </Route>

        <Route
          path="*"
          exact
          element={
            !user ? <Navigate to="/Login" /> : <Navigate to="/Dashboard" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;