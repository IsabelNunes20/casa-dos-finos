import React from "react";
import { Container, Theme } from "@radix-ui/themes";

import { Header } from "../organisms/Header";
import { LayoutProps } from "../../types/data";

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Theme accentColor="orange" grayColor="olive">
      <Container py="6">
        <Header />
        {children}
      </Container>
    </Theme>
  );
};
