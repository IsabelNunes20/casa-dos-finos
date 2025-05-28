import React from "react";
import { useLoaderData } from "react-router-dom";

import { Beer } from "../types/data";
import { Details } from "@repo/ui";

const BeerPage: React.FC = () => {
  const beer: Beer = useLoaderData();

  return <Details obj={beer} />;
};

export default BeerPage;

export async function loader({ params }) {
  const response = await fetch(
    "https://6835d96bcd78db2058c36a1b.mockapi.io/beers/" + params.id
  );
  const resData = await response.json();
  return resData;
}
