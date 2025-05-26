import { Box } from "@radix-ui/themes";
import { Outlet } from "react-router-dom";

import Header from "../organisms/Header";

function Layout() {
  return (
    <Box px="9" py="6">
      <Header />
      <Outlet />
    </ Box>
  );
}

export default Layout;
