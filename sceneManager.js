#pragma strict

function play(){
	Application.LoadLevel("story");
}

function instructions(){
	Application.LoadLevel("instructions");
}

function levelSelect(){
	Application.LoadLevel("levelSelect");
}

function exit(){
	Application.Quit();
}