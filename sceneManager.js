#pragma strict

function play(){
	Application.LoadLevel("story");
}

function instructions(){
	Application.LoadLevel("instructions");
}

function levelSelect(){
	Application.LoadLevel("levelSelect");
	PlayerPrefs.DeleteKey("score");
}

function exit(){
	Application.Quit();
}