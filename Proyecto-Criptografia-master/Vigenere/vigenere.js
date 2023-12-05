function cifrar(event) {
  event.preventDefault();

  var clave = document.getElementById("clave").value.toUpperCase();
  var size_clave = clave.length;
  
  var mensaje = document.getElementById("mensaje").value.toUpperCase();
  var size_mensaje = mensaje.length;

  var slcIdioma = document.getElementById('slcIdioma').value;

  //DECIDIMOS EL ALFABETO A UTILIZAR
  if (slcIdioma == "0") {
    var alfabeto = [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
      'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    var valores_clave = clave.split('').map(char => alfabeto.indexOf(char));

  } else {
    var alfabeto = [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
      'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    var valores_clave = clave.split('').map(char => alfabeto.indexOf(char));
  }

  var mensaje_cifrado = [];
  for (var i = 0; i < size_mensaje; i++) {
    var pos_letra = alfabeto.indexOf(mensaje[i]);
    mensaje_cifrado[i] = alfabeto[(valores_clave[i % size_clave] + pos_letra) % alfabeto.length];
  }

  var div = document.querySelector("#resultado1");
  var cadena = mensaje_cifrado.join('');
  div.innerHTML = '<p>Mensaje cifrado: ' + cadena + '</p>';
}

function descifrar(event) {
  event.preventDefault();

  var clave = document.getElementById("clave2").value.toUpperCase();
  var size_clave = clave.length;
  var mensaje = document.getElementById("mensaje_cif").value.toUpperCase();
  var size_mensaje = mensaje.length;

  var slcIdioma = document.getElementById('slcIdioma').value;

  //DECIDIMOS EL ALFABETO A UTILIZAR
  if (slcIdioma == "0") {
    var alfabeto = [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
      'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    var valores_clave = clave.split('').map(char => alfabeto.indexOf(char));

  } else {
    var alfabeto = [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
      'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    var valores_clave = clave.split('').map(char => alfabeto.indexOf(char));
  }

  var valores_clave = clave.split('').map(char => alfabeto.indexOf(char));

  var mensaje_descifrado = [];
  for (var i = 0; i < size_mensaje; i++) {
    var pos_letra = alfabeto.indexOf(mensaje[i]);
    mensaje_descifrado[i] = alfabeto[(pos_letra - valores_clave[i % size_clave] + alfabeto.length) % alfabeto.length];
  }

  var div = document.querySelector("#resultado2");
  var cadena = mensaje_descifrado.join('');
  div.innerHTML = '<p>Mensaje descifrado: ' + cadena + '</p>';
}
