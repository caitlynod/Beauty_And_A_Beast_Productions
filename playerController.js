﻿#pragma strict

public var speed : float;
public var jumpHeight : float;
public var gravity : float;
private var targetRotation : int;
public var jumpCount: int = 0;
public var jumpDelay : boolean;


//Disable Gravity
GetComponent.<Rigidbody>().useGravity = false;


function FixedUpdate() {
transform.position.z = 0;
//Apply New Gravity
GetComponent.<Rigidbody>().AddForce(new Vector3(0, -gravity*GetComponent.<Rigidbody>().mass, 0));
//Handle Horz Movement
GetComponent.<Rigidbody>().velocity.x = speed * Input.GetAxisRaw("Horizontal");
if(Input.GetButton("Shift")){
GetComponent.<Rigidbody>().velocity.x = speed * Input.GetAxis("Horizontal")*2;

}

if(GetComponent.<Rigidbody>().velocity.x < 0){
//if moving towards left
		targetRotation = 180; //set char to left
	}else if(GetComponent.<Rigidbody>().velocity.x > 0){
		//if moving to right
		targetRotation  = 0; //set char to right
	}
	transform.eulerAngles.y -= (transform.eulerAngles.y-targetRotation)/5;

//handle jump
	
}
function Update(){
if(Input.GetButton("Jump") && !jumpDelay && isGrounded()){
GetComponent.<Rigidbody>().velocity.y = jumpHeight;
jumpDelay = true;
}
else if(Input.GetButtonDown("Jump") && jumpDelay){
GetComponent.<Rigidbody>().velocity.y = jumpHeight*3;
jumpDelay = false;
}
}


//run a check to see if player is on ground
function isGrounded(){
var front : Vector3 = transform.position;
front.x += 0.4;
var middle : Vector3 = transform.position;
var back :  Vector3 = transform.position;
back.x -= 0.4;

//debug raycast 
var jumpLine : float = GetComponent.<Collider>().bounds.size.y/2 + 0.2;

if(Physics.Raycast(front, Vector3.down, jumpLine) || Physics.Raycast(middle, Vector3.down, jumpLine) || Physics.Raycast(back, Vector3.down, jumpLine)){
return true;

}
return false;
}

function OnTriggerStay(other:Collider){
if(other.gameObject.tag == "platform"){
transform.parent = other.transform;
}
}
     
function OnTriggerExit(other:Collider){
if(other.gameObject.tag == "platform"){
transform.parent = null;
}
} 