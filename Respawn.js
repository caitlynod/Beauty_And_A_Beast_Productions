#pragma strict

var SpawnPoint: Transform;



function OnTriggerEnter(other: Collider){
var player = GameObject.FindGameObjectWithTag("player");
	if(player)
	{
		player.transform.position = SpawnPoint.position;
	
	}

}