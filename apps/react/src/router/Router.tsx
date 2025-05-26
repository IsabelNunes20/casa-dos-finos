import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "../components/templates/Layout";
import AllBeersPage from "../components/pages/AllBeersPage";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
            path:"/",
            element: <AllBeersPage />
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
