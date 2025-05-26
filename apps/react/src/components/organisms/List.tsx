import React from "react";
import { Table } from "@radix-ui/themes";

import { beerData, Beer } from "../../types/data";
import Card from "../molecules/Card";

const List: React.FC = () => {
  return (
    <>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Type</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Created At</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Brand</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {beerData.map((beer: Beer) => (
            <Card
              key={beer.id}
              type={beer.type}
              createdAt={beer.createdAt}
              brand={beer.brand}
            ></Card>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  );
};

export default List;
