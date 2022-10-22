import React, { useEffect, useState } from "react";
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
import { useSelector } from "react-redux";
import Report from "./pages/Report";
import Comment from "./pages/Comment";
const App = () => {
  const { user } = useSelector((store) => store.users);
  const [isNavbarShown, setIsNavbarShown] = useState(true);

  return (
    <BrowserRouter>
      <Header user={user} />
      {isNavbarShown && <Navbar user={user} />}

      <Routes>
        <Route path="/" exact element={<Navigate to="/Login" />} />
        <Route
          path="/Login"
          exact
          element={!!user.email ? <Navigate to="/Dashboard" /> : <Login />}
        />
        <Route
          path="/Dashboard"
          exact
          element={!user.email ? <Navigate to="/Login" /> : <Dashboard />}
        />
        <Route
          path="/Product"
          exact
          element={!user.email ? <Navigate to="/Login" /> : <Product />}
        />
        <Route
          path="/Product/:Type"
          exact
          element={!user.email ? <Navigate to="/Login" /> : <RUDProduct />}
          setIsNavbarShown={false}
        />
        <Route
          path="/Product/:Type/:Id"
          exact
          element={!user.email ? <Navigate to="/Login" /> : <RUDProduct />}
        />
        <Route
          path="/Category"
          exact
          element={!user.email ? <Navigate to="/Login" /> : <Category />}
        />
        <Route
          path="/Customer"
          exact
          element={!user.email ? <Navigate to="/Login" /> : <Customer />}
        />
        <Route
          path="/Customer/:Id"
          exact
          element={!user.email ? <Navigate to="/Login" /> : <RUDCustomer />}
        />
        <Route
          path="/Transactions"
          exact
          element={!user.email ? <Navigate to="/Login" /> : <Transactions />}
        />
        <Route
          path="/Transactions/:Id"
          exact
          element={
            !user.email ? <Navigate to="/Login" /> : <DetailTransaction />
          }
        />
        <Route
          path="/Report"
          exact
          element={!user.email ? <Navigate to="/Login" /> : <Report />}
        />
        <Route
          path="/Comment"
          exact
          element={!user.email ? <Navigate to="/Login" /> : <Comment />}
        />
        <Route
          path="*"
          exact
          element={
            !user.email ? (
              <Navigate to="/Login" />
            ) : (
              <Navigate to="/Dashboard" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
