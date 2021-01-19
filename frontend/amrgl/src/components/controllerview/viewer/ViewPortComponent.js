import React from "react";
// import * as BABYLON from 'babylonjs';
// import 'babylonjs-loaders';
import "@babylonjs/loaders/OBJ";
import {
  ArcRotateCamera,
  Color3,
  Vector3,
  HemisphericLight,
  MeshBuilder,
  Mesh,
  UtilityLayerRenderer,
  PositionGizmo,
  RotationGizmo,
  HighlightLayer,
  SceneLoader,
} from "@babylonjs/core";
import { GridMaterial } from "@babylonjs/materials";
import SceneComponent from "./SceneComponent";
import "./ViewPortComponent.css";
import Swal from "sweetalert2";
let translategizmo = null;
let rotategizmo = null;
let utilLayer = null;
let highlight = null;

function degree_to_radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

const ViewPortComponent = (props) => {
  const {
    settingData,
    setSettings,
    addData,
    setAdd,
    fileControl,
    setFileControl,
    libraryData,
    setBuiltin,
  } = props;
  const sceneRef = React.useRef(null);

  React.useEffect(() => {
    const scene = sceneRef.current;

    if (scene) {
      // modify the plane, by dispose and rebuild adding to scene.
      if (!translategizmo) {
        utilLayer = new UtilityLayerRenderer(scene);
        // Create the gizmo and attach to the sphere
        translategizmo = new PositionGizmo(utilLayer);
        rotategizmo = new RotationGizmo(utilLayer);

        highlight = new HighlightLayer(scene);
      } else {
        translategizmo.attachedMesh = null;
        translategizmo.dispose();
        rotategizmo.dispose();
        utilLayer.dispose();
        highlight.dispose();
        utilLayer = new UtilityLayerRenderer(scene);
        // Create the gizmo and attach to the sphere
        translategizmo = new PositionGizmo(utilLayer);
        rotategizmo = new RotationGizmo(utilLayer);
        highlight = new HighlightLayer(scene);
      }

      translategizmo.attachedMesh = null;
      // Keep the gizmo fixed to world rotation
      translategizmo.updateGizmoRotationToMatchAttachedMesh = false;
      translategizmo.updateGizmoPositionToMatchAttachedMesh = true;
      rotategizmo.updateGizmoRotationToMatchAttachedMesh = false;
      rotategizmo.updateGizmoPositionToMatchAttachedMesh = true;

      scene.onPointerDown = function (evt, pickResult) {
        // We try to pick an object

        if (pickResult.hit) {
          console.log(pickResult.pickedMesh.name);
          highlight.removeAllMeshes();
          translategizmo.attachedMesh = pickResult.pickedMesh;
          rotategizmo.attachedMesh = pickResult.pickedMesh;
          highlight.addMesh(pickResult.pickedMesh, Color3.Magenta());
        } else {
          translategizmo.attachedMesh = null;
          rotategizmo.attachedMesh = null;
          highlight.removeAllMeshes();
        }
      };
      if (settingData.gridChange) {
        console.log("grid change request");
        scene.clearColor = new Color3(
          settingData.lightR,
          settingData.lightG,
          settingData.lightB
        );
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
          ground.isPickable = false;
        }

        setSettings({ ...settingData, gridChange: false });
      }
      if (fileControl.fileadd) {
        console.log(fileControl.file);
        //test
        SceneLoader.ImportMesh(
          "",
          "https://raw.githubusercontent.com/gamer-ai/amrgl/main/frontend/amrgl/src/assets/example/metal_shelf.obj",
          "",
          scene,
          function (newMeshes) {
            console.log(newMeshes[1].name);
            console.log(newMeshes);

            let selectedBuiltIn = newMeshes[1];
            // // cap.position.set(42, 260, 13);
            selectedBuiltIn.scaling = new Vector3(1, 1, 1);
          }
        );
        setFileControl({ ...fileControl, fileadd: false });
      }
      if (libraryData.builtinnew) {
        console.log("add new object from library request");
        if (libraryData.builtintype == "Storage_Shelf_100x150x40") {
          const preShelf = scene.getMeshByID(libraryData.builtinname);

          console.log(preShelf);
          if (preShelf) {
            console.log("found exist!");
            Swal.fire({
              position: "top",
              text:
                "Do you want to edit an existing object, name: " +
                libraryData.builtinname +
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
                preShelf.position = new Vector3(
                  Number(libraryData.positionx),
                  Number(libraryData.positiony),
                  Number(libraryData.positionz)
                );
                preShelf.scaling = new Vector3(
                  Number(libraryData.scalex),
                  Number(libraryData.scaley),
                  Number(libraryData.scalez)
                );
                preShelf.rotation = new Vector3(
                  degree_to_radians(Number(libraryData.rotationx)),
                  degree_to_radians(Number(libraryData.rotationy)),
                  degree_to_radians(Number(libraryData.rotationz))
                );
                setBuiltin({ ...libraryData, builtinnew: false });
                //removed, need to untrack
              } else if (result.isDenied) {
                Swal.fire({
                  background: "black",
                  icon: "info",
                  text: "Changes are not saved, please edit again",
                });
              }
            });
          } else {
            console.log("imported new mesh!");
            SceneLoader.ImportMesh(
              "",
              "https://raw.githubusercontent.com/gamer-ai/amrgl/main/frontend/amrgl/src/assets/example/metal_shelf.obj",
              "",
              scene,
              function (newMeshes) {
                let selectedBuiltin = newMeshes[1];
                selectedBuiltin.id = libraryData.builtinname;
                console.log(selectedBuiltin.name);
                selectedBuiltin.position = new Vector3(
                  Number(libraryData.positionx),
                  Number(libraryData.positiony),
                  Number(libraryData.positionz)
                );
                selectedBuiltin.scaling = new Vector3(
                  Number(libraryData.scalex),
                  Number(libraryData.scaley),
                  Number(libraryData.scalez)
                );
                selectedBuiltin.rotation = new Vector3(
                  degree_to_radians(Number(libraryData.rotationx)),
                  degree_to_radians(Number(libraryData.rotationy)),
                  degree_to_radians(Number(libraryData.rotationz))
                );
              }
            );
            setBuiltin({ ...libraryData, builtinnew: false });
          }
        }
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
                box.rotation = new Vector3(
                  degree_to_radians(Number(addData.rotationx)),
                  degree_to_radians(Number(addData.rotationy)),
                  degree_to_radians(Number(addData.rotationz))
                );
                setAdd({ ...addData, addnew: false });
                //removed, need to untrack
              } else if (result.isDenied) {
                Swal.fire({
                  background: "black",
                  icon: "info",
                  text: "Changes are not saved, please edit again",
                });
              }
            });
            // alert('Reminder: are you going to make changes to existing prime, name : ' + addData.primename + ' ?')
          } else {
            let box = MeshBuilder.CreateBox(
              addData.primename,
              { size: 1 },
              scene
            );
            box.isPickable = true;
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
            box.rotation = new Vector3(
              degree_to_radians(Number(addData.rotationx)),
              degree_to_radians(Number(addData.rotationy)),
              degree_to_radians(Number(addData.rotationz))
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
                sphere.rotation = new Vector3(
                  degree_to_radians(Number(addData.rotationx)),
                  degree_to_radians(Number(addData.rotationy)),
                  degree_to_radians(Number(addData.rotationz))
                );
                setAdd({ ...addData, addnew: false });
                //removed, need to untrack
              } else if (result.isDenied) {
                Swal.fire({
                  background: "black",
                  icon: "info",
                  text: "Changes are not saved, please edit again",
                });
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
            sphere.rotation = new Vector3(
              degree_to_radians(Number(addData.rotationx)),
              degree_to_radians(Number(addData.rotationy)),
              degree_to_radians(Number(addData.rotationz))
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
                cylinder.rotation = new Vector3(
                  degree_to_radians(Number(addData.rotationx)),
                  degree_to_radians(Number(addData.rotationy)),
                  degree_to_radians(Number(addData.rotationz))
                );
                setAdd({ ...addData, addnew: false });
                //removed, need to untrack
              } else if (result.isDenied) {
                Swal.fire({
                  background: "black",
                  icon: "info",
                  text: "Changes are not saved, please edit again",
                });
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
            cylinder.rotation = new Vector3(
              degree_to_radians(Number(addData.rotationx)),
              degree_to_radians(Number(addData.rotationy)),
              degree_to_radians(Number(addData.rotationz))
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
                polyhedron.rotation = new Vector3(
                  degree_to_radians(Number(addData.rotationx)),
                  degree_to_radians(Number(addData.rotationy)),
                  degree_to_radians(Number(addData.rotationz))
                );
                setAdd({ ...addData, addnew: false });
                //removed, need to untrack
              } else if (result.isDenied) {
                Swal.fire({
                  background: "black",
                  icon: "info",
                  text: "Changes are not saved, please edit again",
                });
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
            polyhedron.rotation = new Vector3(
              degree_to_radians(Number(addData.rotationx)),
              degree_to_radians(Number(addData.rotationy)),
              degree_to_radians(Number(addData.rotationz))
            );
            setAdd({ ...addData, addnew: false });
          }
          //Added, need to track
        }
      }
    }
  }, [settingData, addData, fileControl, libraryData]);

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
    ground.isPickable = false;
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
