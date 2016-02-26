#pragma strict
var fruitField:UI.Text;
var utensilField:UI.Text;
var scoreField:UI.Text;
function Update () {
var playerhealth = GameObject.FindGameObjectWithTag("player").GetComponent(playerManager);

if(playerhealth.health == 6){
	GameObject.FindGameObjectWithTag("health").GetComponent(UI.RawImage).texture = Resources.Load("fullHealth", typeof(Texture)) as Texture;
}
if(playerhealth.health == playerhealth.health){
GameObject.FindGameObjectWithTag("health").GetComponent(UI.RawImage).texture = Resources.Load("health"+playerhealth.health, typeof(Texture)) as Texture;
}
if(playerhealth.health == 0){
	GameObject.FindGameObjectWithTag("health").GetComponent(UI.RawImage).texture = Resources.Load("nohealth", typeof(Texture)) as Texture;
}


var fruitCount = GameObject.FindGameObjectWithTag("player").GetComponent(playerManager);
fruitField.text = 'x' + fruitCount.fruit.ToString();

var scoreCount = GameObject.FindGameObjectWithTag("player").GetComponent(playerManager);
scoreField.text = 'x' + scoreCount.score.ToString();

var utensilCount = GameObject.FindGameObjectWithTag("player").GetComponent(playerManager);
utensilField.text = 'x' + utensilCount.utensil.ToString();
}