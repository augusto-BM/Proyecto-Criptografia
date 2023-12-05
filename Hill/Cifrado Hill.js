function CifrarHill(){
    //Creamos los alfabetos 
let AlfabetoIng ='abcdefghijklmnopqrstuvwxyz'
let AlfabetoEsp ='abcdefghijklmnñopqrstuvwxyz'
// los volvemos mayusculas
AlfabetoIng = AlfabetoIng.toUpperCase();
AlfabetoEsp= AlfabetoEsp.toUpperCase();

    //se obtendra el valor del campo de texto de mensaje
    var txtMensaje =document.getElementById("Mensaje").value;
    var txtLlave = document.getElementById("Llave").value;
    
    //Quitamos espacios
    var txtMensaje=txtMensaje.trim();
    var txtLlave=txtLlave.trim();

    var Idioma = document.getElementById("SelecIdioma").value;
    var arrayalfa ='';

    //Se escoge el alfabeto a utilizar
    if(Idioma == "0"){

        arrayalfa = AlfabetoIng.split('');
    alert("idioma ingles")
    }else{
    
        arrayalfa = AlfabetoEsp.split('');
        alert("idioma español")
    }

    var arraymensaje = txtMensaje.split('');
    var arrayllave = txtLlave.split('');

//se cambian los caracteres de las letras por numeros del mensaje y la llave

    var numeromensaje = '';

    for (let i = 0; i < arraymensaje.length; i++) {
        
        for (let j = 0; j < arrayalfa.length; j++) {

            if(arraymensaje[i] == arrayalfa[j]){

                numeromensaje = numeromensaje  + ' ' + j;

            }

        }
        
    }

    console.log("tu numero es \n"+numeromensaje)

    var numerollave = '';

    for (let i = 0; i < arrayllave.length; i++) {
        
        for (let j = 0; j < arrayalfa.length; j++) {

            if(arrayllave[i] == arrayalfa[j]){

                numerollave = numerollave  + ' ' + j;

            }

        }
       //se ingresan los numeros en un arreglo
        var arraynumerollave = numerollave.split(' ');
        var arraynumeromensaje = numeromensaje.split(' ');
        
    }
      //empiezan operaciones para los arreglos

    //mostramos el arreglo en los textarea
        document.getElementById("EjemploA").value = "|"+arraymensaje.slice(0,3)+"|"+"\n"+"|"+arraymensaje.slice(3,6)+"|"+"\n"+"|"+arraymensaje.slice(6,9)+"|" ;
        document.getElementById("EjemploN").value = "|"+arraynumeromensaje.slice(1,4)+"|"+"\n"+"|"+arraynumeromensaje.slice(4,7)+"|"+"\n"+"|"+arraynumeromensaje.slice(7,12)+"|"

        document.getElementById("EjemploAL").value = "|"+arrayllave.slice(0,1)+"|"+" "+"|"+arrayllave.slice(3,4)+"|"+"\n"+"|"+arrayllave.slice(1,2)+"|"+" "+"|"+arrayllave.slice(4,5)+"|"+"\n"+"|"+arrayllave.slice(2,3)+"|"+" "+"|"+arrayllave.slice(5,6)+"|";
        document.getElementById("EjemploNL").value = "|"+arraynumerollave.slice(1,2)+"|"+" "+"|"+arraynumerollave.slice(4,5)+"|"+"\n"+"|"+arraynumerollave.slice(2,3)+"|"+" "+"|"+arraynumerollave.slice(5,6)+"|"+"\n"+"|"+arraynumerollave.slice(3,4)+"|"+" "+"|"+arraynumerollave.slice(6,7)+"|";       
        
        let J=1;
        let X=1;
        let L=1;
        let Indexresul=0;
        let operacion =0;
        let operacion2 =0;
        //array donde guardaremos los resultados de la multiplicacion del M1
        let arraymulti ='';
        var resultado = [];
// operacion para multiplicar la llave con los 3 primeros
        for(let i = 1;i < arraynumeromensaje.length; i++){
            if(J<=3){
            operacion = arraynumeromensaje[i] * arraynumerollave[J]    
            console.log("indexmensaje: "+arraynumeromensaje[i])   
            console.log("indexllave: "+arraynumerollave[J])    
            if(X <= 3)
            {
            operacion2 = operacion2 + operacion;
            console.log("suma:"+operacion2)
            X=X+1;
            J=J+1;
           // alert("la jota: "+ J)  
            if(J >3 ){
               // alert("ya se metio")
                resultado[Indexresul]= operacion2;
                console.log("Resultado de la matriz"+resultado);
                arraymulti = arraymulti+ ' ' +resultado[Indexresul];
                operacion2=0;
                Indexresul=Indexresul+1;
                X=0;
                J=1;
            }   
        }               
        }
        }
// para el sig valor del M2
        let J2=4;
        let X2=1;
        let Indexresul2=0;
        let operacion3 =0;
        let operacion4 =0;
         //array donde guardaremos los resultados de la multiplicacion del M1
        let arraymulti2 ='';
        var resultado2 = [];
        for(let i = 1;i < arraynumeromensaje.length; i++){
            if(J2<=6){
            operacion3 = arraynumeromensaje[i] * arraynumerollave[J2]    
            console.log("indexmensaje2: "+arraynumeromensaje[i])   
            console.log("indexllave2: "+arraynumerollave[J2])    
            if(X2 <= 3)
            {
            operacion4 = operacion4 + operacion3;
            console.log("suma2:"+operacion4)
            X2=X2+1;
            J2=J2+1;
          //  alert("la jota2: "+ J2)  
            if(J2 >6 ){
            //    alert("ya se metio2")
                resultado2[Indexresul2]= operacion4;
                console.log("Resultado de la matriz2"+resultado2);
                arraymulti2 = arraymulti2+ ' ' +resultado2[Indexresul2];
                operacion4=0;
                Indexresul2=Indexresul2+1;
                X2=0;
                J2=4;
            }   
        }               
        }
        }
        
        var arraynummulti1=arraymulti.split(' ');
        var arraynummulti2=arraymulti2.split(' ');


       



        // obtendremos el mod 

var MOD = arrayalfa.length;
var numerosresiduo = '';
var resultado3 =[];
let V=0;
let V1=1;
//alert("antes del for")

for (let i = 1; i <= 6; i++){
if(V < 3){
    resultado3[i] = ((parseInt(arraynummulti1[i]) % parseInt(MOD)) + parseInt(MOD)) % parseInt(MOD);
    numerosresiduo = numerosresiduo + ' ' + resultado3[i];
    V=V+1;
    //alert("primer if")
}
else if (V >= 3){
   // alert("segundo if")
    resultado3[i] = ((parseInt(arraynummulti2[V1]) % parseInt(MOD)) + parseInt(MOD)) % parseInt(MOD);
    numerosresiduo = numerosresiduo + ' ' + resultado3[i];
    V1=V1+1;
}
}

console.log("MOD: "+numerosresiduo)
var arraynumerosresiduos= numerosresiduo.split(' ');
document.getElementById("EjemploMul").value = "M1 = "+ arraynummulti1 +"\n"+ "M2 = "+arraynummulti2+ "\n" +"MOD M1 = "+ arraynumerosresiduos.slice(1,4)+"\n" +"MOD M2 = "+ arraynumerosresiduos.slice(4,7)

//cambiar los mod a caracteres
var CifradoM = '';

for (let i = 1; i < arraynumerosresiduos.length; i++) {
        
    CifradoM = CifradoM  + '' + arrayalfa[arraynumerosresiduos[i]];    
    
}

document.getElementById("Cifrado").value= "Mensaje Cifrado = "+CifradoM;

}










