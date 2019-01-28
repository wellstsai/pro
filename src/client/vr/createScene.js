import * as BABYLON from 'babylonjs';
import 'babylonjs-materials';

export const createScene = (engine, canvas) => {
  // Create a basic BJS Scene object.
  engine.switchFullscreen(true);
  const scene = new BABYLON.Scene(engine);

  // var camera = new BABYLON.WebVRFreeCamera("camera1", new BABYLON.Vector3(0, 0, 0), scene);
  // camera.attachControl(canvas, true);
  // scene.onPointerDown = function () {
  //   scene.onPointerDown = undefined
  //   camera.attachControl(canvas, true);
  // }

  // Parameters : name, position, scene
  var camera = new BABYLON.UniversalCamera('UniversalCamera', new BABYLON.Vector3(0, 0, 10), scene);

  // Targets the camera to a particular position. In this case the scene origin
  camera.setTarget(BABYLON.Vector3.Zero());

  // Attach the camera to the canvas
  camera.attachControl(canvas, true);

  scene.gravity = new BABYLON.Vector3(0, -9.81, 0);
  camera.applyGravity = true;

  camera.ellipsoid = new BABYLON.Vector3(1, 1, 1);

  scene.collisionsEnabled = true;
  camera.checkCollisions = true;

  // Create a basic light, aiming 0,1,0 - meaning, to the sky.
  const light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), scene);

  // Create a built-in "sphere" shape. 
  const sphere = BABYLON.MeshBuilder.CreateSphere('sphere', {segments:16, diameter:2}, scene);

  // Move the sphere upward 1/2 of its height.
  sphere.position.y = 1;

  // Create a built-in "ground" shape.
  // const ground = BABYLON.MeshBuilder.CreateGround('ground1', {height:6, width:6, subdivisions: 2}, scene);

  const skybox = BABYLON.Mesh.CreateBox('skyBox', 10000.0, scene);
  const skyboxMaterial = new BABYLON.StandardMaterial('skyBox', scene);
  skyboxMaterial.backFaceCulling = false;
  skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture('assets/skybox/TropicalSunnyDay/TropicalSunnyDay', scene);
  // skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture('assets/skybox/sky35/citysky', scene);
  skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
  skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
  skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
  skyboxMaterial.disableLighting = true;
  skybox.material = skyboxMaterial;
  skybox.infiniteDistance = true;
  skybox.renderingGroupId = 0;

  // const envTexture = new BABYLON.CubeTexture('assets/skybox/sky35/citysky', scene);
  // scene.createDefaultSkybox(envTexture, true, 1000);



  // var box = BABYLON.Mesh.CreateBox('SkyBox', 1000, scene, false, BABYLON.Mesh.BACKSIDE);
  // box.material = new BABYLON.SkyMaterial('sky', scene);
  // box.material.inclination = -0.35;

  // var ground = BABYLON.MeshBuilder.CreateGround('ground', {}, scene); //default ground

  var ground = BABYLON.MeshBuilder.CreateGround('myGround', {width: 600, height: 400}, scene);
  ground.checkCollisions = true;
  // // Sky material
  // var skyboxMaterial = new BABYLON.SkyMaterial('skyMaterial', scene);
  // skyboxMaterial.backFaceCulling = false;
  // //skyboxMaterial._cachedDefines.FOG = true;

  // // Sky mesh (box)
  // var skybox = BABYLON.Mesh.CreateBox('skyBox', 1000.0, scene);
  // skybox.material = skyboxMaterial;

  // Return the created scene.
  return scene;
};
