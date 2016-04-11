#pragma strict

var Health = 1;
var Orange : Transform;

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
	Instantiate(orange,transform.position, Quaternion.identity);
	Instantiate(orange,transform.position, Quaternion.identity);
	Instantiate(orange,transform.position, Quaternion.identity);
	
}