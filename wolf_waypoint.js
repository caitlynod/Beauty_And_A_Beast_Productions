#pragma strict

public var moveSpeed : float;
var moveDirection : String = "Left";
// public var rotate : float = 1;

function Update () {

	if(moveDirection == "Left") {
		transform.Translate(Vector3.left * Time.deltaTime * moveSpeed);
	} else {
		transform.Translate(Vector3.right * Time.deltaTime * moveSpeed);
	}

}

function OnTriggerEnter(hit : Collider) {
	if((hit.gameObject.tag == "waypoint") && (moveDirection == "Right"))
	{
		transform.Rotate(0, 180, 0);
		moveDirection = "Right"; 
		
	} else
	{
		transform.Rotate(0, 180, 0);
		moveDirection = "Left";
	}
}