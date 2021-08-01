// Your code here
let campo = document.querySelector("#addToDo");
campo.addEventListener("keypress", function(e) {
	if (e.key === "Enter") {
		addtask(campo.value);
	}
});
//let lis = document.querySelectorAll(".fa-trash");
/* lis.addEventListener("click", function() {
	alert("funciona");
}); */

let listaLi = document.querySelector("ul");
listaLi.addEventListener("click", function(e) {
	var li = e.target.closest("li");
	var nodes = Array.from(listaLi.children);
	var index = nodes.indexOf(li);
	alert(index);
	deletetask(index);
});

function addtask(valor) {
	let lista = document.querySelector("ul");
	let li = document.createElement("li");
	li.innerHTML = '<span><i class="fa fa-trash"></i></span> ' + valor;
	lista.appendChild(li);
}
function deletetask(index) {
	let lista = document.querySelector("ul");
	lista.removeChild(lista.childNodes[index]);
}
