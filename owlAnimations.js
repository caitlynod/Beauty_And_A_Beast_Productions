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
	anim.CrossFade("Walk Owl");
	if(Input.GetButton("Fire1") && Mathf.Abs(Input.GetAxis("Horizontal")) > 0.1){
	anim.CrossFade("Run Owl");
	}
	}else if(Input.GetButton("Jump")){
	anim.CrossFade("Fall Owl");
	}else{
	anim.CrossFade("Idle 2 Owl");
	}
	if(!target.isGrounded()){
	anim.CrossFade("Fall Owl");
	}
		
}