import { Outlet } from "react-router-dom";
import List from '../organisms/List';

const AllBeersPage: React.FC = () => {
    return (
      <>
        <Outlet />
        <main>
          <List />
        </main>
      </>
    );
}

export default AllBeersPage;
