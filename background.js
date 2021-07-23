var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");
//with function
function setgradient() {
	body.style.background=
 	"linear-gradient(to right,"
	+color1.value
	+", "
 	+color2.value
	+")";
css.textContent=body.style.background+";";
}

//without function
// color1.addEventListener("input",function() {
// 	body.style.background=
// 	"liner-gradient(to right,"
// 	+color1,value+
// 	", "
// 	color2.value
// 	+")";
// })

// color2.addEventListener("input",function() {
// body.style.background=
// 	"liner-gradient(to right,"
// 	+color1,value+
// 	", "
// 	color2.value
// 	+")";
// })

color1.addEventListener("input",setgradient);
color2.addEventListener("input",setgradient);