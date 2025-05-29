import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { createContext, useContext, useState } from "react";

import { Collection } from "@repo/ui";
import { Beer } from "../types/data";

const AllBeersPage: React.FC = () => {
  const [beers, setBeers] = useState<Beer[]>([]);
  const loadedData: Beer[] = useLoaderData();

  useEffect(() => {
    setBeers(loadedData);
  }, [loadedData]);

  const elements = beers.map((beer: Beer) => {
    return {
      id: beer.id,
      title: beer.name,
      subtitle: beer.brand,
    };
  });

  async function handleAddElement(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const beerData = Object.fromEntries(new FormData(event.currentTarget));

    const response = await fetch("https://6835d96bcd78db2058c36a1b.mockapi.io/beers/", {
      method: "POST",
      body: JSON.stringify(beerData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resData = await response.json();
    setBeers([...beers.slice(), resData]);
  }

  return (
      <Collection list={elements} noObjsctsMsg="No beers found" onAddElement={handleAddElement} />
  );
};

export default AllBeersPage;

export async function loader() {
  const response = await fetch(
    "https://6835d96bcd78db2058c36a1b.mockapi.io/beers"
  );
  const resData = await response.json();
  return resData;
}
