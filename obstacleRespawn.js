#pragma strict

var spawn_point : Transform;
var GameCamera : Transform;

function playerRespawn() {
	transform.position = spawn_point.position;
}

function Update () {
	GameCamera.LookAt(this.transform);
	var playerPos = transform.position;

	if (playerPos.y <= -8) {
		playerRespawn();
	}
}