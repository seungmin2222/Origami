import * as THREE from 'three';

const container = document.querySelector('.white-color');

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setClearColor(0x000000, 0);
renderer.setSize(window.innerWidth, window.innerHeight);

container.appendChild(renderer.domElement);

const geometry = new THREE.PlaneGeometry(2, 2);

const material = new THREE.MeshBasicMaterial({
  color: 'blue',
});

const plane = new THREE.Mesh(geometry, material);

scene.add(plane);
camera.lookAt(0, 0, 0);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
