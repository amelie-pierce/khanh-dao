import { Checked } from "@/assets/icons";
import { combineClassNames } from "@/utils/common";
import "./MenuItem.scss";

type TOwnProps = {
  children?: React.ReactNode;
  disabled?: boolean;
  selected?: boolean;
  onClick?: () => void;
};

const MenuItem = (props: TOwnProps) => {
  const { children, onClick, disabled = false, selected = false } = props;

  const disabledClass = disabled ? "--disabled" : "";

  return (
    <div
      className={combineClassNames("menu-item", disabledClass)}
      onClick={onClick}
    >
      {children}
      {selected && <Checked size={24} />}
    </div>
  );
};
export default MenuItem;
