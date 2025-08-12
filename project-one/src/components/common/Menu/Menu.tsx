import type { IMenu } from "@/types";
import ClickAwayListener from "../ClickawayListener/ClickawayListener";
import "./Menu.scss";
import MenuItem from "./MenuItem";

const Menu = (props: IMenu) => {
  const { open, onClose, options } = props;

  if (!open) {
    return null;
  }

  return (
    <ClickAwayListener onClickAway={onClose}>
      <div className="menu">
        {options.map((o) => (
          <MenuItem onClick={o.handler}>{o.text}</MenuItem>
        ))}
      </div>
    </ClickAwayListener>
  );
};
export default Menu;
