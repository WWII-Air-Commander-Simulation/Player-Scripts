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

    loopCode();
    
    renderer.render( scene, camera );

}

(function animate() {

    requestAnimationFrame( animate );

    render();

})();





loopCode(){
    
    
    
}





makePlane(wingspan, height, length, x, y, z, xRot, yRot, zRot){
    
    var geometry = new THREE.BoxGeometry( wingspan, height, length );
    var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    cube.position.x=x;
    cube.position.y=y;
    cube.position.z=z;
    
}

makePlane(10,10,10,0,0,0)
