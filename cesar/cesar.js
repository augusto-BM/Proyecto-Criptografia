var caesar = caesar || (function() {
	var doStaff = function (txt, desp, action) {
		var replace = (function() {

			var slcIdioma = document.getElementById('slcIdioma').value;
			//DECIDIMOS EL ALFABETO A UTILIZAR
			if (slcIdioma == "0") {
				var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
						'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
						var l = abc.length;
    	} else {
				var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
						'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
						var l = abc.length;
    	}

			return function(c) {
				var i = abc.indexOf(c.toLowerCase());
				if (i != -1) {
					var pos = i;
					if (action) {
						// forward
						pos += desp;
						pos -= (pos >= l)?l:0;
					} else {
						// backward
						pos -= desp;
						pos += (pos < 0)?l:0;
					}
					
					return abc[pos];
				}
				return c;
			};
		})();
		var re = (/([a-z])/ig);
		return String(txt).replace(re, function (match) {
			return replace(match);
		});
	};

	return {
		encode: function(txt, desp) {
			return doStaff(txt, desp, true);
		},
		decode: function(txt, desp) {
			return doStaff(txt, desp, false);
		}
	};
})();

function codificar() {
  var desplazamiento = parseInt(document.getElementById('desplazamiento').value, 10);
	document.getElementById("resultado").innerHTML= '<p>Mensaje cifrado: ' + caesar.encode(document.getElementById("mensaje").value, desplazamiento - 1) + '</p>';
  /* var div = document.querySelector("#resultado1");
  div.innerHTML = '<p>Mensaje descifrado: ' + desplazamiento + '</p>'; */
}

function decodificar() {
	var desplazamiento = parseInt(document.getElementById('desplazamiento').value, 10);
	document.getElementById("resultado").innerHTML= '<p>Mensaje descifrado: ' + caesar.decode(document.getElementById("mensaje").value, desplazamiento - 1) + '</p>';
  
}
