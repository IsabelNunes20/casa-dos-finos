import React from "react";
import { Container } from "@radix-ui/themes";

import { Header } from "../organisms/Header";
import { LayoutProps } from "../../types/data";

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container py="6">
      <Header />
      {children}
    </Container>
  );
};
