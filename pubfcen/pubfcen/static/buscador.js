'use strict';
function filtrar()
{
	var id="ids";
	var numerodeElementos = document.getElementById(id).childNodes.length;
	var textoBuscado = document.getElementById('searchfilter').value.toLowerCase();
	var textoContenido="";
	var encontrado=false;
	var comparaCon="";
	var cadena="";

	for (var i = 0; i < numerodeElementos-1; i++){
		if(document.getElementById(id).childNodes[i].nodeType==Node.ELEMENT_NODE){
			textoContenido = document.getElementById(id).childNodes[i].innerHTML;
			encontrado=false;
			if(textoContenido.length>0){comparaCon = textoContenido.toLowerCase();}
		}
	if (textoContenido.length>0 && (comparaCon.indexOf(textoBuscado) > -1)){encontrado = true;}
	if (textoContenido.length>0 && encontrado){document.getElementById(id).childNodes[i].style.display = '';}
	else if (textoContenido.length>0){document.getElementById(id).childNodes[i].style.display = 'none';}
	}
}