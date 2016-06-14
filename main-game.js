container = document.getElementById( 'player' );
document.body.appendChild( container );

renderer = new THREE.WebGLRenderer();
renderer.setSize( 600, 600 );
container.appendChild( renderer.domElement );

var scene	= new THREE.Scene();
var camera	= new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 1000);
camera.position.z = 5;

var geometry = new THREE.CylinderGeometry( 5, 5, 20, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
var cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );
