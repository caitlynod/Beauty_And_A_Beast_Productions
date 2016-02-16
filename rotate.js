#pragma strict

/*

public var rotationAmount : float = 5.0;


function Start () {

}

function Update () {

transform.Rotate(rotationAmount,0,0);

}
*/

public var rotate : float = 5.0;

function Update() {
	var rotateDelta : float = rotate*Time.deltaTime;
	//move the object 10 units per second vs 10 units per frame
	
	transform.Rotate(rotateDelta, 0, 3);
}




