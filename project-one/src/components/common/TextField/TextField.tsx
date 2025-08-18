import { combineClassNames } from "@/utils/common";
import { forwardRef, type InputHTMLAttributes } from "react";
import Text from "../Text/Text";
import "./TextField.scss";

type TOwnProps = InputHTMLAttributes<HTMLInputElement> & {
  startIcon?: React.ReactNode;
  disabled?: boolean;
  errorText?: string;
};
const TextField = forwardRef<HTMLInputElement, TOwnProps>((props, ref) => {
  const {
    startIcon,
    disabled = false,
    placeholder = "",
    errorText = "",
    ...rest
  } = props;

  const disabledClass = disabled ? "--disabled" : "";
  const errorClass = errorText ? "--error" : "";

  return (
    <div className="container">
      <div
        className={combineClassNames(
          "text-field__wrapper",
          disabledClass,
          errorClass
        )}
      >
        {startIcon ? startIcon : null}
        <input
          ref={ref}
          placeholder={placeholder}
          {...rest}
          disabled={disabled}
          className={combineClassNames(
            "text-field",
            startIcon ? "--with-icon" : "",
            disabledClass,
            errorClass
          )}
        />
      </div>
      {errorText && (
        <Text className="error-message" size="text-lg">
          {errorText}
        </Text>
      )}
    </div>
  );
});

export default TextField;
