// Basic Three.JS scene from documentation, importing Three.JS through a CDN 
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene


//~~~~~~~Import Three.js (also linked to as import map in HTML)~~~~~~
import * as THREE from 'three';

// Import add-ons
import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';
// import { GLTFLoader } from 'https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js'; // to load 3d models



// ~~~~~~~~~~~~~~~~Create scene here~~~~~~~~~~~~~~~~
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'), 
});
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 50; 
renderer.render(scene, camera); 



// ~~~~~~~~~~~~~~~~ Initiate add-ons ~~~~~~~~~~~~~~~~
const controls = new OrbitControls(camera, renderer.domElement);
// const loader = new GLTFLoader(); // to load 3d models


// →→→→→→ Follow next steps in tutorial: // https://threejs.org/docs/#manual/en/introduction/Creating-a-scene
//skip step 1 

//step 2 
const geometry = new THREE.BoxGeometry( 2, 2, 2 ); const material = new THREE.MeshBasicMaterial( { color: 0x66D4f0 } ); const cube = new THREE.Mesh( geometry, material ); scene.add( cube ); camera.position.z = 5;

//step 3
function animate() { renderer.render( scene, camera ); } renderer.setAnimationLoop( animate );

//step 4 - FINAL STEP 
cube.rotation.x += 0.01; cube.rotation.y += 0.01; 

//Now you got a cube! :D 