import type { DemoForm } from "@/types/demo";
import { ObjectSchema, number, object, ref, string } from "yup";

export const schema: ObjectSchema<DemoForm> = object().shape({
  name: string().required("Please input your name"),
  major: string().required(),
  expectedSalary: object({
    min: number().required().max(ref("max"), "Min should  not exceed the max"),
    max: number().required().min(ref("min"), "Max should not smaller than min"),
  }),
});
