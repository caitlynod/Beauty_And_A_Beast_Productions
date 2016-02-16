#pragma strict

import System.Collections.Generic; //need to import Dictionary

var coin:int = 10; //same as public var coin:int=10;
private var magic:int = 20;
public var health:int = 50;


var inventory = new Dictionary.<String,int>();

function Start () {

}

function Update () {

}


function OnTriggerEnter(other:Collider) {

	if(other.tag =="health" && health < 100) {
	health++;
	Destroy(other.gameObject);
	}
	
	if(other.tag=="health" && health==100){
	Destroy(other.gameObject);
	}

}


