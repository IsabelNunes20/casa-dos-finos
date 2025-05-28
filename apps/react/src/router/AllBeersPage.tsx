import React from "react";
import { useLoaderData } from 'react-router-dom';
import AllBeers from '../components/pages/AllBeers';

import { Beer } from '../types/data';

const AllBeersPage: React.FC = () => {
    const beers = useLoaderData();

    const elements = beers.map((beer: Beer) => {
        return {
            id: beer.id,
            title: beer.name,
            subtitle: beer.brand
        };
    });

    return (
        <AllBeers beers={elements} />
    );
};

export default AllBeersPage;

export async function loader() {
    const response = await fetch('https://6835d96bcd78db2058c36a1b.mockapi.io/beers');
    const resData = await response.json();
    return resData;
}
