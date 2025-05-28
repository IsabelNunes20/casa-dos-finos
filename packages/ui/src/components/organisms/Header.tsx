import React from 'react';

import { Heading, Flex } from "@radix-ui/themes";

import { Right } from "../molecules/Right";

export const Header: React.FC = () => {
  return (
    <header>
        <Flex justify="between" align="center" pb="6">
          <Heading size="8" weight="regular" color="orange" as="h1">Casa dos Finos</Heading>
          <Right link="/add-beer" label="Add New Beer"/>
        </Flex>
    </header>
  );
}
