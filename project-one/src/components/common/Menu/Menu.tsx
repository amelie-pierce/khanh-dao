import type { Menu as MenuProps } from "@/types";
import ClickAwayListener from "../ClickawayListener/ClickawayListener";
import Text from "../Text/Text";
import "./Menu.scss";
import MenuItem from "./MenuItem";

const Menu = (props: MenuProps) => {
  const {
    open,
    onClose,
    options,
    onSelectValue,
    disabledValues,
    selectedValue,
  } = props;

  if (!open) {
    return null;
  }

  const onSelect = (value: string) => {
    onSelectValue(value);
    onClose();
  };

  return (
    <ClickAwayListener onClickAway={onClose}>
      <div className="menu">
        {options.map((o) => (
          <MenuItem
            onClick={() => onSelect(o)}
            disabled={disabledValues?.includes(o) || false}
            selected={selectedValue === o}
          >
            <Text size="title">{o}</Text>
          </MenuItem>
        ))}
      </div>
    </ClickAwayListener>
  );
};
export default Menu;
