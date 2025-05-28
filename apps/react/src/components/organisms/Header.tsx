// TODO: Add component a button to add a new beer

import { Heading, Flex } from "@radix-ui/themes";
import { Right } from "@repo/ui";

function Header() {
  return (
    <header>
        <Flex justify="between" align="center" pb="6">
          <Heading size="8" weight="regular" color="orange" as="h1">Casa dos Finos</Heading>
          <Right link="/add-beer" label="Add New Beer"/>
        </Flex>
    </header>
  );
}

export default Header;
