import type { DemoForm } from "@/types/demo";
import { Controller, type Control } from "react-hook-form";
import { Slider } from "../common";

type TOwnProps = {
  name: keyof DemoForm;
  control: Control<DemoForm>;
};

const SliderField = (props: TOwnProps) => {
  const { name, control } = props;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return <Slider value={Number(field.value)} onChange={field.onChange} />;
      }}
    />
  );
};

export default SliderField;
