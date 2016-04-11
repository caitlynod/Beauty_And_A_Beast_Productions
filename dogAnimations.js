var anim: Animation;
var target;

function Start() {
	anim = GetComponent.<Animation>();
	target = GameObject.Find("Player").GetComponent(playerController);
}

// Make the character fade between an idle and a run animation 
// when the player starts to move.
function Update () {
	if (Mathf.Abs(Input.GetAxis("Horizontal")) > 0.1){
	anim.CrossFade("Walk Dog");
	if(Input.GetButton("Shift") && Mathf.Abs(Input.GetAxis("Horizontal")) > 0.1){
	anim.CrossFade("Run Dog");
	}
	}else if(Input.GetButton("Jump")){
	anim.CrossFade("Fall Dog");
	}else{
	anim.CrossFade("Idle 2 Dog");
	}
	if(!target.isGrounded()){
	anim.CrossFade("Fall Dog");
	}
	
	var playerInventory = GameObject.FindGameObjectWithTag("player").GetComponent(playerManager);
if( playerInventory.inventory["power"] == 1){
if(transform.Find("Dog")){
if(Input.GetButton("Fire1") && Mathf.Abs(Input.GetAxis("Horizontal")) > 0.1){
	anim.CrossFade("Rolling Dog");
	}

}
}
		
}