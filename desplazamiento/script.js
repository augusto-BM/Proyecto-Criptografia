window.addEventListener("load", Inicio, true);

function Inicio() {
  document.getElementById("mensaje_en_claro").addEventListener(
    "keyup",
    function () {
      this.value = this.value.toUpperCase();
    },
    true
  );
  document.getElementById("Cifrar").addEventListener(
    "click",
    function () {
      let MCLA = document.getElementById("mensaje_en_claro").value;
      let Llave = document.getElementById("Llave").value;
      let num = parseInt(Llave);
      document.getElementById("mensaje_descifrado").value = Cifrar(MCLA, num);
    },
    true
  );
  document.getElementById("Descifrar").addEventListener(
    "click",
    function () {
      let MCLA = document.getElementById("mensaje_en_claro").value;
      let Llave = document.getElementById("Llave").value;
      let num = parseInt(Llave);
      document.getElementById("mensaje_descifrado").value = Decifrar(MCLA, num);
    },
    true
  );
}
//metodo de encriptacion
function Cifrar(MCLA, Llave) {
  var resultado = "";
  for (var i = 0; i < MCLA.length; i++) {
    var c = MCLA.charCodeAt(i);
    //verificar las letraS
    if (c >= 65 && c <= 90) {
      //ENLAZO el texto cifrado
      //al caracter le resto 65 para luego sumarle el desplazamiento (Llave)
      //le saco el modulo al resultado obtenido
      // le sumo  65 para obtener su igualdad en ascii
      resultado += String.fromCharCode(((c - 65 + Llave) % 26) + 65);
    }
    //si no es una letra de igual manera se enlaza (cabe resaltar que es para caracter especial)
    else {
      resultado += MCLA.charAt(i);
    }
  }
  return (document.getElementById("mensaje_descifrado").value = resultado);
}

function Decifrar(MCLA, Llave) {
  var resultado = "";
  //realizo el desplazamiento retornandole el tamaño y el modulo
  Llave = (26 - Llave) % 26;
  //AL RESULTADO ENVIO LA ENCRPTACION
  resultado = Cifrar(MCLA, Llave);
  //retorno el mensaje cifrado
  return resultado;
}
function ValidarNumeros(event) {
  if (event.charCode >= 48 && event.charCode <= 57) {
    return true;
  }
  return false;
}
