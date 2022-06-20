import * as THREE from "three";

export const canvas = document.createElement("canvas");
export const scene = new THREE.Scene();
export const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
export const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvas });

const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

export const resize = (width, height) => {
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
};

window.addEventListener("resize", () => {
  resize(window.innerWidth - 32, window.innerHeight - 36);
});

export const createScene = ({ width, height }) => {
  scene.remove.apply(scene, scene.children);

  resize(width, height);
  animate();
};
