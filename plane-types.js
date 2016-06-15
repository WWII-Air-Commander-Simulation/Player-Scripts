function planeType = (displayName, healthPoints, maxSpeed, weight, gunTurrets, rpm, functionality, range, bombDamage, gunDamage, bombPayload, ammoAmount){

this.displayName = displayname;
this.healthPoints = healthPoints;
this.maxSpeed = maxSpeed;                  //Required to be in Feet Per Second
this.weight = weight;                      //Required to be in Pounds (American)
this.gunTurrets = gunTurrets;              //Number of Turrets not Guns
this.rpm = rpm;
this.functionality = functionality;
this.range = range;
this.bombDamage = bombDamage;
this.gunDamage = gunDamage;
this.bombPayload = bombPayload;
this.ammoAmount = ammoAmount;

}


//var b17 = new planeType("B-17", 1234, 421, 33279, 8, )
