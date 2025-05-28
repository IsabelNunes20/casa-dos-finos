import React from "react";

import { List } from "../organisms/List";
import { ListProps } from "../../types/data";


export const Collection: React.FC<ListProps> = ({ list, noObjsctsMsg }) => {
  return (
    <main>
      <List list={list} noObjsctsMsg={noObjsctsMsg} />
    </main>
  );
};
