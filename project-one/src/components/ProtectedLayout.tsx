import useDrawer from "@/hooks/useDrawer";
import { combineClassNames } from "@/utils/common";
import type { ReactNode } from "react";
import Header from "./Header/Header";
import { Modal, Toast } from "./common";

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
        <div>Breadscrum ne</div>
        {children}
        <Toast />
        <Modal />
      </div>
    </>
  );
};

export default ProtectedLayout;
