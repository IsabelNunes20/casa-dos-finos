import React from "react";
import { useLoaderData } from 'react-router-dom';

const BeerPage: React.FC = () => {
    const beer = useLoaderData();
    
    if (!beer) {
        return (
            <h1>No beer</h1>
        );
    } else {
        return (
            <h1>{beer.name}</h1>
        );
    }
};

export default BeerPage;


export async function loader({params}) {
    const response = await fetch('https://6835d96bcd78db2058c36a1b.mockapi.io/beers/' + params.id);
    const resData = await response.json();
    return resData;
}
