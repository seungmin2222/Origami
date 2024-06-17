/* eslint-disable */
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyD3oZG97hnma9qtfFW4DPTe-kmJJgnsraQ',
  authDomain: 'origami-b2b79.firebaseapp.com',
  projectId: 'origami-b2b79',
  storageBucket: 'origami-b2b79.appspot.com',
  messagingSenderId: '1010489901720',
  appId: '1:1010489901720:web:6fbe2122e63a5f054786ed',
  measurementId: 'G-PVFN523QV5',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
