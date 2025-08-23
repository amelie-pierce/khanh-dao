import type { Drawer as DrawerProps } from "@/types";
import { combineClassNames } from "@/utils/common";
import ClickAwayListener from "../ClickawayListener/ClickawayListener";
import "./Drawer.scss";

const Drawer = (props: DrawerProps) => {
  const { open, onClose, component } = props;

  const openClass = open ? "--open" : "";

  return (
    <div className={combineClassNames("drawer__wrapper", openClass)}>
      <div className={combineClassNames("drawer", openClass)}>
        <ClickAwayListener onClickAway={onClose}>{component}</ClickAwayListener>
      </div>
    </div>
  );
};
export default Drawer;
