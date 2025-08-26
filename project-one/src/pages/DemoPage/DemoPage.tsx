import { Button } from "@/components/common";
import use3D from "@/hooks/use3D";
import { schema } from "@/schemes";
import type { DemoForm } from "@/types/demo";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import "./DemoPage.scss";
import Form from "./Form";
import BabylonScene from "./SceneComponent";

const DemoPage = () => {
  const [data, setData] = useState<DemoForm>();
  const { addBox } = use3D();

  const formInstance = useForm<DemoForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      shape: "box",
      range: {
        min: 0,
        max: 10,
      },
    },
  });
  const { handleSubmit } = formInstance;

  const onSubmitForm = (formValues: DemoForm) => {
    setData(formValues);

    if (formValues.shape === "box") {
      addBox();
    }
  };

  return (
    <FormProvider {...formInstance}>
      <div className="demo__page">
        <div className="demo__page__section">
          <Form />
          <Button onClick={handleSubmit(onSubmitForm)}>Submit</Button>
        </div>
        <div className="demo__page__3d">
          <BabylonScene textSample={data?.name} />
        </div>
      </div>
    </FormProvider>
  );
};

export default DemoPage;
