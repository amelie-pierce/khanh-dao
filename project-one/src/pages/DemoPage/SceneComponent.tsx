// BabylonScene.tsx
import use3D from "@/hooks/use3D";
import {
  ArcRotateCamera,
  Engine,
  HemisphericLight,
  MeshBuilder,
  Scene,
  StandardMaterial,
  Texture,
  Vector3,
} from "@babylonjs/core";
import * as earcut from "earcut";
import React, { useEffect, useRef, useState } from "react";

interface BabylonSceneProps {
  textSample?: string;
}

const BabylonScene: React.FC<BabylonSceneProps> = (props) => {
  const { textSample = "" } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [font, setFontData] = useState();
  const { scene: currentScene, initScene } = use3D();

  const getFonts = async () => {
    const fontData = await (
      await fetch("/statics/Open Sans_Regular.json")
    ).json(); // Providing you have a font data file at that location

    setFontData(fontData);
  };

  // Scene initiallization
  useEffect(() => {
    if (!canvasRef.current) return;

    getFonts();
    const engine = new Engine(canvasRef.current, true);
    const scene = new Scene(engine);

    // Create a camera
    const camera = new ArcRotateCamera(
      "Camera",
      0,
      0,
      10,
      new Vector3(0, 0, 0),
      scene
    );

    // Positions the camera overwriting alpha, beta, radius
    camera.setPosition(new Vector3(0, 0, 20));

    // This attaches the camera to the canvas
    camera.attachControl(scene, true);

    // Create a light
    const light = new HemisphericLight("light1", new Vector3(0, 1, 0), scene);

    light.intensity = 1;

    // Create a sphere
    const sphere = MeshBuilder.CreateSphere(
      "sphere1",
      { diameter: 2, segments: 64 },
      scene
    );

    const sphereMaterial = new StandardMaterial("sphere");
    sphereMaterial.diffuseTexture = new Texture("/images/fire.png");
    sphere.material = sphereMaterial;

    sphere.position.y = 1;

    const box = MeshBuilder.CreateBox("box", {});
    const boxMaterial = new StandardMaterial("box");
    boxMaterial.diffuseTexture = new Texture("/images/water.png");
    box.material = boxMaterial;

    box.position.x = 2;
    box.position.y = 1;

    // Create a ground
    MeshBuilder.CreateGround("ground1", { width: 6, height: 10 }, scene);

    engine.runRenderLoop(() => {
      scene.render();
    });

    const resize = () => {
      engine.resize();
    };

    initScene(scene);

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      engine.dispose();
    };
  }, []);

  useEffect(() => {
    currentScene?.getMeshByName("myText")?.dispose();
    if (font && currentScene && textSample) {
      const text = MeshBuilder.CreateText(
        "myText",
        textSample,
        font,
        {
          size: 8,
          resolution: 32,
          depth: 5,
        },
        currentScene,
        earcut.default
      );

      text!.position.x = 5;
      text!.position.y = 5;
    }
  }, [font, currentScene, textSample]);

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />;
};

export default BabylonScene;
