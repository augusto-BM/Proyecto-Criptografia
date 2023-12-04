function cifrar(event) {
  event.preventDefault();

  var SIZE_ALF = 26;
  var clave = document.getElementById("clave").value.toUpperCase();
  var size_clave = clave.length;
  var mensaje = document.getElementById("mensaje").value.toUpperCase();
  var size_mensaje = mensaje.length;

  var alfabeto = Array.from({ length: SIZE_ALF }, (_, i) => String.fromCharCode(65 + i));

  var valores_clave = clave.split('').map(char => alfabeto.indexOf(char));

  var mensaje_cifrado = [];
  for (var i = 0; i < size_mensaje; i++) {
    var pos_letra = alfabeto.indexOf(mensaje[i]);
    mensaje_cifrado[i] = alfabeto[(valores_clave[i % size_clave] + pos_letra) % SIZE_ALF];
  }

  var div = document.querySelector("#resultado1");
  var cadena = mensaje_cifrado.join('');
  div.innerHTML = '<p>Mensaje cifrado: ' + cadena + '</p>';
}

function modNeg(n1, n2) {
  var mod = n1;
  while (mod < 0) {
    mod += n2;
  }
  return mod;
}

function descifrar(event) {
  event.preventDefault();

  var SIZE_ALF = 26;
  var clave = document.getElementById("clave2").value.toUpperCase();
  var size_clave = clave.length;
  var mensaje = document.getElementById("mensaje_cif").value.toUpperCase();
  var size_mensaje = mensaje.length;

  var alfabeto = Array.from({ length: SIZE_ALF }, (_, i) => String.fromCharCode(65 + i));

  var valores_clave = clave.split('').map(char => alfabeto.indexOf(char));

  var mensaje_descifrado = [];
  for (var i = 0; i < size_mensaje; i++) {
    var pos_letra = alfabeto.indexOf(mensaje[i]);
    mensaje_descifrado[i] = alfabeto[modNeg((pos_letra - valores_clave[i % size_clave]), SIZE_ALF)];
  }

  var div = document.querySelector("#resultado2");
  var cadena = mensaje_descifrado.join('');
  div.innerHTML = '<p>Mensaje descifrado: ' + cadena + '</p>';
}
