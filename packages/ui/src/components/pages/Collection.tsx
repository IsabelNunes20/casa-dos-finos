import React from "react";

import { List } from "../organisms/List";
import { ListProps } from "../../types/data";

import { Layout } from "../templates/Layout";
import { Popup } from "../templates/Popup";

type CollectionProps = {
  onAddElement: React.FormEventHandler<HTMLFormElement>;
} & ListProps;

export const Collection: React.FC<CollectionProps> = ({ list, noObjsctsMsg, onAddElement }) => {
  return (
    <>
      <Layout>
        <main>
          <List list={list} noObjsctsMsg={noObjsctsMsg} />
        </main>
      </Layout>
      <Popup onAddElement={onAddElement}></Popup>
    </>
  );
};
