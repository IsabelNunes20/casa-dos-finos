import { Container } from "@radix-ui/themes";
import { Outlet } from "react-router-dom";

import Header from "../organisms/Header";

function Layout() {
  return (
    <Container py="6">
      <Header />
      <Outlet />
    </ Container>
  );
}

export default Layout;
