<p align="center">
  <img src="https://github.com/user-attachments/assets/5158795f-b126-44d5-ac23-ed81fedfab66" width="700px" alt="mainbg11">
  <img src="https://github.com/user-attachments/assets/5158795f-b126-44d5-ac23-ed81fedfab66" width="700px" alt="mainbg11">
</p>

<h1 align="center"> ORIGAMI : 3D </h1>
<p align="center"><img src="https://github.com/user-attachments/assets/8baa6636-ef2e-41de-b7ea-a3c92ca40d69" width="500px" alt="readmegif"></p>
<p align="center"><b>Origami:3D</b>는 아날로그 종이접기를 구현한 종이접기 3D 시뮬레이션 입니다. 정교하고 생동감있는 종이접기 시뮬레이션을 구현하여<br>종이접기의 각도와 접힘, 펼쳐짐이 명확하게 보여주어 사용자들이 더 명확하게 파악할 수 있도록 했습니다.</p>
<p align="center"><a href="https://deploy-preview-73--dazzling-blini-fa20d1.netlify.app/">Deployed website</a> | <a href="https://github.com/Origami-5M/Origami">Web Repository</a></p>
<h1 align="center"> ORIGAMI : 3D </h1>
<p align="center"><img src="https://github.com/user-attachments/assets/8baa6636-ef2e-41de-b7ea-a3c92ca40d69" width="500px" alt="readmegif"></p>
<p align="center"><b>Origami:3D</b>는 아날로그 종이접기를 구현한 종이접기 3D 시뮬레이션 입니다. 정교하고 생동감있는 종이접기 시뮬레이션을 구현하여<br>종이접기의 각도와 접힘, 펼쳐짐이 명확하게 보여주어 사용자들이 더 명확하게 파악할 수 있도록 했습니다.</p>
<p align="center"><a href="https://origami3d.online/">Deployed website</a> | <a href="https://github.com/Origami-5M/Origami">Web Repository</a></p>
<br>

# ✔️ Tech Stack

# ✔️ Tech Stack

### Environment

<img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=ffffff"/> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=ffffff"/> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=ffffff"/>

### Development

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=black"/> <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=black"/> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/> <img src="https://img.shields.io/badge/threedotjs-00AFAA?style=for-the-badge&logo=threedotjs&logoColor=black"/>

### Database

<img src="https://img.shields.io/badge/firebase-DD2C00?style=for-the-badge&logo=firebase&logoColor=black(https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=black)"/>

### Deployment

<img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify-&logoColor=black"/>

# ✔️ Index

- [✔️ Motivation](#️-motivation)
- [🔍 Features](#-features)
  - [✔︎ 가장 가까운 꼭지점 선택](#︎-가장-가까운-꼭지점-선택)
  - [✔︎ 미리보기와 종이접기](#︎-미리보기와-종이접기)
  - [✔︎ 종이 펼치기](#︎-종이-펼치기)
  - [✔︎ 공유하기](#︎-공유하기)
- [💡 Challenges](#-challenges)
  - [1. 종이접기의 축을 어떻게 구할 수 있을까?](#1-종이접기의-축을-어떻게-구할-수-있을까)
    - [1 - 1. 우리만의 축을 만들어 보자!](#1---1-우리만의-축을-만들어-보자)
    - [1 - 2. 근데 확장되는 축을 어떻게 종이의 크기 만큼 멈추게 할 수 있을까?](#1---2-근데-확장되는-축을-어떻게-종이의-크기-만큼-멈추게-할-수-있을까)
    - [1 - 3. 종이가 접힐 때 마다 축의 각도가 이상한데?](#1---3-종이가-접힐-때-마다-축의-각도가-이상한데)
    - [1 - 4. 업데이트되는 종이의 너비를 어떻게 지정해 줄 수 있을까?](#1---4-업데이트되는-종이의-너비를-어떻게-지정해-줄-수-있을까)
  - [2. Convex Hull 알고리즘의 최적화](#2-convex-hull-알고리즘의-최적화)
  - [3. 이제 접어보자!](#3-이제-접어보자)
    - [3 - 1. 접고자하는 부분의 판별](#3---1-접고자하는-부분의-판별)
    - [3 - 2. 면의 분리](#3---2-면의-분리)
    - [3 - 3. 어느 면이 접힐지에 대한 기준 세우기](#3---3-어느-면이-접힐지에-대한-기준-세우기)
    - [3 - 4. 접기](#3---4-접기)
  - [4. Z-Fighting 해결](#4-z-fighting-해결)
    - [4 - 1. 사용자가 어느 방향을 바라보고 있는지 판별하기](#4---1-사용자가-어느-방향을-바라보고-있는지-판별하기)
    - [4 - 2. 두께 구현하기](#4---2-두께-구현하기)
  - [5. 펼치기](#5-펼치기)
    - [5 - 1. 회전 구현을 위한 방법들](#5---1-회전-구현을-위한-방법들)
    - [5 - 2. 짐벌락의 해결책 쿼터니언](#5---2-짐벌락의-해결책-쿼터니언)
    - [5 - 3. 회전을 구현하기 위해 필요한 데이터들](#5---3-회전을-구현하기-위해-필요한-데이터들)
- [✔️ React Three Fiber로 리팩토링 하려는 이유?](#️-react-three-fiber로-리팩토링-하려는-이유)
  - [보일러플레이트 코드를 줄여서 코드의 가독성을 UP!](#보일러플레이트-코드를-줄여서-코드의-가독성을-up)
  - [React의 hooks, context, 상태 관리 라이브러리 등을 3D 그래픽 개발에 활용할 수 있다.](#react의-hooks-context-상태-관리-라이브러리-등을-3d-그래픽-개발에-활용할-수-있다)
- [✔️ Schedules](#️-schedules)
- [📝 회고](#-회고)
  - [이승민](#이승민)
  - [정소희](#정소희)
  - [주혜지](#주혜지)

# ✔️ Motivation

현재 존재하는 종이접기 레퍼런스는 2D로만 이루어져 웹 상에서 종이접기의 복잡한 구조와 미적 요소를 정확하게 시각화하기 어려웠습니다.
이러한 한계 때문에 종이접기를 배우고 즐기려는 사람들이 더욱 정밀하고 창의적인 작업을 수행하는 데에 어려움을 겪고 있다 생각이 되었고
<b>저희는 누구나 쉽게 3D로 종이접기 작품을 만들고 탐색할 수 있는 플랫폼을 제공하고자 이 프로젝트를 시작하게 되었습니다.</b> <br>
<br>
3D로 구현된 Origami는 사용자들이 다양한 각도에서 종이접기를 탐색할 수 있게 하며, 접힘 방식과 각도를 명확하게 보여주어
각 부분의 위치와 형태를 더욱 정확하게 파악할 수 있도록 해주었습니다. 또한 Origami을 통해 사용자는 자신의 창의력을 발휘하여
새로운 종이접기 작품을 만들고, 다른 사용자와 작품을 공유하며 아이디어를 교환할 수 있도록 하였습니다.

# 🔍 Features

# 🔍 Features

### ✔︎ 가장 가까운 꼭지점 선택

### ✔︎ 가장 가까운 꼭지점 선택

사용자가 종이 위에 mouseover 시 마우스와 가장 가까운 좌표를 찾아 표시됩니다.

<img src="https://github.com/user-attachments/assets/913b0abf-f0b0-42e8-ac82-fa7d0eebbae0" width="600px" alt="edge"><br>
<img src="https://github.com/user-attachments/assets/59205a83-ab4a-4f0c-af40-2db14fd29ebe"  width="600px" alt="edge">

### ✔︎ 미리보기와 종이접기

<img src="https://github.com/user-attachments/assets/913b0abf-f0b0-42e8-ac82-fa7d0eebbae0" width="600px" alt="edge"><br>
<img src="https://github.com/user-attachments/assets/59205a83-ab4a-4f0c-af40-2db14fd29ebe"  width="600px" alt="edge">

### ✔︎ 미리보기와 종이접기

첫번째 좌표를 클릭한 후 드래그하여 두번째 좌표에서 mouse up하게 되면 종이가 접힙니다.<br>두번째 좌표의 mouse up은 선분에 있는 꼭짓점만 가능합니다.<br>

<img src="https://github.com/user-attachments/assets/9530992d-c7be-4e99-930f-c27a06fcce4c" width="600px" alt="folding">
<br><br>

첫번째 좌표 클릭 후 드래그 시 mouse over되는 점마다 미리보기가 나타납니다.<br>
두번째 좌표에서 mouse up 시 첫번째 좌표 기준으로 접힐 방향이 정해지고 종이가 접힙니다.<br>
회전축을 기준으로 종이가 접힙니다.
첫번째 좌표를 클릭한 후 드래그하여 두번째 좌표에서 mouse up하게 되면 종이가 접힙니다.<br>두번째 좌표의 mouse up은 선분에 있는 꼭짓점만 가능합니다.<br>

<img src="https://github.com/user-attachments/assets/9530992d-c7be-4e99-930f-c27a06fcce4c" width="600px" alt="folding">
<br><br>

첫번째 좌표 클릭 후 드래그 시 mouse over되는 점마다 미리보기가 나타납니다.<br>
두번째 좌표에서 mouse up 시 첫번째 좌표 기준으로 접힐 방향이 정해지고 종이가 접힙니다.<br>
회전축을 기준으로 종이가 접힙니다.

<img src="https://github.com/user-attachments/assets/4dc98033-8af9-4506-9524-cd79a9c780b7" width="600px" alt="folding"><br>

### ✔︎ 종이 펼치기

접힌 종이의 면을 클릭 시 종이가 펼쳐집니다.

<img src="https://github.com/user-attachments/assets/8c9f531e-45f0-4921-89d2-c694f56d4f86" width="600px" alt="unfolding"><br>
<img src="https://github.com/user-attachments/assets/8f271fc3-3ab3-469f-ab7c-388eb6dafaee" width="600px" alt="unfolding">

### ✔︎ 공유하기

완료페이지에서 닉네임을 작성 후 share 버튼을 누르면 닉네임과 종이접기가 저장됩니다.<br>
갤러리페이지에서 저장한 종이접기 3D 화면과 닉네임이 모달창에 나타납니다.

<img src="https://github.com/user-attachments/assets/d678783f-1a3c-4d70-8dd7-14f2a3da5403" width="600px" alt="savename">
<img src="https://github.com/user-attachments/assets/d678783f-1a3c-4d70-8dd7-14f2a3da5403" width="600px" alt="savename">

모달의 우측하단에 공유하기 버튼을 누르면 링크가 복사됩니다.<br>
모달의 우측하단에 공유하기 버튼을 누르면 링크가 복사됩니다.<br>
링크를 웹상에 해당 링크를 입력하면 갤러리리스트에서 해당 모달창이 나타납니다.

<img src="https://github.com/user-attachments/assets/d25dddf1-677f-4263-950d-e78e86a8271a" width="600px" alt="link">

# 💡 Challenges

<img src="https://github.com/user-attachments/assets/d25dddf1-677f-4263-950d-e78e86a8271a" width="600px" alt="link">

# 💡 Challenges

## 1. 종이접기의 축을 어떻게 구할 수 있을까?

<p align="center">
  <img src="https://github.com/user-attachments/assets/3ef96709-185d-4c30-b75d-a1423dc7c4a4" width="600px" alt="Untitled1">
  <img src="https://github.com/user-attachments/assets/3ef96709-185d-4c30-b75d-a1423dc7c4a4" width="600px" alt="Untitled1">
</p>

종이접기 접기를 구현하기위해 제일 처음 만난 챌린지는 그래서 축은 어떻게 구하지? 였습니다.<br>
종이접기 축을 구하는 공식을 알기 위해 여러 레퍼런스를 찾아보았고 Origami and Geometric Constructions의 저술에서 첫번째 시작점과 두번째 끝점의 거리의 1/2 시점에서 접힐 주름이 생긴다는 힌트를 얻을 수 있었습니다.

### 1 - 1. 우리만의 축을 만들어 보자!

<table align="center">
종이접기 접기를 구현하기위해 제일 처음 만난 챌린지는 그래서 축은 어떻게 구하지? 였습니다.<br>
종이접기 축을 구하는 공식을 알기 위해 여러 레퍼런스를 찾아보았고 Origami and Geometric Constructions의 저술에서 첫번째 시작점과 두번째 끝점의 거리의 1/2 시점에서 접힐 주름이 생긴다는 힌트를 얻을 수 있었습니다.

### 1 - 1. 우리만의 축을 만들어 보자!

<table align="center">
  <tr>
    <td width="300px" align="center"><img src="https://github.com/user-attachments/assets/be34247d-f3f8-4c42-ae8b-a3c6e1327a4e" alt="Image 1" width="300px"></td>
    <td width="300px" align="center"><img src="https://github.com/user-attachments/assets/1c41094f-b57f-4e39-8d2e-91bf8058394e" alt="Image 2" width="300px"></td>
    <td width="300px" align="center"><img src="https://github.com/user-attachments/assets/be34247d-f3f8-4c42-ae8b-a3c6e1327a4e" alt="Image 1" width="300px"></td>
    <td width="300px" align="center"><img src="https://github.com/user-attachments/assets/1c41094f-b57f-4e39-8d2e-91bf8058394e" alt="Image 2" width="300px"></td>
  </tr>
</table>

첫번째 시작점과 두번째 끝점의 거리의 1/2 시점에서 접힐 주름이 생긴다는 힌트를 저희는 3D 종이접기로 옮겨야했습니다. 저희는 사용자가 처음 마우스를 드래그 하기 시작한 좌표와 뗀 좌표를 계산하여 벡터를 구하였고 두 점을 잇는 선분의 중간지점을 찾았습니다.
첫번째 시작점과 두번째 끝점의 거리의 1/2 시점에서 접힐 주름이 생긴다는 힌트를 저희는 3D 종이접기로 옮겨야했습니다. 저희는 사용자가 처음 마우스를 드래그 하기 시작한 좌표와 뗀 좌표를 계산하여 벡터를 구하였고 두 점을 잇는 선분의 중간지점을 찾았습니다.

<p align="center">
  <img src="https://github.com/user-attachments/assets/216a4d48-a67b-4bf5-9ec6-7e980747abce" alt="Untitled 2">
</p>

두 점의 벡터 방향을 90도로 회전 시켜야 했는데 z축 기준으로 90도 회전 시켜 3D 공간에서 저희가 원하는 축의 방향을 얻을 수 있었습니다. 그리고 두 점을 잇는 선분의 중앙, 즉 시작점에서 회전시킨 벡터를 기준으로 양쪽으로 확장 시켰습니다.

### 1 - 2. 근데 확장되는 축을 어떻게 종이의 크기 만큼 멈추게 할 수 있을까?

두 점의 벡터 방향을 90도로 회전 시켜야 했는데 z축 기준으로 90도 회전 시켜 3D 공간에서 저희가 원하는 축의 방향을 얻을 수 있었습니다. 그리고 두 점을 잇는 선분의 중앙, 즉 시작점에서 회전시킨 벡터를 기준으로 양쪽으로 확장 시켰습니다.

### 1 - 2. 근데 확장되는 축을 어떻게 종이의 크기 만큼 멈추게 할 수 있을까?

<p align="center">
  <img src="https://github.com/user-attachments/assets/fe22166b-b3e9-40c4-9e08-03d6f740370f" width="300px" alt="Untitled 3">
</p>

확장되고 있는 벡터의 축을 어떻게 멈추게 할 수 있을까? 라는 고민을 하였고 그럼 벡터의 축의 좌표와 종이의 경계점들의 좌표 중 하나와 만나는 순간 확장되는 것을 멈추게 하자 라는 생각을 하였습니다. 그래서 초기 종이의 크기를 기준으로 경계점들의 좌표와 만나면 확장되는 것을 멈추게 하였습니다.

### 1 - 3. 종이가 접힐 때 마다 축의 각도가 이상한데?

### 1 - 3. 종이가 접힐 때 마다 축의 각도가 이상한데?

저희는 위에서 구현한 회전축을 가지고 접기 기능까지 구현을 해냈습니다. 하지만 여러번 종이를 접어보니 축의 위치가 미세하게 벗어나는 버그를 찾아낼 수 있었습니다. 이유를 분석해 보니 종이는 접힐 때마다 크기가 작아지는데 경계점의 좌표는 초기 종이의 경계점 그대로여서 끝점이 종이의 너비를 훨씬 벗어나 생기고 있기에 축의 각도가 어긋나고 있던 것 이였습니다. 결국 저희는 종이가 접힐때 마다 경계점을 업데이트해야 한다는 결론을 내렸습니다.

### 1 - 4. 업데이트되는 종이의 너비를 어떻게 지정해 줄 수 있을까?

### 1 - 4. 업데이트되는 종이의 너비를 어떻게 지정해 줄 수 있을까?

문제는 사용자가 종이를 접을 수 있는 경우의 수가 너무 많다는 점 이였습니다. 이 많은 경우의 수의 너비를 모두 지정해서 경계점들을 찾기에는 너무나도 비효율적 이였습니다. 여러 방법을 찾아보다가 저희는 Convex Hull 알고리즘을 발견하게 되었습니다.

<p align="center">
  <img src="https://github.com/user-attachments/assets/b889eebe-d5a9-4225-8716-33245b619886" width="600px" alt="Untitled 4">
  <img src="https://github.com/user-attachments/assets/b889eebe-d5a9-4225-8716-33245b619886" width="600px" alt="Untitled 4">
</p>

> **_컨벡스 헐 알고리즘이란?_** <br>
> 컨벡스 헐(Convex Hull) 알고리즘은 평면 상에서 이루고 있는 점들의 제일 외곽점들을 찾아 작은 다각형을 찾는 알고리즘.

1. y좌표가 가장 작은 좌표를 기준점으로 잡는다.
2. 기준점과의 기울기를 기준으로 반시계 방향으로 정렬한다.
3. 첫번째 두번째 두 점을 이은 직선에 대해 현재 탐색중인 점이 왼쪽에 있다면 스택에 push하고 다음 점을 확인한다.
4. 그렇지 않다면 스택을 pop한다.
5. n번째 점까지 탐색이 끝나면 스택에는 컨벡스 헐을 구성하는 점들이 포함한다.
   <br><br>

> **_컨벡스 헐 알고리즘이란?_** <br>
> 컨벡스 헐(Convex Hull) 알고리즘은 평면 상에서 이루고 있는 점들의 제일 외곽점들을 찾아 작은 다각형을 찾는 알고리즘.

1. y좌표가 가장 작은 좌표를 기준점으로 잡는다.
2. 기준점과의 기울기를 기준으로 반시계 방향으로 정렬한다.
3. 첫번째 두번째 두 점을 이은 직선에 대해 현재 탐색중인 점이 왼쪽에 있다면 스택에 push하고 다음 점을 확인한다.
4. 그렇지 않다면 스택을 pop한다.
5. n번째 점까지 탐색이 끝나면 스택에는 컨벡스 헐을 구성하는 점들이 포함한다.
   <br><br>

저희는 Convex Hull 알고리즘을 이용하여 사용자가 종이를 접을 때마다 종이의 좌표 중 경계점 좌표들을 얻을 수 있었고 경계점들을 계속 업데이트하여 접힐때 마다 새로운 축을 얻을 수 있었습니다.

## 2. Convex Hull 알고리즘의 최적화

미리보기 선분도 Convex Hull 알고리즘으로 구할 수 있겠다는 생각으로 회전축을 기준으로 접히는 영역의 좌표들을 반사 변환을 이용해 경계점의 좌표를 구했습니다. 하지만 모든 좌표를 순환하며 경계점을 판단하게 되면 처리 속도가 너무 오래걸린다는 단점이 있었습니다.

<p align="center">
  <img src="https://github.com/user-attachments/assets/8d45d675-a26b-4a1c-9a99-5f406734560e" width="300px" alt="Untitled 5">
</p>

미리보기 선분도 Convex Hull 알고리즘으로 구할 수 있겠다는 생각으로 회전축을 기준으로 접히는 영역의 좌표들을 반사 변환을 이용해 경계점의 좌표를 구했습니다. 하지만 모든 좌표를 순환하며 경계점을 판단하게 되면 처리 속도가 너무 오래걸린다는 단점이 있었습니다.<br><br>
그래서 이 문제를 해결하기위해 y축 기준으로 두 집합(upper, lower)으로 나눴습니다. 각각의 집합으로 나눠서 순환시켜 하단과 상단 경계점들을 개별적으로 처리하여 각 점의 포함 여부를 쉽게 확인하고 효율적으로 Convex Hull을 구성시켜 시간복잡도를 줄였습니다.

## 3. 이제 접어보자!

이제 접을 기준이 될 축을 구할 수 있게 되었습니다. 이제 접기만하면 됩니다!

접기를 구현하기 위해 많은 선택지가 있었지만, 아날로그 종이접기와 동일한 사용자 경험을 제공하기위해 면이 접혔을 때 새로운 객체가 생성되는 것이아닌 모든 정점이 반대편으로 이동되는 방식을 채택했습니다.

접기 알고리즘의 흐름은 다음과 같습니다.

- 접힌 선이 주어지면 종이를 두 개의 다각형으로 분리해 판별합니다.
- 사용자가 접고자하는 방향을 판별합니다.
- 다각형에 포함된 모든 정점을 반사변환합니다.

### 3 - 1. 접고자하는 부분의 판별

**벡터와 선형대수학**

Three.js의 3D 그래픽을 생성하고 조작하기 위해서는 공간 내 객체의 위치, 방향, 크기 등을 표현하고 조작하는 벡터에 대한 이해가 필요합니다.

- **벡터 (Vector)**
  벡터는 크기와 방향을 모두 가진 물리량으로, 3차원 공간에서 주로 위치, 속도, 힘 등을 표현할 때 사용됩니다. 또한 선형대수의 기본 단위이기도합니다.
  Three.js에서는 `THREE.Vector3` 클래스를 사용하여 3차원 벡터를 다룹니다. 예를 들어, 저희 프로젝트에서는 축과 사용자가 접고자하는 방향을 판별할 때 벡터를 사용했습니다.
- **선형대수학**
  어떤 것이 선형이라는 것은 쉽게 말해 작은 조각들로 쪼갤 수 있다는 것으로 주로 벡터, 벡터 공간, 선형 변환 및 행렬이 포함되는 수학 분야입니다.
  저희는 벡터를 조작해야하는 필수적인 상황에서 최적화를 위해 선형대수학을 접목해 더욱 논리적이고 간편한 알고리즘을 구성하고자 했습니다.

### 3 - 2. 면의 분리

축이 생성되면 이를 기준으로 두 면으로 나누어 사용자가 접고자 하는 면을 결정해야 합니다. 드래그를 시작한 첫 번째 점의 위치에 따라 사용자가 접고자 하는 방향이 달라지므로, 이를 판별하기 위해 선형보간법(linear interpolation)을 사용합니다.

<p align="center">
  <img src="https://github.com/user-attachments/assets/2bff8222-282e-4e83-854d-0123ca3fd96e" width="600px" alt="Untitled 1">
</p>

> 선형보간법 이란 끝점의 값이 주어졌을 때, 그 사이의 값을 추정하기 위해 직선 거리를 따라 선형적으로 계산하는 방법입니다. 임의의 점 c에 대한 x값의 비율을 구하면 y값을 계산할 수 있습니다.

<p align="center">
  <img src="https://github.com/user-attachments/assets/e9d841ea-bbb1-478c-a641-04dd6be5c9bc" width="350px" alt="축을_기준으로_면_분리">
</p>

이 방법을 통해 축 위의 임의의 점(화살표 위 빨간색으로 표시된 점)들을 생성하여 두 면을 가로지르는 점들을 만듭니다. 지오메트리의 한 정점이라도 누락되지 않도록 세그먼트 수만큼 임의의 정점을 생성하여 모든 면을 판별할 수 있었습니다.

### **3 - 3. 어느 면이 접힐지에 대한 기준 세우기**

이제 축을 기준으로 각 면이 어느 방향에 위치하는지 알 수 있게 되었습니다. 사용자가 접고자 하는 면을 먼저 클릭하고 드래그하는 것이 일반적인 인터랙션이라 판단하여, 첫 번째 클릭된 점이 주어진 점이 축 위에 있는지, 위쪽에 있는지, 아래쪽에 있는지를 판단했습니다.

판단하는 알고리즘의 계산을 최적화하기 위해 접는 축이 나뉘는 경우를 크게 가로, 세로, 대각선 세 가지로 분류하고, 이에 따라 방향도 네 가지로 나뉘게 됩니다 (왼쪽, 오른쪽, 위, 아래).

- **세로 방향**: 축의 시작점과 끝점의 x 좌표 값이 같다면 x값만 비교하여 면을 판별할 수 있습니다.
- **가로 방향**: 마찬가지로 y 좌표 값이 같다면 y값만 비교하여 면을 판별할 수 있습니다.
- **대각선 방향**: x와 y 좌표 값을 모두 비교하여 면을 판별합니다.

### 3 - 4. 접기

접기는 결국 축에 대칭되는 곳으로 이동되는 것을 의미합니다. 접힐 면의 모든 정점을 알고 있다면, 이를 축의 반대편으로 이동시키면 됩니다.

이를 위해 여러 방법을 모색한 결과, 반사변환(reflection transformation)을 사용하여 각 정점의 대칭되는 점을 찾는 방법을 선택했습니다. 반사변환을 사용하면 정확하게 대칭되는 점을 계산할 수 있음과 동시에 모든 정점에 대해 일관된 방법으로 대칭점을 계산할 수 있어 코드의 유지보수성을 높일 수 있었습니다.

> 반사변환(Reflection Transformation)은 주어진 축이나 평면을 기준으로 점을 대칭적으로 이동시키는 변환 방법입니다. 2차원 공간에서는 주로 x축, y축, y = x, y = -x와 같은 선을 기준으로 반사변환을 수행합니다.

<p align="center">
  <img src="https://github.com/user-attachments/assets/cea7bdac-0998-4bb7-95c2-a7652641839f" width="600px" alt="z-fighting">
</p>
<p align="center">
  <img src="https://github.com/user-attachments/assets/cea7bdac-0998-4bb7-95c2-a7652641839f" width="600px" alt="z-fighting">
</p>

모든 접힐 면이 반대편의 정확한 위치로 이동했지만 한가지 문제점이 발생했습니다.

**Z-Fighting**은 3D 그래픽스에서 두 개 이상의 표면이 거의 같은 z값을 가지는 경우, 화면에 보이는 픽셀들이 깜빡거리거나 서로 섞이는 현상을 말합니다. 이는 깊이 버퍼(depth buffer)의 정밀도 한계로 인해 발생하는데, 깊이 버퍼는 각 픽셀의 z값(깊이값)을 저장하여 어떤 객체가 더 가까운지 판별하는 데 사용됩니다. 그러나 깊이 버퍼의 비트 수( 24비트, 32비트 등)가 제한되어 있어 매우 가까운 두 표면의 깊이값을 구분하기 어려울 때 z-fighting이 발생합니다.

현재 저희가 종이를 표현하기 위해 사용 중인 Plane Geometry는 두께가 없어 Z 값이 명확히 구별되지 않는 문제가 있었습니다. 따라서 Z-Fighting을 방지하기 위해, 두 면이 겹치지 않도록 Z 값에 대한 조정이 필요했습니다.

## **4. Z-Fighting 해결**

현재 코드에서는사용자가 접고자하는 방향에 있어 x와 y 축 방향에 대한 결정만 내려 문제가 발생했습니다. Z 축 방향에 대한 결정도 포함되어야 했습니다. 이를 해결하기위해 사용자가 바라보는 면이 어디인지를 정확히 판별하는 로직을 추가했습니다.

### 4 - 1. 사용자가 어느 방향을 바라보고 있는지 판별하기

접히는 것을 구현할 때 사용자가 바라보고있는 방향으로 접을 면이 앞으로 레이어가 쌓이는 것이 자연스러운 종이접기라고 생각했고, 이를 구현하기 위해서는 사용자가 현재 바라보는 면이 어디인지 판별이 필요했습니다.

Raycaster를 이용해 처음 닿는 면을 판별할 수 있지 않을까 생각했지만 현재 하나의 지오메트리를 사용하므로 어떤 면이 먼저 닿든 하나의 객체로 인식하는 문제가 있었습니다. 따라서 카메라의 방향 벡터와 종이의 법선 벡터 사이의 내적(dot product)을 계산하고 있습니다. 내적은 두 벡터가 얼마나 비슷한 방향을 가지고 있는지를 나타내며, 이 값의 부호에 따라 벡터들의 방향 관계를 판단하게되었습니다.

<p align="center">
  <img src="https://github.com/user-attachments/assets/a7ab26f9-ce24-4fd7-9c75-ad87d8df017d" width="600px" alt="Untitled 2">
</p>

내적(Dot product)은 선형대수에서 두 벡터 사이의 연산 중 하나로, 두 벡터의 길이와 방향에 대한 정보를 이용하여 계산합니다. 내적은 각 벡터의 대응하는 성분을 곱한 후 그 결과를 모두 더한 값입니다.
여기서 사용된 카메라의 전방 방향 벡터와 종이의 법선 벡터에 현재 회전 각도(Quaternion)를 적용하여 두 벡터 사이의 내적을 계산했습니다. 내적 값이 클수록 두 벡터가 서로 비슷한 방향을 가리키며, 이 값이 양수이면 두 벡터가 같은 방향을 가리키고 있는 것이고, 음수이면 반대 방향을 가리키는 것입니다.
내적을 통해 계산된 결과는 스칼라(하나의 값)이며, 이 값이 양수인지, 음수인지를 판별하여 현재 사용자가 종이의 앞면을 보고 있는지, 뒷면을 보고 있는지를 결정할 수 있었습니다.

### 4 - 2. 두께 구현하기

<p align="center">
  <img src="https://github.com/user-attachments/assets/90d00f4c-1a72-4628-8aa6-1465914e42b4" width="600px" alt="z-fighting">
</p>
<p align="center">
  <img src="https://github.com/user-attachments/assets/90d00f4c-1a72-4628-8aa6-1465914e42b4" width="600px" alt="z-fighting">
</p>

앞, 뒤를 판별한 값을 사용해 앞을 바라본 상태로 종이를 접었을 때 z 축 기준으로 약간의 두께를 추가해 z-Fighting 문제를 줄일 수 있었고, 종이가 어떤 방향으로 접혔는지에 따라 적절히 z 값을 조정하여 반사 변환을 시뮬레이션했습니다.

## 5. 펼치기

종이접기에는 접기 뿐만아니라 펼치기까지 ‘접기’의 활동에 들어갑니다. 보다 시각적으로 생동감있고 재미있는 경험을 제공하기위해 애니메이션으로 보여지는 펼치기를 구현하고자했습니다.

이를위해 저희는 쿼터니언을 사용한 회전 애니메이션을 구현했습니다.

- **쿼터니언을 사용했을 때 장점**
  - 벡터와 축을 기준으로 뒤집는 것은 복잡한 접기 동작을 구현하는 데 있어 정확성을 보장하기 어렵다 생각하였습니다. 특히, 종이의 각 부분이 정확히 맞물려야 하는 경우에 z축을 이동시켜 접힘을 구현하였는데 그 오차가 z축 오차를 막을 수 있을거라 생각했습니다.
  - 뒤집기 방법보다 더 시각적으로 자연스럽게 구현하는 것이 더 사용자 측면에서도 더 좋은 경험을 제공할거라 예상하였습니다.
  - 벡터와 축을 이용한 뒤집기 방식은 회전과 달리 복잡한 수학적 계산이 필요했었습니다. 이러한 계산은 오류를 유발하기 쉽고 유지보수가 어렵다고 느꼈습니다. 그러나 회전을 이용하면 Three.js에서 제공하는 메서드를 활용할 수 있어 계산의 오류를 줄이고 유지보수가 용이하다고 생각하였습니다.
    위와같이 정확성 보장과 사용자 경험 향상, 유지보수의 용이함, 계산 오류를 줄이고자 저희는 쿼터니언을 이용한 회전방식을 사용하였습니다.

### 5 - 1. 회전 구현을 위한 방법들

회전을 구현하는 데 있어, 다양한 경로를 통해 조사를 하다보니 회전을 구하는 데 대표적으로 사용할 수 있는 두 가지 주요 기술이 있다는걸 알게 되었습니다.<br>
하나는 오일러 각(Euler Angles)이고 또 다른 하나는 쿼터니언(Quaternions)입니다.

- **오일러 각**

오일러 각은 회전을 X, Y, Z 축을 기준으로 정의해서 직관적이고 사용하기 쉽지만 짐벌락이라는 특정 각도에서<br>
두 축이 정렬되어 회전의 자유도가 감소하는 문제가 발생할 수 있고,여러 회전을 연속적으로 적용할 때 예측하기 어려운 결과가 나올 수 있다는 단점을 가지고 있습니다.

- **오일러 각의 한계**

처음에는 회전의 직관성과 단순함 때문에 오일러 각을 사용해 보았습니다.<br>
오일러 각은 X, Y, Z 축을 기준으로 회전할 수 있어 초기에는 충분해 보였습니다.

- **짐벌 락(Gimbal Lock)**

오일러 각은 짐벌 락 문제에 취약하여, 두 개의 회전 축이 정렬되면서 자유도가 하나 감소하는 상황이 발생할 수 있었습니다.<br>
이는 애플리케이션에서 부드럽고 연속적인 회전을 제한하게 만들었습니다.

<p align="center">
  <img src="https://github.com/user-attachments/assets/2e53e366-07db-4222-991e-6c2e00ccf780" width="400px" alt="Untitled 3">
  <br>이미지 출처 [https://pasus.tistory.com/m/85](https://pasus.tistory.com/m/85)
</p>

θ = 90도일 때의 사진입니다.

두 개의 회전축이 하나로 합쳐져 있어서 이 상태에서는 가장 안쪽 고리(또는 파랑색 고리의 회전축에 장착된 기기)는 b₁과 b₂ 등 두 축으로밖에 회전하지 못합니다. 나머지 방향으로의 회전은 잠겨있습니다.

즉, 락(lock)된 상태입니다. 예를 들어 아래 그림의 오른쪽과 같은 자세로 직접 움직일 수 없습니다.

그 방향으로 회전하려면 b₃을 중심으로 회전시켜야 하는데, 물리적으로 불가능합니다.

- **연속 회전의 복잡성**

오일러 각을 사용한 연속적인 회전 적용은 예측 불가능하고 종종 잘못된 결과를 초래하여, 사용자 인터랙션 경험을 복잡하게 만들었습니다.

### 5 - 2. 짐벌락의 해결책 쿼터니언

이러한 문제를 해결하기 위해 쿼터니언을 사용한 회전 방식으로 전환하였습니다.

쿼터니언은 짐벌 락에 영향을 받지 않는다는게 가장 큰 이점이였습니다.

또한 부드럽고 제한 없는 회전을 가능하게 하고 방향 간의 효율적인 보간(slerp)을 지원하여, 부드러운 애니메이션과 전환을 구현할 수 있다는 이점이 있습니다.

또한 쿼터니언은 3D 공간의 회전을 표현함에도 불구하고 4개의 매개변수만 사용하여, 계산이 효율이라 생각하여 쿼터니언 방식으로 회전하기를 선택하였습니다.

- **x,y,z축 외의 마지만 변수인 4차원 축 ê를 기준을 회전**

아래의 이미지는 구면 좌표계에서 회전을 나타내고 있습니다. **ê**는 회전 축을 의미하며, 이는 구면 좌표계의 원점을 기준으로 한 회전의 방향을 나타냅니다. 𝜃는 **ê** 축을 중심으로 한 회전 각도를 의미합니다.

이러한 회전은 3차원 공간에서 이루어지며, x, y, z 축이 이를 기준으로 합니다. **ê**축은 특정한 방향을 가리키는 단위 벡터로, 회전 운동을 기술할 때 중심이 되는 축입니다. 4차원 공간에서의 회전은 주로 쿼터니언을 사용하여 설명되며, 쿼터니언의 회전 축이 바로 **ê** 축에 해당합니다.

<p align="center">
  <img src="https://github.com/user-attachments/assets/48a2f7b1-45fb-480e-a5ef-8b64b08e9546" width="300px" alt="Untitled 4">
  <br>이미지 출처: [wikipedia.org](http://wikipedia.org/)
</p>

### 5 - 3. 회전을 구현하기 위해 필요한 데이터들

1. **회전 축 (Axis of Rotation)**

   회전축 같은 경우, 접히는 선 기준이 회전 축이 되기 때문에 쉽게 얻어 올 수 있었습니다.

2. **회전 각도 (Angle of Rotation)**

   회전 각도는 회전할 각도를 의미하며, 라디안 단위로 표현됩니다.
   Three.js에서는 `Math.PI`를 사용하여 각도를 라디안 단위로 쉽게 변환할 수 있습니다.

   라디안(Radian)은 각도를 측정하는 단위 중 하나로 360도는 2π 라디안과 같습니다.

   펼치기에서는 180도를 펼치기 때문에 1π 값으로 고정하여 사용하였습니다.

3. **회전할 정점들 (Vertices to Rotate)**

   회전할 정점들은 회전의 대상이 되는 정점들의 집합입니다.

   각 정점은 3D 공간에서의 좌표를 가지며, Three.js에서는 **`BufferGeometry`** 객체의 속성으로 정의됩니다.

   회전할 정점들은 결국 접혔던 면들의 데이터들이 있어서 그 데이터들을 가져와 펼치기할 때의 데이터로 손쉽게 가져와 사용하였습니다.

4. **쿼터니언 (Quaternion)**

   쿼터니언을 사용하여 선택된 회전할 정점들을 회전시킬 수 있습니다.

위와 같은 방식으로, 각 단계별로 쿼터니언을 설정하고, 벡터를 회전시키며, 애니메이션 프레임을 통해 회전을 점진적으로 적용(requestAnimationFrame)하고 데이터 요소를 결합하면 정확하고 부드러운 회전 애니메이션을 구현하게 될 수 있었습니다.

<p align="center">
  <img src="README%20md%2087f0d4e93e5241c7b644c4aa97fe4e4e/Untitled.gif" width="300px" alt="Untitled2">
</p>

# ✔️ React Three Fiber로 리팩토링 하려는 이유?

# ✔️ React Three Fiber로 리팩토링 하려는 이유?

### 보일러플레이트 코드를 줄여서 코드의 가독성을 UP!

- Three.js 사용 시 초기 설정

```jsx
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 0, 10);
scene.add(light);
```

- React Three Fiber 사용 시 초기 설정

```jsx
import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  );
}
```

### React의 hooks, context, 상태 관리 라이브러리 등을 3D 그래픽 개발에 활용할 수 있다.

- 3D 객체와 효과를 재사용 가능한 컴포넌트로 만들 수 있어 개발 효율성이 높아진다.
- 가상 DOM(Virtual DOM) 개념이 3D 씬에도 적용되어 변경된 부분만 실제 DOM과 동기화하여 불필요한 렌더링을 줄일 수 있다.
- 전역 상태 관리 도구를 사용해 효율적인 상태 업데이트와 렌더링하여 동적인 3D 콘텐츠를 효율적으로 관리할 수 있다.

# ✔️ Schedules

# ✔️ Schedules

- 1주차
  - <a href="[https://www.figma.com/design/1BSlY1g4XgCFrR2uP2ZX7L/VACO%2FTeam3?node-id=0-1&t=cqOuMzvnxXHkV7Xe-0](https://www.figma.com/design/1BSlY1g4XgCFrR2uP2ZX7L/VACO%2FTeam3?node-id=0-1&t=cqOuMzvnxXHkV7Xe-0)">와이어프레임 작성</a>
  - <a href="[https://www.figma.com/design/1BSlY1g4XgCFrR2uP2ZX7L/VACO%2FTeam3?node-id=28-15&t=cqOuMzvnxXHkV7Xe-0](https://www.figma.com/design/1BSlY1g4XgCFrR2uP2ZX7L/VACO%2FTeam3?node-id=28-15&t=cqOuMzvnxXHkV7Xe-0)">기획서 작성</a>
  - <a href="[https://github.com/orgs/Origami-5M/projects/1/views/4?pane=issue&itemId=67659090](https://github.com/orgs/Origami-5M/projects/1/views/4?pane=issue&itemId=67659090)">개발환경 세팅</a>
  - <a href="[https://github.com/orgs/Origami-5M/projects/1/views/4?pane=issue&itemId=67659096](https://github.com/orgs/Origami-5M/projects/1/views/4?pane=issue&itemId=67659096)">정적화면 구현</a>
- 2주차
  - <a href="[https://github.com/orgs/Origami-5M/projects/1/views/4?pane=issue&itemId=67670919](https://github.com/orgs/Origami-5M/projects/1/views/4?pane=issue&itemId=67670919)">종이접기 미리보기 기능 구현</a>
  - <a href="[https://github.com/orgs/Origami-5M/projects/1/views/4?pane=issue&itemId=67671637](https://github.com/orgs/Origami-5M/projects/1/views/4?pane=issue&itemId=67671637)">종이접기 접히기 기능 구현</a>
  - <a href="[https://github.com/orgs/Origami-5M/projects/1/views/4?pane=issue&itemId=67671637](https://github.com/orgs/Origami-5M/projects/1/views/4?pane=issue&itemId=67671637)">종이접기 펼치기 기능 구현</a>
- 3주차
  - <a href="[https://github.com/orgs/Origami-5M/projects/1/views/4?pane=issue&itemId=67678117](https://github.com/orgs/Origami-5M/projects/1/views/4?pane=issue&itemId=67678117)">Share 버튼 클릭 시 정보 저장</a>
  - <a href="[https://github.com/orgs/Origami-5M/projects/1/views/4?pane=issue&itemId=67678248](https://github.com/orgs/Origami-5M/projects/1/views/4?pane=issue&itemId=67678248)">갤러리 페이지 정적화면 및 기능 구현</a>
  - <a href="[https://github.com/orgs/Origami-5M/projects/1/views/4?pane=issue&itemId=69231581](https://github.com/orgs/Origami-5M/projects/1/views/4?pane=issue&itemId=69231581)">가이드모드 데이터 구축</a>

# 📝 회고

# 📝 회고

### 이승민

3D 모델의 정점 회전과 목표 지점에 대한 탐색 및 회전 기능 구현은 저에게 매우 도전적인 과제였습니다. Three.js 라이브러리를 활용한 3D 렌더링, 쿼터니언을 이용한 복잡한 회전 연산, 그리고 정교한 벡터 계산 등 고급 수학적 개념을 실제 코드로 구현하는 과정에서 다양한 기술적 난관에 직면했습니다.
이러한 어려움을 극복하는 과정에서, 3차원 그래픽스에 대한 깊이 있는 이해를 얻을 수 있었습니다. 특히 단위 벡터의 특성과 활용, 쿼터니언을 이용한 회전 표현의 장점, 그리고 이를 활용한 효율적인 3D 변환 기법 등을 체계적으로 학습할 수 있었습니다. 이론적 지식을 실제 프로젝트에 적용하면서, 그래픽스 프로그래밍의 실질적인 노하우를 쌓을 수 있었던 것이 가장 큰 수확이었습니다.

또한 팀원들과의 정기적인 팀 미팅과 아이디어 교환을 통해 서로의 지식을 공유하고 발전시키는 과정에서, 개별적으로는 생각하지 못했던 창의적인 해결책들이 나오게 되었습니다. 이러한 협력적 접근 방식이 프로젝트의 전반적인 품질 향상에 크게 기여했습니다. 이렇게 팀원들과의 협력 덕분에 많은걸 배울 수 있었고, 그 결과 프로젝트를 성공적으로 잘 마무리할 수 있었습니다! 함께한 팀원들에게 감사드립니다!

### 정소희

종이접기 프로젝트는 접힘과 각도를 정확히 구현하기 위해 하나하나 로직을 고민하며 해결해나가는 과정에서 굉장히 막막하고 우리가 과연 할 수 있을까? 라는 생각이 계속 들게 하는 프로젝트였던 것 같습니다. 종이접기의 다양하고 복잡한 구조를 3D로 구현하는 과정에서 많은 챌린지를 만났습니다. 종이가 접힐때마다 달라지는 축 길이를 구하는 점이나 미리보기 기능을 어떻게 구현해야하는지를 수학과 알고리즘을 통해 해결해 나가야 했고 이 과정에서 개발 스킬을 크게 향상시킬 수 있었습니다. 특히, 복잡한 문제를 해결하기 위해 논리적 사고와 문제 해결 능력이 얼마나 중요한지 깨닫게 되었습니다. 5M 팀원들이 서로의 지식과 아이디어를 공유하며 문제를 해결해 나가는 과정에서 협업의 중요성과 팀워크의 가치를 깊이 깨닫는 계기가 되었고 팀원들의 노력과 헌신 덕분에 프로젝트를 기간 내에 성공적으로 마무리할 수 있었습니다. 5M 팀원들에게 다시 한번 감사드립니다.

### 주혜지

이번 프로젝트는 색다른 인터렉션 경험을 제공하는 서비스를 만들자는 아이디어에서 출발했습니다. 처음 접해보는 three.js에 더불어 javascript로 3D 모델을 다루는 과정에서 예상치 못한 많은 도전에 직면했습니다. 3차원 공간에서 점, 선, 면을 다루는 것이 이렇게 많은 수학 공식을 필요로 할 줄 몰랐는데, 짧은 시간 동안 수학 공식을 다루며 수포자였던 저 스스로의 한계를 시험할 수 있는 도전적인 프로젝트였습니다.

뿐만 아니라 어려운 과제를 어떻게 풀어나갈 것인지 문제 해결 과정을 팀원들과 논의하며, 생각을 맞춰가는 법도 배울 수 있었습니다. 끝없이 짧은 기간 내에 과연 해낼 수 있을까 의문이 들었지만, 서로 의지하며 프로젝트를 마무리할 수 있었습니다. 함께 고생한 팀원들에게 감사의 인사를 전합니다!
