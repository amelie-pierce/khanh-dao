import { Button, Text } from "@/components/common";
import { InputField, RangeField } from "@/components/FormItem";
import { schema } from "@/schemes";
import type { DemoForm } from "@/types/demo";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<DemoForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      expectedSalary: {
        min: 0,
        max: 10,
      },
    },
  });

  const onSubmitForm = (formValues: DemoForm) => {
    console.log("checking form values", formValues);
  };

  return (
    <>
      <Text variant="h5">Form Controller</Text>
      <div className="demo__page__section__item">
        <InputField
          name="name"
          control={control}
          placeholder="Input your name"
        />
        <InputField
          name="major"
          control={control}
          placeholder="Tell me your major"
        />
        <RangeField name="expectedSalary" control={control} />

        <Button onClick={handleSubmit(onSubmitForm)}>Submit</Button>
      </div>
    </>
  );
};

export default Form;
