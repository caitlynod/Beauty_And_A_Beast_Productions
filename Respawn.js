#pragma strict

var SpawnPoint: Transform;

var player : GameObject;

function OnTriggerEnter(other: Collider)
{
	if(other.tag == "player")
	{
		player.transform.position = SpawnPoint.position;
	
	}

}