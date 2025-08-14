import { combineClassNames } from "@/utils/common";
import Text from "../Text/Text";
import "./TextField.scss";

type TOwnProps = {
  startIcon?: React.ReactNode;
  disabled?: boolean;
  errorText?: string;
};
const TextField = (props: TOwnProps) => {
  const { startIcon, disabled = false, errorText = "" } = props;

  const disabledClass = disabled ? "--disabled" : "";
  const errorClass = errorText ? "--error" : "";

  return (
    <div className="text-field__container">
      <div
        className={combineClassNames(
          "text-field__wrapper",
          disabledClass,
          errorClass
        )}
      >
        {startIcon ? startIcon : null}
        <input
          disabled={disabled}
          placeholder="text"
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
};

export default TextField;
