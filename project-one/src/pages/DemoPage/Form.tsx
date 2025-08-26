import { Slider, Text } from "@/components/common";
import { InputField, SelectForm } from "@/components/FormItem";
import type { DemoForm } from "@/types/demo";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

const SHAPE_OPTIONS = [
  { value: "box", label: "Box" },
  { value: "sphere", label: "Sphere" },
];

const Form = () => {
  const { control } = useFormContext<DemoForm>();

  const [value, setValue] = useState(10);

  return (
    <>
      <Text variant="h5">Form Controller</Text>
      <div className="demo__page__section__item">
        <InputField
          width="80%"
          name="name"
          control={control}
          placeholder="Input your product name"
        />

        <SelectForm name="shape" control={control} options={SHAPE_OPTIONS} />
        <Text size="title">Input your expected range</Text>
        {/* <RangeField name="range" control={control} /> */}

        <Slider
          value={value}
          onChange={(e) => {
            setValue(e);
          }}
        />
      </div>
    </>
  );
};

export default Form;
