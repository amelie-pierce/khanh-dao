import type { ButtonVariant } from "@/types";
import { combineClassNames } from "@/utils/common";
import type { ComponentProps, ReactNode } from "react";
import Text from "../Text/Text";
import "./Button.scss";

type TOwnProps = ComponentProps<"div"> & {
  children: ReactNode;
  variant?: ButtonVariant;
  disabled?: boolean;
};

const Button = (props: TOwnProps) => {
  const {
    children,
    variant = "primary",
    onClick,
    disabled = false,
    ...rest
  } = props;

  const variantMapper = {
    primary: "--primary",
    secondary: "--secondary",
  };

  return (
    <div
      {...rest}
      className={combineClassNames(
        "button",
        variantMapper[variant],
        disabled ? "--disabled" : undefined
      )}
      onClick={onClick}
    >
      {typeof children === "string" ? (
        <Text size="title">{children}</Text>
      ) : (
        children
      )}
    </div>
  );
};
export default Button;
