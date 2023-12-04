function cifradoCesar(event) {
  event.preventDefault();

  var mensaje = document.getElementById('mensaje').value.toUpperCase().split("");
  var desplazamiento = parseInt(document.getElementById('desplazamiento').value, 10);

  let resultado = '';

  for (let i = 0; i < mensaje.length; i++) {
      let char = mensaje[i];

      if (char.match(/[A-Z]/)) {
          let codigoAscii = mensaje[i].charCodeAt(0) - 64; // Ajuste para comenzar en 1
          // Aplicar el cifrado César
          char = String.fromCharCode((codigoAscii + desplazamiento - 2) % 26 + 65);
      }

      resultado += char;
  }

  var div = document.querySelector("#resultado1");
  div.innerHTML = '<p>Mensaje cifrado: ' + resultado + '</p>';
}

function descifradoCesar(event) {
  event.preventDefault();

  var mensajeCifrado = document.getElementById('mensajeDescifrado').value.toUpperCase();
  var desplazamiento = parseInt(document.getElementById('desplazamientoDescifrado').value, 10);

  let resultadoDescifrado = '';

  for (let i = 0; i < mensajeCifrado.length; i++) {
      let char = mensajeCifrado[i];

      if (char.match(/[A-Z]/)) {
          let codigoAscii = mensajeCifrado.charCodeAt(i) - 64; // Ajuste para comenzar en 0
          // Aplicar el descifrado César
          char = String.fromCharCode((codigoAscii - desplazamiento + 26) % 26 + 65);
      }

      resultadoDescifrado += char;
  }

  var div = document.querySelector("#resultado2");
  div.innerHTML = '<p>Mensaje descifrado: ' + resultadoDescifrado + '</p>';
} 
