import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AllBeersPage, { loader as allBeersPageLoader } from "./routes/AllBeersPage";
import BeerPage, { loader as beerPageLoader } from "./routes/BeerPage";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AllBeersPage />,
      loader: allBeersPageLoader,
    },
    {
      path: "/:id",
      element: <BeerPage />,
      loader: beerPageLoader,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}
