#pragma strict
import System.Collections.Generic;
var health : int = 6;
public var fruit:int = 0;
public var utensil:int = 0;
public var score: int = 0;

var inventory = new Dictionary.<String,int>();
inventory["power"] = 0;

function OnTriggerEnter(other:Collider) {
	if(other.tag =="fruit") {
		fruit++;
		score++;
		Destroy(other.gameObject);
	}
	if(other.tag =="utensil") {
		utensil++;
		score++;
		Destroy(other.gameObject);
	}


	if(other.tag =="health" && health < 6) {
	health++;
	Destroy(other.gameObject);
	}
	
	if(other.tag=="health" && health==6){
	Destroy(other.gameObject);
	}

}