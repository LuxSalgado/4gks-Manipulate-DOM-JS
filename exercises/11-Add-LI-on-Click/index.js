let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let myLi = document.createElement("LI");
	myLi.innerHTML = "Fourth element";
	let padre = document.querySelector("#myList");
	padre.appendChild(myLi);
});
