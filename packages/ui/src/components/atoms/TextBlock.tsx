import React from "react";

import { Text } from "@radix-ui/themes";

type Props = {
  value: string;
};

export const TextBlock: React.FC<Props> = ({ value }) => {
  return (
    <>
      <Text size="2">
        {value}
      </Text>
    </>
  );
};
