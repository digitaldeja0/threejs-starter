import * as THREE from "three";

export function createGalaxy() {
  // Multiple Cubes
  const geometry = new THREE.BoxGeometry(20, 20, 20);
  const galaxyArray = [];

  for (let i = 0; i < 100; i++) {
    const object = new THREE.Mesh(
      geometry,
      new THREE.MeshBasicMaterial({ color: Math.random() * 0xffffff })
    );

    object.position.x = Math.random() * 800 - 400;
    object.position.y = Math.random() * 800 - 400;
    object.position.z = Math.random() * 800 - 400;

    object.rotation.x = Math.random() * 2 * Math.PI;
    object.rotation.y = Math.random() * 2 * Math.PI;
    object.rotation.z = Math.random() * 2 * Math.PI;

    object.scale.x = Math.random() + 0.5;
    object.scale.y = Math.random() + 0.5;
    object.scale.z = Math.random() + 0.5;
    galaxyArray.push(object);
  }
  return galaxyArray;
}


//*****// Cut The Code Below and Paste To Your Main JS //*****//

import { createGalaxy} from "./js/galaxy"

const galaxyArray= createGalaxy()
galaxyArray.forEach((i)=>{
  scene.add(i)
})