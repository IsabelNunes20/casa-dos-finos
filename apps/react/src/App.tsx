import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import RootLayout from "./components/RootLayout";
import AllBeersPage, { loader as allBeersPageLoader } from "./routes/AllBeersPage";
import BeerPage, { loader as beerPageLoader } from "./routes/BeerPage";
import AddBeerPage, { action as addBeerPageAction } from "./routes/AddBeerPage";


export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <AllBeersPage />,
          loader: allBeersPageLoader
        },
        {
          path: "/:id",
          element: <BeerPage />,
          loader: beerPageLoader,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} /> ;
}
