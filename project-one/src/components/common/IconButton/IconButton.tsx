import type { ReactNode } from "react";
import "./IconButton.scss";

type TOwnProps = {
  children: ReactNode;
};
const IconButton = (props: TOwnProps) => {
  const { children } = props;
  return <div className="icon-button">{children}</div>;
};
export default IconButton;
