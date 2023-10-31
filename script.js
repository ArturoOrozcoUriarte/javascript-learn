/* // ------------------- VENTANA DE ALERTA --------------------------------
   window.alert("Hola mundo");
// ---------------------------------------------------------------------- */
/* // ------------------- MENSAJE EN CONSOLA -------------------------------
   console.log("Lectura para vivir");
// ---------------------------------------------------------------------- */
/* // ------------------- VARIABLES DE PRUEBA ------------------------------
   var tituloCalc = "Calculadora simple";
   console.log(tituloCalc);
   tituloCalc = 16;
   console.log(tituloCalc);
// ---------------------------------------------------------------------- */
/* // ------------------- PRUEBAS DE SUMA ----------------------------------
var a = Number;
var b = Number;
a = 12;
b = 8;
c = a + b;
d = c - a;
console.log("Resultado suma: " + c);
console.log("Resultado resta: " + d);
// ------------------------------------------------------------------------ */
/* // ------------------- DIVISIÓN -----------------------------------------
var cociente = 15 / 5;
var residuo = 15 % 4;
console.log("Resultado cociente división: " + cociente);
console.log("Resultado residuo división: " + residuo);
// -------------------------------------------------------------------- */
/* // ------------------- EJERCICIO INCREMENTO -----------------------------
var librosComprados = 100;
console.log(librosComprados);
librosComprados = librosComprados + 1;
console.log(librosComprados);
// ++ incrementa en uno
librosComprados++;
console.log(librosComprados);
// reducir
librosComprados = librosComprados - 1;
console.log(librosComprados);
// -- reduce uno
librosComprados--;
console.log(librosComprados);
// -------------------------------------------- */
/* // ------------------- INCREMENTAR VALOR MAS DE UNO ---------------------
  var ab = 23;
  ab = ab + 23;
  console.log("El resultado del incremento es: " + ab);
  var ac = 23;
  ac += 5;
  console.log("El resultado del incremento es: " + ac);
  // a = a + 5;   es lo mismo que     a += 5;
  // con resta es igual solo que se usa - o -=
  // igual con otras asignaciones *= o /= o %=
  var mul = 40;
  resmul = mul *= 7;
  cosdiv = mul /= 2;
  resdiv = mul %= 6;
  console.log("Res multi: " + resmul + "Res cos: " + cosdiv + "Res resi: " + resdiv); 
// ------------------------------------------------------------------------ */
/* // ------------------- COMILLAS INSIDE ----------------------------------
// Metodo 1
console.log("Cadena de caracteres uno \"Comillas segundas\"");
// Metodo 2 --------- las comillas son intercambiables
console.log('Cadena de comillas uno "Cadena de comillas 2"');
// ----------------------------------------------------------------------- */
/* // ------------------- SECUENCIAS DE ESCAPE -----------------------------

 //   \'  Comilla simple
 //   \"  Comilla doble
 //   \\  Barra invertida
 //   \n  Linea nueva
 //   \r  Retorno de carro
 //   \t  Tabulación
 //   \b  Retroceso
 //   \f  Salto de página     

console.log("Aprendo JavaScript \nY soy una vrga");
console.log("Prueba de\ttabulación");
*/
/* // ------------------- CONCATENACIÓN ------------------------------------
var nombreApellido = "Alan" + " " + "Turing";
console.log(nombreApellido);

var verbo = "programación.";
var mensaje = "Estoy aprendiendo ";
console.log(mensaje + verbo);

var mensajeCompleto = "Estoy aprendiendo a programar ";
var parteFinal = "JavaScript por Nico";
console.log(mensajeCompleto)

mensajeCompleto += parteFinal;
console.log(mensajeCompleto);
// ----------------------------------------------------------- */
/* // ------------------- LONGITUD DE TAMAÑO DE CARACTERES -----------------
// lenght muesta cuantos caracteres tiene
 var cadenaCaracteres;
cadenaCaracteres = "Cuantos caracteres hay?";
console.log(cadenaCaracteres.length);

// se inicia desde 0 para seleccionar el caracter en los corchetes
var lenguajeProgra = "JavaScript";
console.log(lenguajeProgra[9]);

// los caracteres de la cadena son inmutables, pero se puede rehacer la cadena

var cadePrueba = "JavaScript";
console.log(cadePrueba[0]);
console.log(cadePrueba[1]);
console.log(cadePrueba[2]);
console.log(cadePrueba[3]);
console.log(cadePrueba[4]);
console.log(cadePrueba[5]);
console.log(cadePrueba[6]);
console.log(cadePrueba[7]);
console.log(cadePrueba[8]);
console.log(cadePrueba[9]);

// el ultimo indice es de longitud -1 por que se inicia desde 0
var cadenaPrueba = "JavaScriptxz";
console.log(cadenaPrueba[cadenaPrueba.length - 1]);

var cadenasPrueba = "Felicidad";
n = 1;
console.log(cadenasPrueba[cadenasPrueba.length - n]);
// ------------------------------------------------------- */
/* // ------------------- CADENA VACIA -------------------------------------
var miSustantivo = "perro";
var miAdjetivo = "negro";
var miVerbo = "corrió";
var miAdvervio = "rápidamente";

var palabrasEnBlanco = "El " + miSustantivo + " " + miAdjetivo + " " + miVerbo + " " + miAdvervio + " a la tienda.";

console.log(palabrasEnBlanco);
// ------------------------------------------------------------- */
/* // ------------------- ARRAY --------------------------------------------
var miArreglo = ["Jhon", 24];
console.log(miArreglo);

var estudiantes = ["Leto", "Nicolas", "Nicole", "Emilia", "Orozco", "Torres"];
console.log(estudiantes);

// array anidado
var listaEstudiantes = [["Nora", 80],["Jose", 70]];
console.log(listaEstudiantes);

// ------------------------------------------------- */
/* // ------------------- ACCEDER A ELEMENTOS DE ARRAY ---------------------
var arregloPrueba = [10, 20, 30];
console.log(arregloPrueba[0] + arregloPrueba[1] + arregloPrueba[2]);

// modificar array
arregloPrueba[0] = 25;
console.log(arregloPrueba);

// acceder a arreglos multidimensionales
var multiAreglo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(multiAreglo[1][2]);

// --------------------------------------------- */
/* // ------------------- METODO PUSH, POP, SHIFT --------------------------
// agrega variables a arreglos
var estaciones = ["Invierno", "Otoño", "Primavera"];
estaciones.push("Verano");
console.log(estaciones);

// elimina ultima variable y retorna
var climas = ["Seco", "Humedo", "Templado"];
var clima;
clima = climas.pop();
console.log(climas);
console.log(clima);

// elimina primer variable y retorna
var drogas = ["Metilfenidado", "Fluoxetina", "Clonazepam", "Diazepam"];
var droga;
droga = drogas.shift();
console.log(drogas);
console.log(droga);

// agregar un elemento al principio
var medicinas = ["Paracetamol", "Clorfenamida", "Trimetoprima"];
medicinas.unshift("Aspirina");
console.log(medicinas);
// --------------------------------------------- */
/* // ------------------- LISTA DE COMPRAS ---------------------------------
var miListaDeCompras = [["Cereal", 2], ["Leche", 2], ["Pollo", 7], ["Galletas", 2]];
console.log("Voy a comprar "+ miListaDeCompras[3][1] + " " + miListaDeCompras[3][0]);
// ------------------------------------------------------------- */
/* // ------------------- FUNCIONES ----------------------------------------
function mostrarMensaje() {
  console.log("Hola Mundo");
}
mostrarMensaje();
// ----------------------------------- */
/* // ------------------- FUNCION SUMAR ------------------------------------
function sumar(a, b){
   var suma = a + b;
   console.log("El resultado de la suma es: "+ suma);
}
var x = 8;
var y = 1;

sumar(5, 6);
sumar(10, 9);
sumar(11, 22);
sumar(x, y);

function concatenarTresCadenas(cadena1, cadena2, cadena3){
   console.log(cadena1 + " " + cadena2 + " " + cadena3);
}
concatenarTresCadenas("Estoy", "prendiendo", "a programar");
// ------------------------------------ */
/* // ------------------- VARIABLES GLOBALES Y LOCALES ---------------------
var miNombre = "Dragon";

function mostrarMiNombre(){
var miNombre = "Drake";
console.log(miNombre);
}

mostrarMiNombre();
console.log(miNombre);
// ----------------------------------------------------------------------- */
/* // ------------------- RETORNAR VALOR -----------------------------------
function sumar (a, b){
   return a + b;
}
console.log(sumar(5, 3));
// asignar nombre a variable retornada
var resultado = sumar(5, 3);
console.log(resultado);
// ejemplo de return variable concatenada
function crearCadenaConMeta (lenguajeDeProgra){
   return "Mi meta es aprender " + lenguajeDeProgra;
}
var miMeta = crearCadenaConMeta("JavaScript");
console.log(miMeta);
// --------------------------------------- */
/* // ------------------- COLA ---------------------------------------------
function proximoEnLaFila(arreglo, elemento){
arreglo.push(elemento); // agrega elemento al final
return arreglo.shift(); // elimina primer elemento
}
var miArreglo = [1, 2, 3, 4, 5];

console.log("Antes: " + JSON.stringify(miArreglo)); // muestra el primer arreglo

console.log(proximoEnLaFila(miArreglo, 6)); // muestra eliminado y añade elemento a nuevo arreglo

console.log("Después: " + JSON.stringify(miArreglo)); // muestra arreglo después de modificar
*/
/* // ------------------- BOOLEANOS Y OPERADORES ---------------------------
console.log(9 == 9);       // true
console.log(9 == '9');     // true
console.log(9 === 9);      // true
console.log(9 === '9');    // false
console.log('9' === '9');  // true

console.log(9 != 9);       // false
console.log(9 != 6);       // true
console.log(9 != '9');     // false
console.log(9 !== '9');    // true

console.log(6 > 5);        // true
console.log(3 > 9);        // false
console.log("B" > "A");    // true
console.log("ACB" > "ABC");// true
console.log("AB" > "A");   // true

var a = 15;
var b = 7;
console.log(a > b);        // true
console.log(b > a);        // false

console.log(5 > 5);        // false
console.log(5 >= 5);       // true
// -------------------------------------------- */
/* // ------------------- AND = && -----------------------------------------
 true    &&    true     = true
 true    &&    false    = false
 false   &&    true     = false
 false   &&    false    = false

   // ------------------- OR  = ||
 true    ||    true     = true
 true    ||    false    = true
 false   ||    true     = true
 false   ||    false    = false

   // ------------------- NOT !expresion
!true    = false  
!false   = true
// -------------------------------- */
/* // ------------------- CONDICIONALES IF ---------------------------------
var x = 5;

if(x > 2 && x < 10){
   console.log("La condidicon es verdadera.")
} else {
   console.log("La condición es falsa.")
}

var estacion = "Invierno";

if (estacion == "Invierno"){
   console.log("Me encanta el invierno");
} else {
   console.log("No me gusta el " + estacion);
}
// ------------------------------- */
/* // ------------------- ELSE IF ------------------------------------------
function clasificarValor(valor){
   if(valor % 2 == 0){
      console.log("Divisible entre 2.");
   } else if (valor % 3 == 0) {
      console.log("Divisible entre 3.");
   } else {
      console.log("No es divisible entre las opciones.");
   }
}
clasificarValor(2);
clasificarValor(3);
clasificarValor(5);
// ----------------------------- */
/* // ------------------- ELSE IF LOGICO -----------------------------------
function clasificarValor(valor){
   if(valor < 6){
      console.log("Menor que 5.");
   } else if (valor < 10) {
      console.log("Menor que 10.");
   } else {
      console.log("Mayor o igual a 10.");
   }
}
clasificarValor(7);

// encadenar
function interpretarIMC(indiceMasaCorportal){
   if (indiceMasaCorportal < 18.5) {
      console.log("Bajo Peso");
   } else if (indiceMasaCorportal <= 24.9){
      console.log("Normal");
   } else if (indiceMasaCorportal <= 29.9){
      console.log("Sobrepeso");
   } else {
      console.log("Obesidad");
   }
}
interpretarIMC(15);
interpretarIMC(22);
interpretarIMC(28);
interpretarIMC(30);
// ------------------------- */
/* // ------------------- PROYECTO GOLF ------------------------------------
function juegoGolf(par, golpes){
   if (golpes == 1){
      return "Hole in One";
   } else if ( golpes <= par - 2){
      return "Eagle";
   } else if (golpes == par - 1){
      return "Birdie";
   } else if (golpes == par){
      return "Par";
   } else if (golpes == par + 1){
      return "Bogey";
   } else if (golpes == par + 2){
      return "Double Bogey";
   } else if (golpes >= par + 3){
      return "Go Home";
   } 
}
console.log(juegoGolf(4, 1));
// -------------------------- */

function suma() {
   var num1 = parseFloat(document.getElementById("num1").value);
   var num2 = parseFloat(document.getElementById("num2").value);
   var result = num1 + num2;
   document.getElementById("result").innerHTML = "Valor de la suma es: " + result;
 }