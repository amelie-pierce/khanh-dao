import { ERoute } from "@/configs/router";
import useDrawer from "@/hooks/useDrawer";
import { combineClassNames } from "@/utils/common";
import { Navigate, Outlet } from "react-router";
import { Toast } from "./common";
import Header from "./Header/Header";

const AppLayout = () => {
  const isLoggedIn = true;
  const { open } = useDrawer();

  if (!isLoggedIn) {
    return <Navigate to={"/" + ERoute.LOGIN} replace />;
  }

  return (
    <div>
      <Header />
      <div
        className={combineClassNames(
          "main__body",
          open ? "--drawer-opened" : ""
        )}
      >
        <Toast />
      </div>

      <Outlet />
    </div>
  );
};

export default AppLayout;
