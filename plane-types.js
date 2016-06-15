function planeType (displayName, healthPoints, maxSpeed, weight, wingspan, height, planeLength, gunTurrets, rpm, functionality, range, ceiling, bombDamage, gunDamage, bombPayload, ammoAmount){

this.displayName = displayName;
this.healthPoints = healthPoints;
this.maxSpeed = maxSpeed;                  //Required to be in Feet Per Second
this.weight = weight;                      //Required to be in Pounds (American)
this.wingspan = wingspan;
this.height = height;
this.planeLength = planeLength
this.gunTurrets = gunTurrets;              //Number of Turrets not Guns
this.rpm = rpm;                            //Rounds per Minute
this.functionality = functionality;        //"Fighter" or "Bomber"
this.range = range;                        //In Feet
this.ceiling = ceiling;                    //In Feet
this.bombDamage = bombDamage;
this.gunDamage = gunDamage;
this.bombPayload = bombPayload;            //Amount of bombs
this.ammoAmount = ammoAmount;              //Amount of bullets

}

//                      name     HP speed weight  wng  ht  ln  tr rpm   func      range     ceil  bmDm gnDm   bmLd  ammo
var b17 = new planeType("B-17", 1234, 421, 33279, 103, 19, 74, 7, 600, "Bomber", 10560000, 35000, 1234, 1234, 4800, 3000)
