import { ERoute } from "@/configs/router";
import useToast from "@/hooks/useToast";
import { Navigate, Outlet } from "react-router";
import { Button, ProductCard, Toast } from "./common";
import Header from "./Header/Header";

const AppLayout = () => {
  const isLoggedIn = true;
  const { showToast } = useToast();

  if (!isLoggedIn) {
    return <Navigate to={"/" + ERoute.LOGIN} replace />;
  }

  return (
    <div>
      <Header />
      <div className="main__body">
        <Button
          onClick={() => {
            showToast && showToast("This is a error message", "info", 2000);
          }}
        >
          Trigger Toast
        </Button>
        <ProductCard name="NICKERS" price={12412412} />
        <Toast />
      </div>

      <Outlet />
    </div>
  );
};

export default AppLayout;
