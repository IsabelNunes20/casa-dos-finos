import React from "react";

import { Label } from "../atoms/Label";
import { Items } from "../atoms/Items";
import { TextBlock } from "../atoms/TextBlock";
import { Stars } from "../atoms/Stars";

type Props = {
  label?: string,
  value: string | number | string[]
};

export const Attribute: React.FC<Props> = ({ label, value }) => {
  let content;

  if (Array.isArray(value)) {
    content = <Items value={value} />;
  } else if (typeof value === "string") {
    content = <TextBlock value={value} />;
  } else {
    content = <Stars />;
  }

  return (
    <>
      {label && <Label label={label} />}
      { content }    
    </>
  );
};
