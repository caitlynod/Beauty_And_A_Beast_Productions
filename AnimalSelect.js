#pragma strict
#pragma downcast

var sceneCamera : Camera;

private var currentAnimation : String;

var dog : GameObject;
var turtle : GameObject;
var owl : GameObject;


function Start () {
	dog.GetComponent.<Animation>().Play("Idle 2 Dog");
	turtle.GetComponent.<Animation>().Play("Idle 2 Turtle");
	owl.GetComponent.<Animation>().Play("Idle 2 Owl");
	
}

