import type { FlexBox as FlexBoxProps } from "@/types";
import "./FlexBox.scss";

const FlexBox = (props: FlexBoxProps) => {
  const { children } = props;
  return (
    <div className="flex-container">
      <div className="flex-item">{children}</div>
      <div className="flex-item">{children}</div>
      <div className="flex-item">{children}</div>
      <div className="flex-item">{children}</div>
      <div className="flex-item">{children}</div>
      <div className="flex-item">{children}</div>
    </div>
  );
};
export default FlexBox;
