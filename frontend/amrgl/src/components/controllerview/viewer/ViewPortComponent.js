import React from "react";
import {
  ArcRotateCamera,
  Color3,
  Vector3,
  HemisphericLight,
  MeshBuilder,
  Mesh,
} from "@babylonjs/core";
import { GridMaterial } from "@babylonjs/materials";
import SceneComponent from "./SceneComponent";
import "./ViewPortComponent.css";
import Swal from "sweetalert2";
import { blackAndWhitePixelShader } from "@babylonjs/core/Shaders/blackAndWhite.fragment";

const ViewPortComponent = (props) => {
  const { settingData, setSettings, addData, setAdd } = props;
  const sceneRef = React.useRef(null);

  React.useEffect(() => {
    const scene = sceneRef.current;
    if (scene) {
      // modify the plane, by dispose and rebuild adding to scene.
      if (settingData.gridChange) {
        console.log("grid change request");
        const prePlane = scene.getMeshByID("plane");
        const prePlaneMaterial = scene.getMaterialByID("groundMaterial");
        if (
          prePlane._width != settingData.planesize ||
          prePlaneMaterial.gridRatio != settingData.gridsize
        ) {
          prePlane.dispose();
          prePlaneMaterial.dispose();
          let ground = MeshBuilder.CreateGround(
            "plane",
            { width: settingData.planesize, height: settingData.planesize },
            scene
          );
          let groundMaterial = new GridMaterial("groundMaterial", scene);
          groundMaterial.majorUnitFrequency = 10;
          groundMaterial.minorUnitVisibility = 0.5;
          groundMaterial.gridRatio = settingData.gridsize; //smallest block size
          groundMaterial.backFaceCulling = false;
          groundMaterial.mainColor = new Color3(1, 1, 1);
          groundMaterial.lineColor = new Color3(1.0, 1.0, 1.0);
          groundMaterial.opacity = 0.98;
          ground.material = groundMaterial;
        }

        setSettings({ ...settingData, gridChange: false });
      }
      if (settingData.colorChange) {
        console.log("color change request");
        scene.clearColor = new Color3(
          settingData.lightR,
          settingData.lightG,
          settingData.lightB
        );
        setSettings({ ...settingData, colorChange: false });
      }
      if (addData.addnew) {
        console.log("add new prime request");
        if (addData.primetype == "BOX") {
          const preBox = scene.getMeshByID(addData.primename);
          if (preBox) {
            Swal.fire({
              position: "top",
              text:
                "Do you want to edit an existing object, name: " +
                addData.primename +
                " ?",
              showDenyButton: true,
              background: "black",
              allowOutsideClick: false,
              confirmButtonText: `Confirm`,
              denyButtonText: `Cancel`,
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                Swal.fire({
                  background: "black",
                  icon: "success",
                  text: "Edited",
                  showConfirmButton: false,
                  timer: 1500,
                });
                preBox.dispose();
                let box = MeshBuilder.CreateBox(
                  addData.primename,
                  { size: 1 },
                  scene
                );
                box.position = new Vector3(
                  Number(addData.positionx),
                  Number(addData.positiony),
                  Number(addData.positionz)
                );
                box.scaling = new Vector3(
                  Number(addData.scalex),
                  Number(addData.scaley),
                  Number(addData.scalez)
                );
                setAdd({ ...addData, addnew: false });
                //removed, need to untrack
              } else if (result.isDenied) {
                Swal.fire(
                  "Changes are not saved, please edit again",
                  "",
                  "info"
                );
              }
            });
            // alert('Reminder: are you going to make changes to existing prime, name : ' + addData.primename + ' ?')
          } else {
            let box = MeshBuilder.CreateBox(
              addData.primename,
              { size: 1 },
              scene
            );
            box.position = new Vector3(
              Number(addData.positionx),
              Number(addData.positiony),
              Number(addData.positionz)
            );
            box.scaling = new Vector3(
              Number(addData.scalex),
              Number(addData.scaley),
              Number(addData.scalez)
            );
            setAdd({ ...addData, addnew: false });
          }
          //Added, need to track
        } else if (addData.primetype == "SPHERE") {
          console.log("sphere");
          const preSphere = scene.getMeshByID(addData.primename);
          if (preSphere) {
            Swal.fire({
              position: "top",
              text:
                "Do you want to edit an existing object, name: " +
                addData.primename +
                " ?",
              showDenyButton: true,
              background: "black",
              allowOutsideClick: false,
              confirmButtonText: `Confirm`,
              denyButtonText: `Cancel`,
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                Swal.fire({
                  background: "black",
                  icon: "success",
                  text: "Edited",
                  showConfirmButton: false,
                  timer: 1500,
                });
                preSphere.dispose();
                let sphere = MeshBuilder.CreateSphere(
                  addData.primename,
                  { size: 1 },
                  scene
                );
                sphere.position = new Vector3(
                  Number(addData.positionx),
                  Number(addData.positiony),
                  Number(addData.positionz)
                );
                sphere.scaling = new Vector3(
                  Number(addData.scalex),
                  Number(addData.scaley),
                  Number(addData.scalez)
                );
                setAdd({ ...addData, addnew: false });
                //removed, need to untrack
              } else if (result.isDenied) {
                Swal.fire(
                  "Changes are not saved, please edit again",
                  "",
                  "info"
                );
              }
            });
          } else {
            let sphere = MeshBuilder.CreateSphere(
              addData.primename,
              { size: 1 },
              scene
            );
            sphere.position = new Vector3(
              Number(addData.positionx),
              Number(addData.positiony),
              Number(addData.positionz)
            );
            sphere.scaling = new Vector3(
              Number(addData.scalex),
              Number(addData.scaley),
              Number(addData.scalez)
            );
            setAdd({ ...addData, addnew: false });
          }
          //Added, need to track
        } else if (addData.primetype == "CYLINDER") {
          const preCylinder = scene.getMeshByID(addData.primename);
          if (preCylinder) {
            Swal.fire({
              position: "top",
              text:
                "Do you want to edit an existing object, name: " +
                addData.primename +
                " ?",
              showDenyButton: true,
              background: "black",
              allowOutsideClick: false,
              confirmButtonText: `Confirm`,
              denyButtonText: `Cancel`,
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                Swal.fire({
                  background: "black",
                  icon: "success",
                  text: "Edited",
                  showConfirmButton: false,
                  timer: 1500,
                });
                preCylinder.dispose();
                let cylinder = MeshBuilder.CreateCylinder(
                  addData.primename,
                  { size: 1 },
                  scene
                );
                cylinder.position = new Vector3(
                  Number(addData.positionx),
                  Number(addData.positiony),
                  Number(addData.positionz)
                );
                cylinder.scaling = new Vector3(
                  Number(addData.scalex),
                  Number(addData.scaley),
                  Number(addData.scalez)
                );
                setAdd({ ...addData, addnew: false });
                //removed, need to untrack
              } else if (result.isDenied) {
                Swal.fire(
                  "Changes are not saved, please edit again",
                  "",
                  "info"
                );
              }
            });
            // alert('Reminder: are you going to make changes to existing prime, name : ' + addData.primename + ' ?')
          } else {
            let cylinder = MeshBuilder.CreateCylinder(
              addData.primename,
              { size: 1 },
              scene
            );
            cylinder.position = new Vector3(
              Number(addData.positionx),
              Number(addData.positiony),
              Number(addData.positionz)
            );
            cylinder.scaling = new Vector3(
              Number(addData.scalex),
              Number(addData.scaley),
              Number(addData.scalez)
            );
            setAdd({ ...addData, addnew: false });
          }
          //Added, need to track
        } else if (addData.primetype == "POLYHYDRON") {
          const prePolyhedron = scene.getMeshByID(addData.primename);
          if (prePolyhedron) {
            Swal.fire({
              position: "top",
              text:
                "Do you want to edit an existing object, name: " +
                addData.primename +
                " ?",
              showDenyButton: true,
              background: "black",
              allowOutsideClick: false,
              confirmButtonText: `Confirm`,
              denyButtonText: `Cancel`,
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                Swal.fire({
                  background: "black",
                  icon: "success",
                  text: "Edited",
                  showConfirmButton: false,
                  timer: 1500,
                });
                prePolyhedron.dispose();
                let polyhedron = Mesh.CreatePolyhedron(
                  addData.primename,
                  { type: addData.polyhydrontype, size: 1 },
                  scene
                );
                polyhedron.position = new Vector3(
                  Number(addData.positionx),
                  Number(addData.positiony),
                  Number(addData.positionz)
                );
                polyhedron.scaling = new Vector3(
                  Number(addData.scalex),
                  Number(addData.scaley),
                  Number(addData.scalez)
                );
                setAdd({ ...addData, addnew: false });
                //removed, need to untrack
              } else if (result.isDenied) {
                Swal.fire(
                  "Changes are not saved, please edit again",
                  "",
                  "info"
                );
              }
            });
            // alert('Reminder: are you going to make changes to existing prime, name : ' + addData.primename + ' ?')
          } else {
            let polyhedron = Mesh.CreatePolyhedron(
              addData.primename,
              { type: addData.polyhydrontype, size: 1 },
              scene
            );
            polyhedron.position = new Vector3(
              Number(addData.positionx),
              Number(addData.positiony),
              Number(addData.positionz)
            );
            polyhedron.scaling = new Vector3(
              Number(addData.scalex),
              Number(addData.scaley),
              Number(addData.scalez)
            );
            setAdd({ ...addData, addnew: false });
          }
          //Added, need to track
        }
      }
    }
  }, [settingData, addData]);

  const onSceneReady = (scene) => {
    sceneRef.current = scene;

    // This creates and positions a free camera (non-mesh)
    let camera = new ArcRotateCamera(
      "mainCamera",
      0,
      0,
      10,
      new Vector3(0, 0, 0),
      scene
    );
    // This targets the camera to scene origin
    camera.setPosition(new Vector3(0, 500, -600));
    const canvas = scene.getEngine().getRenderingCanvas();
    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);
    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    let light = new HemisphericLight("light", new Vector3(0, 500, 0), scene);
    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;
    // initial ground
    let ground = MeshBuilder.CreateGround(
      "plane",
      { width: settingData.planesize, height: settingData.planesize },
      scene
    );
    let groundMaterial = new GridMaterial("groundMaterial", scene);
    groundMaterial.majorUnitFrequency = 10;
    groundMaterial.minorUnitVisibility = 0.5;
    groundMaterial.gridRatio = settingData.gridsize; //smallest block size
    groundMaterial.backFaceCulling = false;
    groundMaterial.mainColor = new Color3(1, 1, 1);
    groundMaterial.lineColor = new Color3(1.0, 1.0, 1.0);
    groundMaterial.opacity = 0.98;
    ground.material = groundMaterial;
  };
  /**
   * Will run on every frame render.  We are spinning the box on y-axis.
   */
  const onRender = (scene) => {
    // if (settingData.planesize !== ground.width){
    // console.log(ground.material.width)
    // }
    // if (ground !== undefined) {
    //   var deltaTimeInMillis = scene.getEngine().getDeltaTime();
    //   const rpm = 10;
    //   ground.rotation.y += ((rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000));
    // }
  };

  return (
    <SceneComponent
      antialias
      onSceneReady={onSceneReady}
      onRender={onRender}
      id="viewport"
    ></SceneComponent>
  );
};

export default ViewPortComponent;
