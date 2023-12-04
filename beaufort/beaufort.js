//CREAMOS ALFABETOS
let alphabetIng = 'abcdefghijklmnopqrstuvwxyz';
let alphabetEsp = 'abcdefghijklmnñopqrstuvwxyz';

alphabetIng = alphabetIng.toUpperCase();
alphabetEsp = alphabetEsp.toUpperCase();

function encriptarBeaufort() {
    //TOMAMOS VALORES
    var txtMensaje = document.getElementById('txtMensaje').value;
    var txtLlave = document.getElementById('txtLlave').value;

    var txtMensaje = txtMensaje.trim();
    var txtLlave = txtLlave.trim();
  
    var slcIdioma = document.getElementById('slcIdioma').value;
    var arrayalf = '';

    //DECIDIMOS EL ALFABETO A UTILIZAR
    if (slcIdioma == "0") {
        arrayalf = alphabetIng.split('');
    } else {
        arrayalf = alphabetEsp.split('');
    }

    var arraymensaje = txtMensaje.split('');
    var arrayllave = txtLlave.split('');

    //REPETIMOS LA LLAVE EN CASO NECESARIO
    if (arraymensaje.length > arrayllave.length) {
        var prueba = txtLlave.repeat(arraymensaje.length);
        txtLlave = prueba.substring(0, arraymensaje.length);
        arrayllave = txtLlave.split('');
    }

    //EL MENSAJE LO CONVERTIMOS EN NÚMERO
    var mensajenumero = '';

    for (let i = 0; i < arraymensaje.length; i++) {
        for (let j = 0; j < arrayalf.length; j++) {
            if (arraymensaje[i] == arrayalf[j]) {
                mensajenumero = mensajenumero + ' ' + j;
            }
        }
    }

    //LA LLAVE LO CONVERTIMOS EN NÚMERO
    var llavenumero = '';

    for (let i = 0; i < arrayllave.length; i++) {
        for (let j = 0; j < arrayalf.length; j++) {
            if (arrayllave[i] == arrayalf[j]) {
                llavenumero = llavenumero + ' ' + j;
            }
        }
    }

    //LE RESTAMOS LA LLAVE AL MENSAJE
    var arraymensajenumero = mensajenumero.split(' ');
    var arrayllavenumero = llavenumero.split(' ');

    var numerosRestados = '';
    var resultado = [];

    for (let i = 1; i < arraymensajenumero.length; i++) {
        resultado[i] = arraymensajenumero[i] - arrayllavenumero[i];
        numerosRestados = numerosRestados + ' ' + resultado[i];
    }

    //OBTENEMOS EL MOD DE LA RESTA
    var arrayNumerosRestados = numerosRestados.split(' ');
    var mod = arrayalf.length;

    var numerosModeados = '';
    var resultado2 = [];

    for (let i = 1; i < arrayNumerosRestados.length; i++) {
        resultado2[i] = ((parseInt(arrayNumerosRestados[i]) % parseInt(mod)) + parseInt(mod)) % parseInt(mod);
        numerosModeados = numerosModeados + ' ' + resultado2[i];
    }

    //CAMBIAR MOD A CARACTERES
    var arrayNumerosModeados = numerosModeados.split(' ');

    var criptograma = '';

    for (let i = 1; i < arrayNumerosModeados.length; i++) {
        criptograma = criptograma + '' + arrayalf[arrayNumerosModeados[i]];
    }

    document.getElementById('txtCripto').value = criptograma.toUpperCase();

    document.getElementById('txtMensaje').value = document.getElementById('txtMensaje').value + "\n" +
        "El mensaje en número es:" + mensajenumero;

    document.getElementById('txtLlave').value = document.getElementById('txtLlave').value + "\n" +
        "La llave en número es:" + llavenumero;

    document.getElementById('txtCripto').value = document.getElementById('txtCripto').value + "\n" +
        "La resta del mensaje menos la llave es: " + numerosRestados;

    document.getElementById('txtCripto').value = document.getElementById('txtCripto').value + "\n" +
        "El mod de la resta es: " + numerosModeados;
}

function desencriptarBeaufort(){

    var txtCripto = document.getElementById('txtCripto').value;
    var txtLlave = document.getElementById('txtLlave').value;

    var txtCripto = txtCripto.trim();
    var txtLlave = txtLlave.trim();  

    
    var arraycripto = txtCripto.split('');
    var arrayllave = txtLlave.split('');

    //DE SER NECESARIO SE REPITE LA LLAVE

    if(arraycripto.length > arrayllave.length)
    {
    
        var prueba = txtLlave.repeat(arraycripto.length);
        txtLlave = prueba.substring(0,arraycripto.length);
        arrayllave = txtLlave.split('');

        console.log('La llave es más corta, se repetira para hacer las operaciones.' + arrayllave);
    
    }


    var slcIdioma = document.getElementById('slcIdioma').value;

    //SELECCIONAMOS EL AFABETO
    var arrayalf = '';

    if(slcIdioma == "0"){

        arrayalf = alphabetIng.split('');
    
    }else{
    
        arrayalf = alphabetEsp.split('');
    
    }

    //Hacemos numero el criptograma

    var criptonumero = '';

    for (let i = 0; i < arraycripto.length; i++) {
        
        for (let j = 0; j < arrayalf.length; j++) {

            if(arraycripto[i] == arrayalf[j]){

                criptonumero = criptonumero  + ' ' + j;

            }

        }
        
    }

    console.log('El criptograma en número es: \n' + criptonumero);

    //Hacemos numero la llave

    var llavenumero = '';

    for (let i = 0; i < arrayllave.length; i++) {
        
        for (let j = 0; j < arrayalf.length; j++) {

            if(arrayllave[i] == arrayalf[j]){

                llavenumero = llavenumero  + ' ' + j;

            }

        }
        
    }

    console.log('La llave en número es: \n' + llavenumero);

    //Sumamos la llave mas el criptograma


    var arraycriptonumero = criptonumero.split(' ');
    var arrayllavenumero = llavenumero.split(' ');

    var numerosSumados = '';
    
    var resultado = [];

    for (let i = 1; i < arraycriptonumero.length; i++){

        resultado[i] = parseInt(arraycriptonumero[i]) + parseInt(arrayllavenumero[i]);

        numerosSumados = numerosSumados + ' ' + resultado[i];

    }

    console.log('La suma de la llave y el criptograma es: \n' + numerosSumados);

    //OBTENEMOS EL MOD

    var arraynumerosSumados = numerosSumados.split(' ');
    var mod  =  arrayalf.length;

    var numerosModeados = '';

    var resultado2 = [];

    for (let i = 1; i < arraynumerosSumados.length; i++){

         resultado2[i] = ((parseInt(arraynumerosSumados[i]) % parseInt(mod)) + parseInt(mod)) % parseInt(mod);

         numerosModeados = numerosModeados + ' ' + resultado2[i];

    }
    console.log('El mod de los números sumados son: \n' + numerosModeados);

    //CONVERTIMOS EL MOD EN CARACTER

    var arrayNumerosModeados = numerosModeados.split(' ');

    var mensaje = '';

    for (let i = 1; i < arrayNumerosModeados.length; i++) {
        
        mensaje = mensaje  + '' + arrayalf[arrayNumerosModeados[i]];    
        
    }

   

    document.getElementById('txtMensaje').value = mensaje.toUpperCase();

    document.getElementById('txtMensaje').value =  document.getElementById('txtMensaje').value + "\n" +
                                                    "El la suma del criptograma más la llave es: " + numerosSumados;

    
    document.getElementById('txtMensaje').value =  document.getElementById('txtMensaje').value + "\n" +
                                                    "El mod de la suma es: " + numerosModeados;


    document.getElementById('txtLlave').value =  document.getElementById('txtLlave').value + "\n" +
                                                    "El número en llave es: " + llavenumero;

    document.getElementById('txtCripto').value =  document.getElementById('txtCripto').value + "\n" +
                                                    "El criptograma en número es: " + criptonumero;

}

function Borrar() {
    document.getElementById('txtCripto').value = '';
    document.getElementById('txtLlave').value = '';
    document.getElementById('txtMensaje').value = '';
}