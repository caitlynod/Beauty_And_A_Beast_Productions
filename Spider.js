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
	Instantiate(Orange,transform.position, Quaternion.identity);
	Instantiate(Orange,transform.position, Quaternion.identity);
	Instantiate(Orange,transform.position, Quaternion.identity);
	
}
