import { Layout } from "@repo/ui";
import { Outlet } from "react-router-dom";

const RootLayout: React.FC = () => {
  return (
    <Layout>
        <Outlet />
    </Layout>
  );
};

export default RootLayout;
