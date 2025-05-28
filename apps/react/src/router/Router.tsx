import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "../components/templates/Layout";
import AllBeersPage, { loader as allBeersPageLoader } from "./AllBeersPage";
import BeerPage, { loader as beerPageLoader } from "./BeerPage";
import AddBeerPage, { action as addBeerPageAction } from "./AddBeerPage";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
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

  return <RouterProvider router={router} />;
}

export default Router;
