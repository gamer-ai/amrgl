import React from 'react';
import { ArcRotateCamera, Color3,Vector3, HemisphericLight, MeshBuilder} from '@babylonjs/core';
import {GridMaterial} from '@babylonjs/materials';
import SceneComponent from './SceneComponent';
import './ViewPortComponent.css';

const ViewPortComponent = props => {
  const { settingData, setSettings } = props;
  const sceneRef = React.useRef(null);
  
  React.useEffect( () => {
      const scene = sceneRef.current;
      if(scene){
        // modify the plane, by dispose and rebuild adding to scene.
        if (settingData.gridChange){
        console.log('grid change request')
        const prePlane = scene.getMeshByID('plane')
        const prePlaneMaterial = scene.getMaterialByID('groundMaterial')
        if (prePlane._width != settingData.planesize || prePlaneMaterial.gridRatio != settingData.gridsize
          ){
          prePlane.dispose()
          prePlaneMaterial.dispose()
          let ground = MeshBuilder.CreateGround("plane", {width: settingData.planesize, height: settingData.planesize}, scene);
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

        setSettings({...settingData, gridChange: false,})
      }
      if (settingData.colorChange){
        console.log('color change request')
        scene.clearColor = new Color3(settingData.lightR, settingData.lightG, settingData.lightB);
        setSettings({...settingData, colorChange: false,})
      }

      }

    }, [settingData]);


  
  const onSceneReady = (scene) => {

    sceneRef.current = scene;

    // This creates and positions a free camera (non-mesh)
    let camera = new ArcRotateCamera("mainCamera", 0, 0, 10, new Vector3(0, 0, 0), scene);
    // This targets the camera to scene origin
    camera.setPosition(new Vector3(0, 500, -600));
    const canvas = scene.getEngine().getRenderingCanvas();
    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);
    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    let light = new HemisphericLight("light", new Vector3(0, 500, 0), scene);
    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;
    // Our built-in 'box' shape.
    // box = MeshBuilder.CreateBox("box", {size: 100}, scene);
    // Move the box upward 1/2 its height
    // box.position.y = 50;
    // Our built-in 'ground' shape.
    let ground = MeshBuilder.CreateGround("plane", {width: settingData.planesize, height: settingData.planesize}, scene);
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
  /**
   * Will run on every frame render.  We are spinning the box on y-axis.
   */
  const onRender = scene => {
    
    // if (settingData.planesize !== ground.width){
      // console.log(ground.material.width)
    // }
    // if (ground !== undefined) {
    //   var deltaTimeInMillis = scene.getEngine().getDeltaTime();
    //   const rpm = 10;
    //   ground.rotation.y += ((rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000));
    // }
  }
  
  return(
    <SceneComponent antialias onSceneReady={onSceneReady} onRender={onRender} id='viewport'>
    </SceneComponent>
  )
}

export default ViewPortComponent;