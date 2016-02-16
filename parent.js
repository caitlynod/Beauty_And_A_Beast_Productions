#pragma strict
 function OnCollisionEnter(collision : Collision)
 {
     collision.transform.parent = transform;
 }
 
 function OnCollisionExit(collision : Collision)
 {
     collision.transform.parent = null;
 }