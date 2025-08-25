import type { Custom3DHook } from "@/types/demo";
import { MeshBuilder, StandardMaterial, Texture } from "@babylonjs/core";
import { create } from "zustand";

const use3D = create<Custom3DHook>((set, get) => ({
  scene: undefined,
  initScene: (arg) => {
    set({ scene: arg });
  },
  addBox: () => {
    const newScene = get().scene;
    let count = 0;
    if (newScene) {
      const boxID = "box";

      // Check number of box instances
      for (const mesh of newScene.meshes) {
        if (mesh.id === boxID) {
          count++;
        }
      }
      const box = MeshBuilder.CreateBox("box", { size: 2 }, newScene);
      const boxMaterial = new StandardMaterial("box");
      boxMaterial.diffuseTexture = new Texture("/images/water.png");
      box.material = boxMaterial;

      // Adding another new box with different position
      box.position.x = count * 4;
      box.position.y = 3.5;
    }
    set({ scene: newScene });
  },
}));

export default use3D;
