#pragma strict

var SpawnPoint : Transform;


function OnTriggerEnter(other: Collider){
var player = GameObject.FindGameObjectWithTag("player");
	if(player)
	{
		SpawnPoint.position = Vector3(transform.position.x, transform.position.y, transform.position.z);
	
	}

}