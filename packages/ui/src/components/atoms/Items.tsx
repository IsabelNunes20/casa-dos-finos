import React from "react";

import { Badge } from "@radix-ui/themes";

type Props = {
  value: string[];
};

export const Items: React.FC<Props> = ({ value }) => {
  return (
    <>
      {value.map((item, index) => (
        <Badge key={index} size="3" variant="outline">
          {item}
        </Badge>
      ))}
    </>
  );
};
