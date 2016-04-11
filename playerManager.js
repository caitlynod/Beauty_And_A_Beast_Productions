#pragma strict
import System.Collections.Generic;
var health : int = 6;
public var fruit:int = 0;
public var utensil:int = 0;
public var score: int = 0;
public var pickupSound:AudioSource;


var inventory = new Dictionary.<String,int>();
inventory["power"] = 0;

function Update(){
if(health == 0){
Application.LoadLevel("lose");
}
var playerJump = GameObject.FindGameObjectWithTag("player").GetComponent(playerController);
if(inventory["power"] == 1){
if(transform.Find("Owl")){
playerJump.jumpHeight = 10;
}

}
}

function OnTriggerEnter(other:Collider) {
	if(other.tag =="fruit") {
		fruit++;
		score++;
		pickupSound.Play();
		Destroy(other.gameObject);
	}
	if(other.tag =="utensil") {
		utensil++;
		score++;
		pickupSound.Play();
		Destroy(other.gameObject);
	}
	if(other.tag =="powerUp") {
	//Debug.Log(inventory["power"]);
	inventory["power"] += 1;
	
		Destroy(other.gameObject);
		
		
	}
	
	if(other.tag == "killEnemy"){
	Destroy(other.gameObject);
	Destroy(GameObject.FindGameObjectWithTag("enemy"));
	
	}


	if(other.tag =="healthPickup" && health < 6) {
	health++;
	Destroy(other.gameObject);
	}
	
	if(other.tag=="healthPickup" && health==6){
	Destroy(other.gameObject);
	}
	
	if(other.tag=="winGame"){
	saveSelection(score);
	Application.LoadLevel("win");
	}
	

	if (other.tag == "damage"){
          health -= 1;  
          yield WaitForSeconds(30);    
      }

	

}

function saveSelection(playerScore : float){
	PlayerPrefs.SetFloat("score", playerScore);
}
