// TEMPORARY TEST

var container, camera, scene, renderer, mesh,

    
    objects = [],
    
    count = 0,

    CANVAS_WIDTH = 600,
    CANVAS_HEIGHT = 600,
    
    planes = [];



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






function render() {

    loopCode();
    
    renderer.render( scene, camera );

}

(function animate() {

    requestAnimationFrame( animate );

    render();

})();





function loopCode(){
    
    for (i = 0; i < planes.length; i++) { 
    
    updatePos(planes[i]);
    
}
    
}





function makePlane(x, y, z, xRot, yRot, zRot, faction, type, squadron, wingOrGroup, healthPercentage, trainingAndExperience, condition){
    
    var geometry = new THREE.BoxGeometry( type.wingspan, type.height, type.planeLength );
    var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    cube.position.x=x;
    cube.position.y=y;
    cube.position.z=z;
    cube.rotation.x=xRot;
    cube.rotation.y=yRot;
    cube.rotation.z=zRot;
    planes.push(cube);
    cube.userData = { Faction: faction, Type: type, Squadron: squadron, WingGroup: wingOrGroup, Health: healthPercentage, TrainingAndExperience: trainingAndExperience, Condition: condition, Throttle: 0, Yaw: 0, Pitch: 0, Roll: 0, xAcel: 0, yAcel: 0, zAcel: 0 };
    
}

makePlane(0,0,0,0,0,0,"YOLO",b17,5,"3rd Bomber Group",1,1.2,1);
makePlane(0,0,0,0,0,0,"YOLO",b17,5,"3rd Bomber Group",1,1,1);
planes[1].userData.Throttle=50;







function updatePos(plane){
    
    if(plane.userData.Throttle<25){
        plane.userData.yAcel=(((plane.userData.Type.weight)/(plane.userData.Type.wingspan))/3)-plane.userData.yAcel/30
    }
    
}
