import * as THREE from 'three';
import confetti from 'canvas-confetti';

import { sizes, finishSizes } from '../three/Sizes';
import { camera, initializeCamera } from '../three/Camera';
import { controls } from '../three/Controls';
import { ambientLight, directionalLight } from '../three/Lights';
import { paper, borderVertices } from '../three/Paper';
import { renderer, finishRenderer } from '../three/Renderer';

import { POINTS_MARKER_COLOR, RED_MARKER_COLOR } from '../constants';

const section = document.querySelector('section');
const playCont = document.querySelector('.play-cont');
const finishCont = document.querySelector('.complete-scene');
const finishButton = document.querySelector('.finish-button');
const completeContainer = document.querySelector('.complete-container');
const foldFailToastMessage = document.querySelector('#foldFailToastMessage');

const scene = new THREE.Scene();
scene.add(paper);
scene.add(ambientLight);
scene.add(directionalLight);

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

let isDragging = false;
let closestVertexIndex = -1;
let areMarkersAtSamePosition = false;
let confettiIntervalId = 0;

const createPointsMarker = color => {
  const geometry = new THREE.SphereGeometry(0.03, 16, 16);
  const material = new THREE.MeshBasicMaterial({ color });
  const marker = new THREE.Mesh(geometry, material);
  marker.visible = false;
  return marker;
};

const pointsMarker = createPointsMarker(POINTS_MARKER_COLOR);
scene.add(pointsMarker);

const clickedRedMarker = createPointsMarker(RED_MARKER_COLOR);
scene.add(clickedRedMarker);

const handleResize = () => {
  const playRect = playCont.getBoundingClientRect();
  sizes.width = playRect.width;
  sizes.height = playRect.height;
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);

  if (!completeContainer.classList.contains('none')) {
    const finishRect = finishCont.getBoundingClientRect();
    finishSizes.width = finishRect.width;
    finishSizes.height = finishRect.height;
    camera.aspect = finishSizes.width / finishSizes.height;
    camera.updateProjectionMatrix();
    finishRenderer.setSize(finishSizes.width, finishSizes.height);
  }
};

const handleMouseMove = event => {
  const rect = playCont.getBoundingClientRect();
  mouse.x = ((event.clientX - rect.left) / sizes.width) * 2 - 1;
  mouse.y = -((event.clientY - rect.top) / sizes.height) * 2 + 1;
};

const handleMouseDown = () => {
  if (pointsMarker.visible) {
    clickedRedMarker.position.copy(pointsMarker.position);
    pointsMarker.visible = false;
    clickedRedMarker.visible = true;
    controls.enabled = false;
    isDragging = true;
  }
};

const handleMouseUp = () => {
  isDragging = false;
  controls.enabled = true;

  if (areMarkersAtSamePosition && clickedRedMarker.visible) {
    foldFailToastMessage.innerText = '마우스를 접을 곳으로 이동해 주세요!';
    foldFailToastMessage.classList.add('active');

    setTimeout(() => {
      foldFailToastMessage.classList.remove('active');
    }, 2000);
  } else if (!pointsMarker.visible && clickedRedMarker.visible) {
    foldFailToastMessage.innerText =
      '꼭짓점이 접을 수 있는 선분에 닿아야 합니다!';
    foldFailToastMessage.classList.add('active');

    setTimeout(() => {
      foldFailToastMessage.classList.remove('active');
    }, 2000);
  } else {
    // 접기 기능구현 들어가야할 곳!
  }
  clickedRedMarker.visible = false;
};

const updateClosestVertex = (intersectionPoint, thresholdDistance) => {
  let minDistance = Infinity;
  closestVertexIndex = -1;

  for (let i = 0; i < borderVertices.length; i++) {
    const vertex = new THREE.Vector3(
      borderVertices[i].x,
      borderVertices[i].y,
      borderVertices[i].z
    );
    const distance = vertex.distanceTo(intersectionPoint);

    if (distance < minDistance) {
      minDistance = distance;
      closestVertexIndex = i;
    }
  }

  if (closestVertexIndex !== -1 && minDistance < thresholdDistance) {
    const position = new THREE.Vector3(
      borderVertices[closestVertexIndex].x,
      borderVertices[closestVertexIndex].y,
      borderVertices[closestVertexIndex].z
    );

    pointsMarker.position.copy(position);
    pointsMarker.visible = true;
  } else {
    pointsMarker.visible = false;
  }

  areMarkersAtSamePosition = pointsMarker.position.equals(
    clickedRedMarker.position
  );
};

const MarkClosestVertexAnimate = () => {
  raycaster.setFromCamera(mouse, camera);
  const intersect = raycaster.intersectObject(paper);

  if (intersect.length) {
    const threshold = 0.6;
    updateClosestVertex(intersect[0].point, threshold);
  } else {
    pointsMarker.visible = false;
  }

  controls.update();

  if (completeContainer.classList.contains('none')) {
    renderer.render(scene, camera);
  } else {
    updateClosestVertex(0, 0);
    finishRenderer.render(scene, camera);
    paper.rotation.y += 0.01;
  }

  requestAnimationFrame(MarkClosestVertexAnimate);
};

const launchConfetti = () => {
  if (!completeContainer.classList.contains('none')) {
    confetti({
      particleCount: 200,
      spread: 130,
      origin: { y: 0.65 },
      zIndex: 3,
    });
  } else {
    clearInterval(confettiIntervalId);
  }
};

finishButton.addEventListener('click', () => {
  completeContainer.classList.remove('none');
  section.classList.add('active');

  launchConfetti();
  confettiIntervalId = setInterval(launchConfetti, 3500);

  renderer.clear();
  handleResize();
  initializeCamera();
});

window.addEventListener('resize', handleResize);
window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('mousedown', handleMouseDown);
window.addEventListener('mouseup', handleMouseUp);
playCont.addEventListener('dblclick', initializeCamera);

MarkClosestVertexAnimate();
