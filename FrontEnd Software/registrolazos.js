// Obtener referencias a los elementos que se van a interaccionar
var agregarTagButton = document.getElementById("agregar-tag");
var tagList = document.getElementById("tag-list");
var enviarButton = document.getElementById("enviar");
//Funcion agregar para un nuevo elemento li en la lista de tags
function agregarTag() {
    var nuevoTag = document.createElement("li");
    nuevoTag.textContent = "Tag Nuevo";
    tagList.appendChild(nuevoTag);
}
//Evento para agregar un elemento li cuando se hace nuevo clic en el boton "Agregar Lazo"
agregarTagButton.addEventListener("click", agregarTag);