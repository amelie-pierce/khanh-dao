import type { Scene } from "@babylonjs/core";

export type TShape = "box" | "sphere";

export interface DemoForm {
  name: string;
  size: number;
  shape: TShape;
}

export interface Custom3DHook {
  scene?: Scene;
  initScene: (arg: Scene) => void;
  addBox: () => void;
}
