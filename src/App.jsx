// App.js

import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Register,
  Home,
  Login,
  Error,
  HomeLayout,
  DashboardLayout,
  AllNotes,
  Note,
  Profile,
  DashHome,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <DashHome />,
        children: [
          {
            path: "all-notes",
            element: <AllNotes />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "note",
            element: <Note />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
