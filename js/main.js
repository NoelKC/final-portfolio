// Basic Three.JS scene from documentation, importing Three.JS through a CDN 
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene


//~~~~~~~Import Three.js (also linked to as import map in HTML)~~~~~~
import * as THREE from 'three';

// Import add-ons
import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';
// import { GLTFLoader } from 'https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js'; // to load 3d models

// ~~~~~~~~~~~~~~~~ Declare Global Variables~~~~~~~~~~~~~~~~
let scene, camera, renderer, cube, sun, pikminStand, pikminWalk;
let sceneContainer = document.querySelector("#three-container");
let mixer, action;

// ~~~~~~~~~~~~~~~~ Initialize Scene in init() ~~~~~~~~~~~~~~~~
function init() {
    // ~~~~~~Set up scene, camera, + renderer ~~~~~~

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x3295a8);

    camera = new THREE.PerspectiveCamera(75, sceneContainer.clientWidth / sceneContainer.clientHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer({ antialias: true }); //make edges look more sharp looking 
    renderer.setSize(sceneContainer.clientWidth, sceneContainer.clientHeight); //resizes to the browser 
    sceneContainer.appendChild(renderer.domElement);


    // ~~~~~~~~~~~~~~~~ Initiate add-ons ~~~~~~~~~~~~~~~~


    // →→→→→→ Follow next steps in tutorial: // https://threejs.org/docs/#manual/en/introduction/Creating-a-scene
    //skip step 1 

    //step 2 
    const geometry = new THREE.BoxGeometry(2, 2, 2); const material = new THREE.MeshBasicMaterial({ color: 0x66D4f0 }); cube = new THREE.Mesh(geometry, material); scene.add(cube); camera.position.z = 5;

    //step 3
    function animate() { renderer.render(scene, camera); } renderer.setAnimationLoop(animate);

    //step 4 - FINAL STEP 
    cube.rotation.x += 0.01; cube.rotation.y += 0.01;

    //Now you got a cube! :D 
}

// ~~~~~~~~~~~~~~~~ Animation Loop ~~~~~~~~~~~~~~~~
// (similar to draw loop in p5.js, updates every frame)

function animate() {
    requestAnimationFrame(animate); // start loop by with frame update

    // →→→→→→ add your animation here ↓↓↓↓

    // camera.position.z += .03;
    cone.rotation.x += 0.007;
    cone.rotation.y += 0.007;
    // camera.position.z += .03;
    cube.rotation.x -= 0.007;
    cube.rotation.y -= 0.007;




    // always end animation loop with renderer
    renderer.render(scene, camera);
}

function onWindowResize() { //resizes to the browser 
    camera.aspect = sceneContainer.clientWidth / sceneContainer.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(sceneContainer.clientWidth, sceneContainer.clientHeight);
}

window.addEventListener('resize', onWindowResize, false);

init(); // execute initialize function
animate(); // execute animation function