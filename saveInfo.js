#pragma strict

function loadForest(){
	saveSelection("Owl");
	Application.LoadLevel("forest");
}

function loadCave(){
	saveSelection("Dog");
	Application.LoadLevel("cave");
}

function loadWater(){
	saveSelection("Turtle");
	Application.LoadLevel("water");
}

function deleteSelection(){
	PlayerPrefs.DeleteKey("Animal");
	Application.LoadLevel("game");
}

function saveSelection(whatAnimal : String){
	PlayerPrefs.SetString("Animal", whatAnimal);
}