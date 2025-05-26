import React from "react";
import { Table } from "@radix-ui/themes";

interface CardProps {
  type: string;
  createdAt: string;
  brand: string;
}

const Card: React.FC<CardProps> = ({ type, createdAt, brand }) => {
  return (
    <Table.Row>
      <Table.RowHeaderCell>{type}</Table.RowHeaderCell>
      <Table.Cell>{createdAt}</Table.Cell>
      <Table.Cell>{brand}</Table.Cell>
    </Table.Row>
  );
};

export default Card;
