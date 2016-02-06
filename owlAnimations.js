var anim: Animation;

function Start() {
	anim = GetComponent.<Animation>();
}

// Make the character fade between an idle and a run animation 
// when the player starts to move.
function Update () {
	if (Mathf.Abs(Input.GetAxis("Horizontal")) > 0.1){
	anim.CrossFade("Walk Owl");
	if(Input.GetButton("Fire1") && Mathf.Abs(Input.GetAxis("Horizontal")) > 0.1){
	anim.CrossFade("Run Owl");
	}
	}else if(Input.GetButton("Jump")){
	anim.CrossFade("Jump Up Owl");
	}else{
	anim.CrossFade("Idle Owl");
	}
		
}