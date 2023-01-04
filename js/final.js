import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as dat from "lil-gui";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";

// Canvas
const canvas = document.querySelector("#bg");
canvas.width = 700; // canvas.width =window.innerWidth;
canvas.height = 500; // canvas.height = window.innerHeight;

// Scene, Camere, Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  59,
  canvas.width / canvas.height,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
renderer.setSize(canvas.width, canvas.height);
document.body.appendChild(renderer.domElement);
// Controls
const controls = new OrbitControls(camera, renderer.domElement);
// Dat Gui
const gui = new dat.GUI();
// Light
const light = new THREE.AmbientLight(0xffffff); // soft white light
scene.add(light);
// Update Camera
camera.position.z = 3;
// Add Cube
const box = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(box, material);
scene.add(cube);




// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  camera.aspect = canvas.width / canvas.height;
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  camera.updateProjectionMatrix();
  renderer.setPixelRatio(window.devicePixelRatio);
  controls.update();
  renderer.render(scene, camera);
}

animate();
