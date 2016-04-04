#pragma strict

var Health = 1;
var anim: Animation;
var HeartRed : Transform;

function Update()
{
	if(Health <= 0)
	{
		Dead();
	}
}

function ApplyDamage (Damage : int)
{
	Health -= Damage; 
}

function Dead()
{
	Destroy (gameObject);
	Instantiate(HeartRed,transform.position, Quaternion.identity);
	
}