#pragma strict

var Damage : int = 0.5;
var Distance : float;
var MaxDistance : float = 10;

function Update () 
{
if (Input.GetButtonDown("Fire3") && Mathf.Abs(Input.GetAxis("Horizontal")) > 0.1)
{
var hit : RaycastHit;
if (Physics.Raycast(transform.position, transform.TransformDirection(Vector3.right),hit) || Physics.Raycast (transform.position, transform.TransformDirection(Vector3.left),hit))

{
	Distance = hit.distance;
	if(Distance < MaxDistance){
	hit.transform.SendMessage("ApplyDamage", Damage, SendMessageOptions.DontRequireReceiver);
}
}
}
}