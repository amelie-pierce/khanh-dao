import useAuth from "@/hooks/useAuth";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import ProtectedLayout from "./ProtectedLayout";
import PublicLayout from "./PublicLayout";

const AppLayout = () => {
  const { setInfo } = useAuth();
  const { getAcessInfo } = useLocalStorage();
  const navigate = useNavigate();
  const accessInfo = getAcessInfo();

  useEffect(() => {
    const accessInfo = getAcessInfo();
    if (accessInfo) {
      setInfo(accessInfo);
      return;
    }

    navigate("/login");
  }, []);

  return (
    <>
      {accessInfo ? (
        <ProtectedLayout>
          <Outlet />
        </ProtectedLayout>
      ) : (
        <PublicLayout>
          <Outlet />
        </PublicLayout>
      )}
    </>
  );
};

export default AppLayout;
