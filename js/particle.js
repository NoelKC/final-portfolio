// Basic Three.JS scene from documentation, importing Three.JS through a CDN 
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene


//~~~~~~~Import Three.js (also linked to as import map in HTML)~~~~~~
import * as THREE from 'three';

// Import add-ons
import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';
// import { GLTFLoader } from 'https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js'; // to load 3d models


// ~~~~~~~~~~~~~~~~ Declare Global Variables~~~~~~~~~~~~~~~~
let scene, camera, renderer, torus; 
let particleGeometry, particlesMesh, elapsedTime;
let mouseX = 0;
let mouseY = 0;

// ~~~~~~~~~~~~~~~~ Initialize Scene in init() ~~~~~~~~~~~~~~~~
function init() {

    // ~~~~~~Set up scene, camera, + renderer ~~~~~~
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#bg'), 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(new THREE.Color('#0000000'), 0);
    document.body.appendChild(renderer.domElement);


    // ~~~~~~~~~~~~~~~~ Initiate add-ons ~~~~~~~~~~~~~~~~
    //const controls = new OrbitControls(camera, renderer.domElement);
    // const loader = new GLTFLoader(); // to load 3d models


    // →→→→→→ Create Torus Geomotry →→→→→→  
    const torusGeometry = new THREE.TorusGeometry(4, 1, 7, 100);
    const torusLoader = new THREE.TextureLoader()
    const cross = torusLoader.load('../textures/weird-plus.png');
    const torusMaterial = new THREE.PointsMaterial({
        size: .03,
        map: cross,
        transpartent: true
    });
    torus = new THREE.Points(torusGeometry, torusMaterial);
    scene.add(torus);
    torus.position.z = -5;

    // ~~~~~~ Create Particle Geometry ~~~~~~
    particleGeometry = new THREE.BufferGeometry;
    const particleLoader = new THREE.TextureLoader()
    const heart = particleLoader.load('../textures/heart.png');
    const particlesCnt = 5000;

    const posArray = new Float32Array(particlesCnt * 3);
    // xyz, xyz, xyz, xyz 
    for (let i = 0; i < particlesCnt * 3; i++) {
        //posArray[i] = Math.random()
        posArray[i] = Math.random() - 0.5
        //posArray[i] = (Math.random() - 0.5) * (Math.random()* 5)
        posArray[i] = (Math.random() - 0.5) * 5
    }
    const particlesMaterial = new THREE.PointsMaterial({
        size: .005,
        map: heart,
        transpartent: true
    });

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))

    particlesMesh = new THREE.Points(particleGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // ~~~~~~Position Camera~~~~~~
    camera.position.z = 2;
    //camera.position.y = 20;
}

// ~~~~~~~~~~~~~~~~ Mouse ~~~~~~~~~~~~~~~~
document.addEventListener('mousemove', animateParticles);
function animateParticles(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
}

// ~~~~~~~~~~~~~~~~ Animation Loop ~~~~~~~~~~~~~~~~
const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate); // start loop by with frame update
    elapsedTime = clock.getElapsedTime();
    // →→→→→→ add your animation here ↓↓↓↓

    // →→→→→→ torus animation 
    torus.rotation.y += 0.007;

    // →→→→→→  particle animation 
    particlesMesh.rotation.y = -0.1 * elapsedTime; 
    
    if (particlesMesh) {
        particlesMesh.rotation.x = -mouseY * (elapsedTime * 0.00008);
        particlesMesh.rotation.y = mouseX * (elapsedTime * 0.00008);
    }



    // always end animation loop with renderer
    renderer.render(scene, camera);
}

function onWindowResize() { //resizes to the browser 
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

}

window.addEventListener('resize', onWindowResize, false);

init(); // execute initialize function
animate(); // execute animation function