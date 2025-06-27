import React from "react";
import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layout/HomeLayouts";
import Home from "../Pages/Home";
import AllPlants from "../Pages/AllPlants";
import AddPlant from "../Pages/AddPlant";
import MyPlants from "../Pages/MyPlants";
import Error from "../Pages/Error";
import SignUp from "../Pages/SignUp";
import LoginPage from "../Pages/LoginPage";
import PlantDetails from "../Pages/PlantDetails";
import UpdatePlant from "../Pages/UpdatePlant";
import PrivateRoute from "../Context/PrivateRoute";
import Profile from "../Pages/Profile";
import Loader from "../components/Loader";
import Contact from "../Pages/Contact";
import DashbordLayout from "../layout/DashbordLayout";
import AllPlantsTable from "../Pages/AllPlantsTable";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("https://one0-85jk.onrender.com/plants"),
        hydrateFallbackElement: <Loader />,
      },
      {
        path: "all-plants",
        element: <AllPlants />,
      },
      {
        path: "contact",
        element: (
          <PrivateRoute>
            <Contact />
          </PrivateRoute>
        ),
      },
      {
        path: "plants/:id",
        element: (
          <PrivateRoute>
            <PlantDetails />
          </PrivateRoute>
        ),
      },
    ],
  },

  
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },

  
  {
    path: "dashbord",
    element: (
      <PrivateRoute>
        <DashbordLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true, 
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "add-plant",
        element: (
          <PrivateRoute>
            <AddPlant />
          </PrivateRoute>
        ),
      },
      {
        path: "my-plants",
        element: (
          <PrivateRoute>
            <MyPlants />
          </PrivateRoute>
        ),
      },
      {
        path: "all-Items",
        element: (
          <PrivateRoute>
            <AllPlantsTable />
          </PrivateRoute>
        ),
      },
      {
        path: "update/:id",
        element: (
          <PrivateRoute>
            <UpdatePlant />
          </PrivateRoute>
        ),
      },
    ],
  },


  {
    path: "*",
    element: <Error />,
  },
]);
