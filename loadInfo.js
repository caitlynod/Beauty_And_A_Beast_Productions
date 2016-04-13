#pragma strict
var scoreField:UI.Text;
function Start () {
var score  = PlayerPrefs.GetFloat("score");
Debug.Log(score);
scoreField.text = score.ToString();
}
