#pragma strict

//public var platform : GameObject;
//public var moveDistance : float;
public var amplitude: float;
public var speed : float;
var direction: Vector3 = Vector3.forward; // direction relative to the platform
private var platform: Vector3;

 function Start(){
   platform = transform.position;
   while (true){
     // convert direction to local space
     var dir = transform.TransformDirection(direction);
     // set platform position:
     transform.position = platform+amplitude*dir*Mathf.Sin(6.28*speed*Time.time);
     yield; // let Unity free till the next frame
   }
 }