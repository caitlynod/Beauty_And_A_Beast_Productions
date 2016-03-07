#pragma strict
var waypoint : Transform[];
var speed : float = 10;
private var currentWaypoint : int;
var anim : Animator;

function start(){
anim = GetComponent("Animator");
anim.Play('Wolf_Walk', -1, 0.0f);
}
function Update() {
if(currentWaypoint < waypoint.length){
	var target : Vector3 =  waypoint[currentWaypoint].position;
	var moveDirection : Vector3 = target - transform.position;
	var velocity = moveDirection.normalized * speed;
	var rotation = Quaternion.LookRotation(moveDirection);
	transform.rotation = rotation;
	
	
	if(moveDirection.magnitude < 1){
	currentWaypoint++;
	
	}
}else{
	currentWaypoint = 0;
}

GetComponent.<Rigidbody>().velocity = velocity;
}