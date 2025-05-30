import React from "react";

import { DetailsProps, Obj, OptionalAttrs } from "../../types/data";
import { Sections } from "../organisms/Sections";
import { Layout } from "../templates/Layout";

export const Details: React.FC<DetailsProps> = ({
  obj
}) => {
  const key = [
    'brand',
    'ingredients',
    'rating',
    'notes'
  ];

  const attributes: OptionalAttrs = {};

  key.forEach((keyValue) => {
    if (keyValue in obj) {
      attributes[keyValue] = obj[keyValue];
    }
  });

  return (
    <Layout>
      <Sections attributes={attributes} />
    </Layout>
  );
};
