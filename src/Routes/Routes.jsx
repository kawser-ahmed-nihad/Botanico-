import React from "react";
import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layout/HomeLayouts";
import Home from "../Pages/Home";
import AllPlants from "../Pages/AllPlants";
import AddPlant from "../Pages/AddPlant";
import MyPlants from "../Pages/MyPlants";
import Error from "../Pages/Error";
import ForgotPassword from "../Pages/ForgotPassword ";
import SignUp from "../Pages/SignUp";
import LoginPage from "../Pages/LoginPage";
import PlantDetails from "../Pages/PlantDetails";
import UpdatePlant from "../Pages/UpdatePlant";
import PrivateRoute from "../Context/PrivateRoute";
import Profile from "../Pages/Profile";
import Loader from "../components/Loader";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch('https://one0-85jk.onrender.com/plants'),
        hydrateFallbackElement: <Loader></Loader>

      },
      {
        path: "all-plants",
        element: <AllPlants></AllPlants>
      },
      {
        path: "add-plant",
        element: <PrivateRoute><AddPlant></AddPlant></PrivateRoute>
      },
      {
        path: "my-plants",
        element: <PrivateRoute><MyPlants></MyPlants></PrivateRoute>
      },
      {
        path: "/plants/:id",
        element: <PrivateRoute><PlantDetails /></PrivateRoute>
      },
      {
        path: "/update/:id",
        element: <PrivateRoute><UpdatePlant></UpdatePlant></PrivateRoute>
      },
      {
        path: "profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>,

      },


    ],
  },
  {
    path: "login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "forgot",
    element: <ForgotPassword></ForgotPassword>,
  },
  {
    path: "/*",
    element: <Error></Error>,
  },

]);
