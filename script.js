var menuItem=document.getElementById("menu").getElementsByTagName("li");
var headLine=document.getElementById("text");
var btn=document.getElementById("zar");
var myMenu=document.getElementById("menu");
var counter=1;
// for (var i = 0; i < menuItem.length; i++) {
// 	menuItem[i].addEventListener("click",selectItems);
// }
myMenu.addEventListener("click",selectItems);
function selectItems(n){
	if (n.target.nodeName="li") {
		headLine.innerHTML=n.target.innerHTML;
	
	for(i=0;i<menuItem.length;i++){
	menuItem[i].classList.remove("selected");}
	n.target.classList.add("selected");
	}
	
}
btn.addEventListener("click",newItem);
function newItem(){
     myMenu.innerHTML +="<li> new line "+ counter++ +"</li>"
 }
