import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const container = document.querySelector('');

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

const colors = [
  0x1aa24d, 0xf2482e, 0x343394, 0xfed53d, 0x000000, 0xff9fd5, 0x9ddef4,
  0xff8158,
];

const getRandomColors = length => {
  const frontColorIndex = Math.floor(Math.random() * length);
  let backColorIndex = 0;

  do {
    backColorIndex = Math.floor(Math.random() * length);
  } while (backColorIndex === frontColorIndex);

  return [frontColorIndex, backColorIndex];
};

const [frontColorIndex, backColorIndex] = getRandomColors(colors.length);
const frontColor = colors[frontColorIndex];
const backColor = colors[backColorIndex];

const material = new THREE.ShaderMaterial({
  uniforms: {
    colorFront: { value: new THREE.Color(frontColor) },
    colorBack: { value: new THREE.Color(backColor) },
  },
  vertexShader: `
    varying vec3 vNormal;
    void main() {
      vNormal = normalize(normalMatrix * normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform vec3 colorFront;
    uniform vec3 colorBack;
    varying vec3 vNormal;
    void main() {
      if (gl_FrontFacing) {
        gl_FragColor = vec4(colorFront, 1.0);
      } else {
        gl_FragColor = vec4(colorBack, 1.0);
      }
    }
  `,
  side: THREE.DoubleSide,
});

const plane = new THREE.Mesh(geometry, material);
scene.add(plane);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(1, 1, 1).normalize();
scene.add(directionalLight);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();
