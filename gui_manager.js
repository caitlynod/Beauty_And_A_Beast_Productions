#pragma strict

var healthField:UI.Text; //empty slot to be filled with text field, creates reference

function Update() {
	var player = GameObject.FindGameObjectWithTag("Player").GetComponent(firstScript);
	//Debug.Log(player.health);

	var healthValue : String = player.health.ToString();
	healthField.text = "Health:" + healthValue;

}