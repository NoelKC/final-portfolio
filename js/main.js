// Basic Three.JS scene from documentation, importing Three.JS through a CDN 
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene


//~~~~~~~Import Three.js (also linked to as import map in HTML)~~~~~~
import * as THREE from 'three';

// Import add-ons
import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js'; // to load 3d models

// ~~~~~~~~~~~~~~~~ Declare Global Variables~~~~~~~~~~~~~~~~
let scene, camera, renderer, cube, cone, pikmin;
let sceneContainer = document.querySelector("#three-container");
let mixer, action;

// ~~~~~~~~~~~~~~~~ Initialize Scene in init() ~~~~~~~~~~~~~~~~
function init() {
    // ~~~~~~Set up scene, camera, + renderer ~~~~~~

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x01032e);

    const directLight = new THREE.DirectionalLight(0xffffff, 5);
    directLight.position.set(1, 1, 5);
    scene.add(directLight);

    camera = new THREE.PerspectiveCamera(75, sceneContainer.clientWidth / sceneContainer.clientHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer({ antialias: true }); //make edges look more sharp looking 
    renderer.setSize(sceneContainer.clientWidth, sceneContainer.clientHeight); //resizes to the browser 
    sceneContainer.appendChild(renderer.domElement);


    // ~~~~~~~~~~~~~~~~ Initiate add-ons ~~~~~~~~~~~~~~~~


    //~~~~~~ Create Pikmin ~~~~~~
    const loader = new GLTFLoader(); // to load 3d models

    loader.load('assets/blender/my-pik-red-stand-test.gltf', function (gltf) {
        pikmin = gltf.scene;
        scene.add(pikmin);
        pikmin.scale.set(.1, .1, .1);
        pikmin.position.y = 2;
        pikmin.position.x = 10;
        pikmin.position.z = -10;
    });



    // ~~~~~~ Create Cone Geometry ~~~~~~
    const coneGeometry = new THREE.ConeGeometry(5, 10, 8);
    const coneTexture = new THREE.TextureLoader().load('textures/blue-space.jpeg'); //add textures to cube 
    const coneMaterial = new THREE.MeshBasicMaterial({ map: coneTexture }); //variable of cube when gone 
    // texture.minFilter = THREE.LinearFilter; // makes image sharper but aliased

    cone = new THREE.Mesh(coneGeometry, coneMaterial);
    scene.add(cone);
    cone.position.y = 4;
    cone.position.z = -10;

    // ~~~~~~ Create Box Geometry ~~~~~~
    const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
    const cubeTexture = new THREE.TextureLoader().load('textures/crunchy-dog-480.jpeg'); //add textures to cube 
    const cubeMaterial = new THREE.MeshBasicMaterial({ map: cubeTexture }); //variable of cube when gone 

    cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    scene.add(cube);
    cube.position.x = -5;
    cube.position.z = -5;
}

// ~~~~~~~~~~~~~~~~ Animation Loop ~~~~~~~~~~~~~~~~
// (similar to draw loop in p5.js, updates every frame)

function animate() {
    requestAnimationFrame(animate); // start loop by with frame update

    // →→→→→→ camera animation here ↓↓↓↓
    let scrollY = window.scrollY;
    let percentScrolled = window.scrollY / document.body.scrollHeight * 100;
    camera.position.y = scrollY * .001;


    // →→→→→→ pikmin animation here ↓↓↓↓
    if (pikmin) {
        pikmin.rotation.y += 0.007;
    }
    // →→→→→→ cone animation here ↓↓↓↓
    cone.rotation.y -= 0.05;

    // →→→→→→ cube animation here ↓↓↓↓
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