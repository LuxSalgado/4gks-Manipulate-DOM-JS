let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let miNuevoDiv = document.createElement("div");
	miNuevoDiv.style.background = "yellow";
	miNuevoDiv.innerHTML = "Hello World";
	document.body.appendChild(miNuevoDiv);
});
