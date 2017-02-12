/* use this to test out your function */
window.onload = function() {
 	changeColor("es", "#000");
	changeColor("pt", "#0ff");
	changeColor("gb", "#f0f");
	changeColor("de", "#ff0");
}

// changeColor takes a path Class and a color (hex value)
// and changes that path's fill color
function changeColor(id, color) {
	elements = document.getElementsByClassName(id);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.fill = color;
    }
}