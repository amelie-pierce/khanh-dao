import useDrawer from "@/hooks/useDrawer";
import { combineClassNames } from "@/utils/common";
import type { ReactNode } from "react";
import Header from "./Header/Header";
import { Toast } from "./common";

type TOwnProps = {
  children?: ReactNode;
};

const ProtectedLayout = (props: TOwnProps) => {
  const { children } = props;
  const { open } = useDrawer();

  return (
    <div>
      <Header />
      <div
        className={combineClassNames(
          "main__body",
          open ? "--drawer-opened" : ""
        )}
      >
        {children}
        <Toast />
      </div>
    </div>
  );
};

export default ProtectedLayout;
