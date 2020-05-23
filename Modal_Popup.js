var ham = document.getElementsByClassName("ham");
var drop = document.getElementsByClassName("drop");
var first = document.getElementsByClassName("first");
var second = document.getElementsByClassName("second");
var third = document.getElementsByClassName("third");

var click1 = document.getElementById("click1");
var click2 = document.getElementById("click2");
var click3 = document.getElementById("click3");

ham[0].addEventListener ("click",myfunc)
click1.addEventListener ("click",myfunc1)
click2.addEventListener ("click",myfunc2)
click3.addEventListener ("click",myfunc3)

var a = 0
function myfunc(){
drop[0]	.style.height ="240px"	
drop[0]	.style.width ="auto"
a++;

if (a%2 === 0)	{
drop[0]	.style.height ="0px"	
drop[0]	.style.width ="auto"		
		}	
	}
	
function myfunc1(){
first[0].style.display ="block"	;	
	}
function myfunc2(){
second[0].style.display ="block"	;	
	}
function myfunc3(){
third[0].style.display ="block"	;	
	}
