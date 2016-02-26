#pragma strict
import System.Collections.Generic;
var health : int = 100;
public var fruit:int = 0;
public var utensil:int = 0;
public var score: int = 0;

var inventory = new Dictionary.<String,int>();
inventory["power"] = 0;

function OnTriggerEnter(other:Collider) {
	if(other.tag =="fruit" && fruit < 100) {
		fruit++;
		score++;
		Destroy(other.gameObject);
	}
	if(other.tag =="utensil" && fruit < 100) {
		utensil++;
		score++;
		Destroy(other.gameObject);
	}


	if(other.tag =="health" && health < 100) {
	health++;
	Destroy(other.gameObject);
	}
	
	if(other.tag=="health" && health==100){
	Destroy(other.gameObject);
	}

}