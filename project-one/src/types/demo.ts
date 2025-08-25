import type { Scene } from "@babylonjs/core";
import type { RangeParams } from ".";

export type TShape = "box" | "sphere";

export interface DemoForm {
  name: string;
  range: RangeParams;
  shape: TShape;
}

export interface Custom3DHook {
  scene?: Scene;
  initScene: (arg: Scene) => void;
  addBox: () => void;
}
