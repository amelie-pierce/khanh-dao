import { Text } from "@/components/common";
import { InputField, RangeField, SelectForm } from "@/components/FormItem";
import type { DemoForm } from "@/types/demo";
import { useFormContext } from "react-hook-form";

const SHAPE_OPTIONS = [
  { value: "box", label: "Box" },
  { value: "sphere", label: "Sphere" },
];

const Form = () => {
  const {
    control,
    formState: { errors }, // For check error if has
  } = useFormContext<DemoForm>();

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
        <RangeField name="range" control={control} />
      </div>
    </>
  );
};

export default Form;
