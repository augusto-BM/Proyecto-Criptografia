let isAlfabetoEspanol = true;
let alfabeto_usado = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
document
  .getElementById("CambiarAlfabeto")
  .addEventListener("click", function () {
    if (isAlfabetoEspanol == true) {
      document.getElementById("CambiarAlfabeto").innerText = "Ingles";
      isAlfabetoEspanol = false;
      alfabeto_usado = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else {
      document.getElementById("CambiarAlfabeto").innerText = "Español";
      isAlfabetoEspanol = true;
      alfabeto_usado = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    }
    console.log(isAlfabetoEspanol);
  });

const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Variables de los rotores
const Cabezal1 = "NYPEUBSAMHXCLWFQVZIGJOKTRD";
var cabezal1 = [alfabeto, Cabezal1];

const Cabezal2 = "DXJLPVGFZAWITSOBUYQCEHKMN";
var cabezal2 = [alfabeto, Cabezal2];

const Cabezal3 = "KFZAMQWCXOESIBTHRJUVNLPGDY";
var cabezal3 = [alfabeto, Cabezal3];

window.addEventListener("load", Inicio, true);

function Inicio() {
  // Event listeners para ajustar el texto a mayúsculas al escribir
  document.getElementById("mensaje_en_claro").addEventListener(
    "keyup",
    function () {
      this.value = this.value.toUpperCase();
    },
    true
  );
  document.getElementById("Llave").addEventListener(
    "keyup",
    function () {
      this.value = this.value.toUpperCase();
    },
    true
  );

  // Event listeners para cifrar y descifrar al hacer clic en los botones respectivos
  document.getElementById("Cifrar").addEventListener(
    "click",
    function () {
      let MCLA = document.getElementById("mensaje_en_claro").value;
      let Llave = document.getElementById("Llave").value;
      Cifrar(MCLA, Llave);
    },
    true
  );

  document.getElementById("Descifrar").addEventListener(
    "click",
    function () {
      let MCLA = document.getElementById("mensaje_en_claro").value;
      let Llave = document.getElementById("Llave").value;
      Decifrar(MCLA, Llave);
    },
    true
  );
}

function Cifrar(MCLA, Llave) {
  //función que ajusta los rotores
  AjustarRotores(Llave);
  let cifrado = "";
  for (let i = 0; i < MCLA.length; i++) {
    let letra = MCLA[i];
    let c5 = alfabeto_usado.indexOf(letra);
    let c4 = cabezal3[0].indexOf(cabezal3[1][c5]);
    let c3 = cabezal2[0].indexOf(cabezal2[1][c4]);
    let c2 = cabezal1[0].indexOf(cabezal1[1][c3]);
    cifrado += alfabeto_usado[c2];
    cabezal3 = RotarRotores(cabezal3);
    if (cabezal3[0][0] == Llave[2]) {
      cabezal2 = RotarRotores(cabezal2);
      if (cabezal2[0][0] == Llave[1]) {
        cabezal1 = RotarRotores(cabezal1);
      }
    }
  }
  return (document.getElementById("mensaje_decifrado").value = cifrado);
}

function AjustarRotores(Clave) {
  while (cabezal1[0][0] != Clave[0]) {
    cabezal1 = RotarRotores(cabezal1);
  }
  while (cabezal2[0][0] != Clave[1]) {
    cabezal2 = RotarRotores(cabezal2);
  }
  while (cabezal3[0][0] != Clave[2]) {
    cabezal3 = RotarRotores(cabezal3);
  }
}

function RotarRotores(cilindro) {
  let primerLetraAbc = cilindro[0][0];
  let primerLetra = cilindro[1][0];
  cilindro[0] = cilindro[0].substring(1) + primerLetraAbc;
  cilindro[1] = cilindro[1].substring(1) + primerLetra;
  return cilindro;
}

function Decifrar(MCLA, Llave) {
  AjustarRotores(Llave);
  let mensaje = "";
  for (let i = 0; i < MCLA.length; i++) {
    let letra = MCLA[i];
    let c1 = alfabeto_usado.indexOf(letra);
    let c2 = cabezal1[1].indexOf(cabezal1[0][c1]);
    let c3 = cabezal2[1].indexOf(cabezal2[0][c2]);
    let c4 = cabezal3[1].indexOf(cabezal3[0][c3]);
    mensaje += alfabeto_usado[c4];
    cabezal3 = RotarRotores(cabezal3);
    if (cabezal3[0][0] == Llave[2]) {
      cabezal2 = RotarRotores(cabezal2);
      if (cabezal2[0][0] == Llave[1]) {
        cabezal1 = RotarRotores(cabezal1);
      }
    }
  }
  return (document.getElementById("mensaje_decifrado").value = mensaje);
}
