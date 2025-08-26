import useDrawer from "@/hooks/useDrawer";
import { combineClassNames } from "@/utils/common";
import type { ReactNode } from "react";
import Breadscrum from "./Breadscrumb/Breadscrumb";
import Header from "./Header/Header";
import { Drawer, Modal, Toast } from "./common";

type TOwnProps = {
  children?: ReactNode;
};

const ProtectedLayout = (props: TOwnProps) => {
  const { children } = props;
  const { open } = useDrawer();

  return (
    <>
      <Header />
      <div
        className={combineClassNames(
          "main__body",
          open ? "--drawer-opened" : ""
        )}
      >
        <Breadscrum />
        {children}
        <Toast />
      </div>
      <Modal />
      <Drawer />
    </>
  );
};

export default ProtectedLayout;
