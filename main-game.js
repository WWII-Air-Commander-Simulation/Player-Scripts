// TEMPORARY TEST

var container, camera, scene, renderer, mesh,

    
    objects = [],
    
    count = 0,

    CANVAS_WIDTH = 600,
    CANVAS_HEIGHT = 600;



container = document.getElementById( 'player' );
document.body.appendChild( container );

renderer = new THREE.WebGLRenderer();
renderer.setSize( CANVAS_WIDTH, CANVAS_HEIGHT );
container.appendChild( renderer.domElement );

scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera( 50, CANVAS_WIDTH / CANVAS_HEIGHT, 1, 1000 );
camera.position.y = 150;
camera.position.z = 500;
camera.lookAt( scene.position );

var geometry = new THREE.CylinderGeometry( 100, 100, 40, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
var cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );

objects.push( cylinder );





function render() {

    cylinder.rotation.x += 0.05;
    cylinder.rotation.y += 0.05;
    cylinder.rotation.z += 0.05;
    
    renderer.render( scene, camera );

}

(function animate() {

    requestAnimationFrame( animate );

    render();

})();

Status API Training Shop Blog About
