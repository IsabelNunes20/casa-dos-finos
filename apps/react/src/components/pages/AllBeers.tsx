import { List, ListObject } from '@repo/ui';

interface AllBeersProps {
  beers: ListObject[];
}

const AllBeers: React.FC<AllBeersProps> = ({ beers }) => {
    return (
        <main>
          <List list={beers} noObjsctsMsg="No beers found" />
        </main>
    );
}

export default AllBeers;
