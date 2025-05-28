import React from "react";
import { Separator } from "@radix-ui/themes";

import { OptionalAttrs } from "../../types/data";
import { Attribute } from "../molecules/Attribute";

type Props = {
  attributes: OptionalAttrs;
};

export const Sections: React.FC<Props> = ({ attributes }) => {
  return (
    <>
      {attributes.brand && (
        <Attribute label={"Brand"} value={attributes.brand} />
      )}
      {attributes.ingredients && <Attribute value={attributes.ingredients} />}

      <Separator color="orange" size="2" />

      <Attribute
        value={attributes.rating ? attributes.rating : 0}
      />
      {attributes.notes && (
        <Attribute label={"Personal Notes"} value={attributes.notes} />
      )}
    </>
  );
};
