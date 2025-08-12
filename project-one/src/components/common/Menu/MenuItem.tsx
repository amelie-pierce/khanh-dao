import "./MenuItem.scss";

type TOwnProps = {
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};

const MenuItem = (props: TOwnProps) => {
  const { children, onClick, disabled = false } = props;

  return (
    <div
      className={`menu_item menu_item${disabled ? "--disabled" : ""}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
export default MenuItem;
