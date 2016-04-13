#pragma strict
var fruitField:UI.Text;
var utensilField:UI.Text;
var scoreField:UI.Text;
var powerField:UI.Text;



function Update () {
var playerhealth = GameObject.FindGameObjectWithTag("player").GetComponent(playerManager);

if(playerhealth.health == 6){
	GameObject.FindGameObjectWithTag("health").GetComponent(UI.RawImage).texture = Resources.Load("fullHealth", typeof(Texture)) as Texture;
}
if(playerhealth.health == 5){
	GameObject.FindGameObjectWithTag("health").GetComponent(UI.RawImage).texture = Resources.Load("health"+playerhealth.health, typeof(Texture)) as Texture;
}
if(playerhealth.health == 4){
	GameObject.FindGameObjectWithTag("health").GetComponent(UI.RawImage).texture = Resources.Load("health"+playerhealth.health, typeof(Texture)) as Texture;
}
if(playerhealth.health == 3){
	GameObject.FindGameObjectWithTag("health").GetComponent(UI.RawImage).texture = Resources.Load("health"+playerhealth.health, typeof(Texture)) as Texture;
}
if(playerhealth.health == 2){
	GameObject.FindGameObjectWithTag("health").GetComponent(UI.RawImage).texture = Resources.Load("health"+playerhealth.health, typeof(Texture)) as Texture;
}
if(playerhealth.health == 1){
	GameObject.FindGameObjectWithTag("health").GetComponent(UI.RawImage).texture = Resources.Load("health"+playerhealth.health, typeof(Texture)) as Texture;
}
if(playerhealth.health == 0){
	GameObject.FindGameObjectWithTag("health").GetComponent(UI.RawImage).texture = Resources.Load("nohealth", typeof(Texture)) as Texture;
}
var animal  = PlayerPrefs.GetString("Animal");
//Debug.Log(animal);

var playerInventory = GameObject.FindGameObjectWithTag("player").GetComponent(playerManager);
if( playerInventory.inventory["power"] == 1){
//Debug.Log(playerInventory.inventory["power"]);
if(animal ==  "Owl"){
GameObject.FindGameObjectWithTag("power").GetComponent(UI.RawImage).texture = Resources.Load("Owl", typeof(Texture)) as Texture;
powerField.text = "Power up achieved : High Jump";
}else if(animal == "Dog"){
GameObject.FindGameObjectWithTag("power").GetComponent(UI.RawImage).texture = Resources.Load("Dog", typeof(Texture)) as Texture;
powerField.text = "Power up achieved : Dog Roll | Press RT to use";
}else if(animal == "Turtle"){
GameObject.FindGameObjectWithTag("power").GetComponent(UI.RawImage).texture = Resources.Load("Turtle", typeof(Texture)) as Texture;
powerField.text = "Power up achieved : Turtle Roll | Press RT to use";
}
}

var fruitCount = GameObject.FindGameObjectWithTag("player").GetComponent(playerManager);
fruitField.text = 'x' + fruitCount.fruit.ToString();

var scoreCount = GameObject.FindGameObjectWithTag("player").GetComponent(playerManager);
scoreField.text = 'x' + scoreCount.score.ToString();

var utensilCount = GameObject.FindGameObjectWithTag("player").GetComponent(playerManager);
utensilField.text = 'x' + utensilCount.utensil.ToString();
}