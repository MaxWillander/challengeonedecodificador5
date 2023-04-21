


function criptografar(){
	 var texto = document.querySelector("#textocripto");
	 var textoTodo = texto.value;
	 var textResult = textoTodo.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "obter").replace(/u/g, "ufat")
    .replace(/1/g, "!").replace(/2/g, "ols").replace(/3/g, "e").replace(/4/g, "Sm").replace(/5/g, "s").replace(/6/g, "9").replace(/7/g, "RMM")
    .replace(/8/g, "oo").replace(/9/g, "6");
	 
	 saidaText = document.getElementById("saida");
	 saidaText.innerHTML =   textResult ;
	}
	
	
function descriptografar(){
     var texto = document.querySelector("#textocripto");
	 var textoTodo = texto.value;
	 var textResult = textoTodo.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/obter/g, "o").replace(/ufat/g, "u")
    .replace(/!/g, "1").replace(/ols/g, "2").replace(/3/g, "e").replace(/Sm/g, "4").replace(/5/g, "S").replace(/9/g, "6").replace(/RMM/g, "7")
    .replace(/oo/g, "8").replace(/6/g, "9");
	 
	 saidaText = document.getElementById("saida");
	 saidaText.innerHTML =   textResult ;
	}	

function copiar(){
      var copiaTexto = document.getElementById("saida");
	  copiaTexto.select();
	  document.execCommand("copy");
	  alert("Texto Copiado!")
	}	
	