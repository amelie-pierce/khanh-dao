import { Navigate, Outlet } from "react-router";
import Header from "./Header";

const AppLayout = () => {
  const isLoggedIn = true;

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <Header />
      <div>Protected page</div>
      <Outlet />
    </div>
  );
};

export default AppLayout;
