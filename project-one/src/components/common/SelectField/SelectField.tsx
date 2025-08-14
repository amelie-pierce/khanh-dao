import { ArrowDown } from "@/assets/icons";
import ArrowUp from "@/assets/icons/ArrowUp";
import type { ISelectField } from "@/types";
import { checkDisabled, combineClassNames } from "@/utils/common";
import { useState } from "react";
import Menu from "../Menu/Menu";
import Text from "../Text/Text";
import "./SelectField.scss";

const SelectField = (props: ISelectField) => {
  const { options, disabled = false } = props;
  const [expended, toggleExpand] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>();

  const onSelectValue = (value: string) => {
    setSelectedValue(value);
    toggleExpand(false);
  };

  const disabledClass = checkDisabled(disabled);

  return (
    <>
      <div
        className={
          combineClassNames(
            "select-field__wrapper",
            expended ? "--expanded" : ""
          ) + disabledClass
        }
        onClick={(e) => {
          e.stopPropagation();
          toggleExpand((prev) => !prev);
        }}
      >
        <div className={combineClassNames("select-field") + disabledClass}>
          <Text size="title">
            {selectedValue ? selectedValue : "Select field"}
          </Text>
        </div>
        {expended ? <ArrowUp size={28} /> : <ArrowDown size={28} />}
      </div>

      <Menu
        open={expended}
        onClose={() => toggleExpand(false)}
        options={options}
        onSelectValue={onSelectValue}
        selectedValue={selectedValue}
      />
    </>
  );
};
export default SelectField;
