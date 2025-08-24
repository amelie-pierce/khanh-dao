import type { RangeParams } from "@/types";
import type { DemoForm } from "@/types/demo";
import { Controller, type Control } from "react-hook-form";
import { Slider, Text } from "../common";

type TOwnProps = {
  name: keyof DemoForm;
  control: Control<DemoForm>;
};

const RangeField = (props: TOwnProps) => {
  const { name, control } = props;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        return (
          <>
            <Slider
              ranges={field.value as RangeParams}
              onUpdateRange={field.onChange}
            />
            {
              <Text size="text-lg" color="#792e29" fontWeight={800}>
                {fieldState.error?.message}
              </Text>
            }
          </>
        );
      }}
    />
  );
};

export default RangeField;
