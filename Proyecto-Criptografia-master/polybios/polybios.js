function cifrar() {
    event.preventDefault();

    var normal = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',' '];
    var cifrado = ['AA','AB','AC','AD','AE','BA','BB','BC','BD','BD','BE','CA','CB','CC','CD','CE','DA','DB','DC','DD','DE','EA','EB','EC','ED','EE',' '];
    var resultado = [];
    var texto = document.getElementById('mensaje').value.toUpperCase().split("");

    for (var i = 0; i < texto.length; i++) {
      for (var j = 0; j < normal.length; j++) {
        if (texto[i] == normal[j]) {
          resultado.push(cifrado[j]);
        }
      }
    }
    var div = document.querySelector("#resultado1");
    var cadena = resultado.join("");
    div.innerHTML = '<p>Mensaje cifrado: ' + cadena + '</p>';
  }

  function descifrar() {
    event.preventDefault();

    var normal = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',' '];
    var cifrado = ['AA','AB','AC','AD','AE','BA','BB','BC','BD','BD','BE','CA','CB','CC','CD','CE','DA','DB','DC','DD','DE','EA','EB','EC','ED','EE',' '];
    var resultado = [];
    var texto = document.getElementById('descifrado').value.toUpperCase().replace(/ /g, '  ').match(/.{1,2}/g);

    for (var i = 0; i < texto.length; i++) {
      if (texto[i] == '  ') {
        texto[i] = ' ';
      }
      for (var j = 0; j < normal.length; j++) {
        if (texto[i] == cifrado[j]) {
          resultado.push(normal[j]);
        }
      }
    }
    var div = document.querySelector("#resultado2");
    var cadena = resultado.join("");
    div.innerHTML = '<p>Mensaje descifrado: ' + cadena + '</p>';
  }