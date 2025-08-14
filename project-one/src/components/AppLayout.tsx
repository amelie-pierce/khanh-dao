import useToast from "@/hooks/useToast";
import { Navigate, Outlet } from "react-router";
import Header from "./Header/Header";
import { Button, Toast } from "./common";

const AppLayout = () => {
  const isLoggedIn = true;
  const { showToast } = useToast();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
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
        <Toast />
      </div>

      <Outlet />
    </div>
  );
};

export default AppLayout;
