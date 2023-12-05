  function cifrar() {
    event.preventDefault();

    var normal = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',' '];
    var cifrado = ['AA','AB','AC','AD','AE','BA','BB','BC','BD','BD','BE','CA','CB','CC','CD','CE','DA','DB','DC','DD','DE','EA','EB','EC','ED','EE',' '];
    var cifrado_numerico = ['11','12','13','14','15','21','22','23','24','24','25','31','32','33','34','35','41','42','43','44','45','51','52','53','54','55',' '];

    var resultado = [];
    var resultado_num = [];
    var texto = document.getElementById('mensaje').value.toUpperCase().split("");

    for (var i = 0; i < texto.length; i++) {
      for (var j = 0; j < normal.length; j++) {
        if (texto[i] == normal[j]) {
          resultado.push(cifrado[j]);
          resultado_num.push(cifrado_numerico[j]);
          
        }
      }
    }
    var div_result = document.querySelector("#resultado1");
    var div_result_num = document.querySelector("#resultado2");

    var cadena1 = resultado.join("");
    var cadena2 = resultado_num.join("");

    div_result.innerHTML = '<p>Mensaje cifrado: ' + cadena1 + '</p>';
    div_result_num.innerHTML = '<p>Mensaje cifrado: ' + cadena2 + '</p>';
  }

  function descifrar() {
    event.preventDefault();

    var normal = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',' '];
    var cifrado = ['AA','AB','AC','AD','AE','BA','BB','BC','BD','BD','BE','CA','CB','CC','CD','CE','DA','DB','DC','DD','DE','EA','EB','EC','ED','EE',' '];
    var cifrado_numerico = ['11','12','13','14','15','21','22','23','24','24','25','31','32','33','34','35','41','42','43','44','45','51','52','53','54','55',' '];

    var resultado = [];

    var texto = document.getElementById('descifrado').value.toUpperCase().replace(/ /g, '  ').match(/.{1,2}/g);

    for (var i = 0; i < texto.length; i++) {
      if (texto[i] == '  ') {
        texto[i] = ' ';
      }
      for (var j = 0; j < normal.length; j++) {
        if (texto[i] == cifrado[j]) {
          resultado.push(normal[j]);
        }else if (texto[i] == cifrado_numerico[j]) {
          resultado.push(normal[j]);
        }
      }
    }
    var div_r = document.querySelector("#resultado3");
    var cadena3 = resultado.join("");

    div_r.innerHTML = '<p>Mensaje descifrado: ' + cadena3 + '</p>'

  }