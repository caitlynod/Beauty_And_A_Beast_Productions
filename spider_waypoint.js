#pragma strict

public var moveSpeed : float;
var moveDirection : String = "Forward";
// public var rotate : float = 1;

function Update () {

	if(moveDirection == "Forward") {
		transform.Translate(Vector3.forward * Time.deltaTime * moveSpeed);
	} else {
		transform.Translate(Vector3.back * Time.deltaTime * moveSpeed);
	}

}

function OnTriggerEnter(hit : Collider) {
	if((hit.gameObject.tag == "waypoint") && (moveDirection == "Forward"))
	{
		transform.Rotate(0, 180, 0);
		moveDirection = "Forward"; 
		
	} else
	{
		transform.Rotate(0, 180, 0);
		moveDirection = "Backward";
	}
}