window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
	// your code here
	let padre = document.querySelector("#mySelect");
	for (let i = 0; i < countries.length; i++) {
		var opt = document.createElement("option");
		opt.value = i;
		opt.innerHTML = countries[i];
		padre.appendChild(opt);
	}
};
function start() {
	var padre = document.getElementById("mySelect");
	padre.addEventListener("change", addActivityItem, false);
}

function addActivityItem() {
	//option is selected
	let valor = document.getElementById("mySelect");
	alert(valor.options[valor.selectedIndex].text);
}

window.addEventListener("load", start, false);
