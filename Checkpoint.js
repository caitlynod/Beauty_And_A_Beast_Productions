#pragma strict

var SpawnPoint : Transform;

function OnTriggerEnter(other: Collider)
{
	if(other.tag =="player")
	{
		SpawnPoint.position = Vector3(transform.position.x, transform.position.y, transform.position.z);
	
	}

}