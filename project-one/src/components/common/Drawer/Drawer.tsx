import type { Drawer as DrawerProps } from "@/types";
import { combineClassNames } from "@/utils/common";
import ClickAwayListener from "../ClickawayListener/ClickawayListener";
import "./Drawer.scss";

const Drawer = (props: DrawerProps) => {
  const { open, onClose, children } = props;

  return (
    <div className={"draw-wrapper"}>
      <div className={combineClassNames("drawer", open ? "--open" : "")}>
        <ClickAwayListener onClickAway={onClose}>{children}</ClickAwayListener>
      </div>
    </div>
  );
};
export default Drawer;
