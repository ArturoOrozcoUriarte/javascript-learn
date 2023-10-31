/* // ---------------------- SWITCH --------------------------
function clasificarValor(valor){
    var respuesta;
    switch (valor) {
        case 1:
            respuesta = "alpha";
            break;
        case 2:
            respuesta = "beta";
            break;
        case 3:
            respuesta = "gamma";
            break;
        case 4: 
            respuesta = "delta";
            break; 
    }
    return respuesta;
}
console.log(clasificarValor(3));

// otra redacción
var producto = "helado";
switch(producto){
    case "pizza": console.log("La pizza cuesta 10.");
    break;
    case "hamburguesa": console.log("La hamburguesa cuesta 20");
    break;
    case "helado": console.log("El helado cuesta 12");
    break;
}

// funcion e intermedios
function clasificarVolumen(valor){
    var volumen;
    switch(valor){
        case 1:
        case 2:
        case 3:
        case 4:
            volumen = "bajo";
            break;
        case 5:
        case 6:
        case 7:
            volumen = "intermedio";
            break;
        case 8:
        case 9:
        case 10:
            volumen = "alto";
            break;
    }
    return volumen;
}
console.log(clasificarVolumen(3));
// --------------------------- */
/* // ---------------------- RETURN BOOLEAN ------------------
function esMenorQue(a, b){
    return a < b;
}
console.log(esMenorQue(6, 3));
// ----------------- */
/* // ---------------------- PATRÓN RETORNO ANTICIPADO -------
function miFuncion(){
    console.log("Hola");
    return "Mundo";
    console.log("Adios");
}
console.log(miFuncion());

function calcuRaizCuad(num){
    if (num < 0) {
        return undefined;
    }
    return Math.sqrt(num);
}
console.log(calcuRaizCuad(25));
// ----------------------- */
/* // ---------------------- CONTEO DE CARTAS ----------------
// si el conteo es positivo, se apuesta, si es negativo o 0, se espera
var conteo = 0;
function contCartas(carta){
var decision;
switch(carta){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6: 
        conteo++;
        break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
        conteo--;
        break;
}
if (conteo > 0) {
    decision = "Apostar";
} else {
    decision = "Esperar"
}
return conteo + " " + decision;
}

console.log(contCartas(3));
console.log(contCartas(6));
console.log(contCartas("Q"));
console.log(contCartas(10));
// -------------------------- */
/* // ---------------------- CREAR OBJETO Y BORRAR -----------
var miPerro = {
    "nombre": "Ghost",
    "edad": 3,
    "peso": 10,
    "raza": "Doberman"
};
console.log(miPerro.nombre);

// acceder a propiedades con corchete
var miCuaderno = {
    "color": "verde",
    "categoria": 3,
    "numero de paginas": 200,
    "numero de hojas": 100
};
console.log(miCuaderno["numero de paginas"]);

// acceder a propiedad con variable
var resultados = {
    1: "nora",
    2: "gino",
    3: "kiara",
    4: "estef"
};
var posicion = 4;
console.log(resultados[posicion]);

// agregar contenido
var mochila = {
    "color": "azul",
    "tamaño": "mediano",
    "contenido": ["botella de agua", "cuaderno"]
};
console.log(mochila.contenido);

mochila.contenido.push("lapiz");

console.log(mochila.contenido);

// agregar propiedades
var curso = {
    "titulo": "aprende javascript",
    "idioma": "español",
    "duracion": 30
};
console.log(curso);

curso.vistas = 3400;

console.log(curso);

// eliminar propiedades
delete curso.duracion;
console.log(curso);
// --------------------------- */
/* // ---------------------- OBJETOS BUSQUEDAS ---------------
 function buscarElemQuim(simbolo){
    // este objeto ejecuta lo mismo que un switch
    var simboloQuimico = {
        "Al": "Aluminio",
        "S": "Azufre",
        "Cl": "Cloro",
        "He": "Helio",
        "B": "Boro",
        "Li": "Litio"
    };
    return simboloQuimico[simbolo];
 }

 console.log(buscarElemQuim("Al"));
// ----------------------- */
/* // ---------------------- VERIFICAR PROPIEDAD -------------
var miCuaderno = {
    "color": "verde",
    "categoria": 3,
    "precio": 4.56
};
console.log(miCuaderno.hasOwnProperty("color"));
console.log(miCuaderno.hasOwnProperty("textura"));
// -------------------- */
/* // ---------------------- EJERCICIO VERIFICAR -------------
function verificarPropiedad(obj, propiedad){
    if (obj.hasOwnProperty(propiedad)){
        return "Propiedad: " + obj[propiedad];
    } else {
        return "El objeto no tiene esta propiedad"
    }
}
var miCuaderno = {
    "color": "verde",
    "categoria": 3,
    "precio": 4.56
};

console.log(verificarPropiedad(miCuaderno, "categoria"));
// ------------------- */
/* // ---------------------- OBJETOS COMPLEJOS ---------------
var ordenesDePizzas = [
    {
        "tipo": "margarita",
        "tamaño": "individual",
        "precio": 5.67,
        "toppings": [
            "extra queso",
            "champiñones",
            "piña"
        ],
        "para llevar": true
    },
    {
        "tipo": "cuatro quesos",
        "tamaño": "familiar",
        "precio": 18.34,
        "toppings": [
            "extra queso",
            "pimenton"
        ],
        "para llevar": false
    },
    {
        "tipo": "napolitana",
        "tamaño": "individual",
        "precio": 6.78,
        "topppings": [
            "chocolate",
            "sexo"
        ],
        "para llevar": true
    }
];

console.log(ordenesDePizzas[0]["tamaño"]);
console.log(ordenesDePizzas[1]);

var pc = {
"placa": {
    "asus": {
        "rog": "gaming",
        "tuf": "hard"
    }
},
"ram": {
    "gskill": 8,
    "tridentz": 9
}
};
console.log(pc.placa.asus.rog);
// ------------------------ */
/* // ---------------------- ARREGLO ANIDADO -----------------
var misPlantas = [
    {
        tipo: "flores",
        lista: [
            "rosas",
            "tulipanes",
            "dientes de leon"
        ]
    },
    {
        tipo: "arboles",
        lista: [
            "abeto",
            "píno",
            "abedul"
        ]
    }
];
var primeraFlor = misPlantas[0].lista[1];
console.log(primeraFlor);
var segundoArbol = misPlantas[1].lista[1];
console.log(segundoArbol);

// PRACTICA ARRAY OBJETOS 

var coleccionDeDiscos = {
    7835: {
        tituloAlbum: "MTBMB",
        artista: "eminem",
        canciones: ["Godzilla"]
    },
    5439: {
        tituloAlbum: "YOU LOVE HER"
}
};

function actualizarDiscos(discos, id, propiedad, valor){
    if (valor === ""){
        delete discos[id][propiedad];
    } else if (propiedad === "canciones") {
        discos[id][propiedad] = discos[id][propiedad] || [];
        discos[id][propiedad].push(valor);
    } else {
        discos[id][propiedad] = valor;
    }
};

console.log(coleccionDeDiscos[7835].tituloAlbum);
console.log(coleccionDeDiscos, 7835, "tituloAlbum", "");
console.log(coleccionDeDiscos[7835].tituloAlbum);
// -------------------------- */
/* // ---------------------- WHILE ---------------------------
// while basico
var i = 0;
while(i <= 19){
    console.log("Poco sexo");
    i++;
}

// arreglo de while
var miArreglo = [];
var q = 0;
while (q < 10){
    miArreglo.push(q);
    q++;
}
console.log(miArreglo);

// ejemplo eliminar
var numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

while (numeros.length > 4){
    numeros.pop();
}
console.log(numeros);

// --------------------------- */
/* // ---------------------- FOR -----------------------------
var miArreglo = [];
// iniciar variable, condicion, accion
for(var i = 0; i < 20; i += 2){
    miArreglo.push(i);
}
console.log(miArreglo);

// for impares
var arregloDos = [];
for (var i = 1; i < 20; i += 2){
    arregloDos.push(i);
}
console.log(arregloDos);

// for hacia atras

for (var i = 15; i >= 10; i-- ){
    console.log(i);
}

// arreglo
var arregloTres = [];

for (var i = 10; i > 0; i -= 2){
    arregloTres.push(i);
}
console.log(arregloTres);
// --------------------------------- */
/* // ---------------------- ITERAR ARREGLO FOR --------------
var miArreglo = [4, 6, 8, 2];
var total = 0;
for (var i = 0; i < miArreglo.length; i++){
console.log("Iteracion " + i);
console.log(miArreglo[i]);
    total += miArreglo[i];
}
console.log("Sumatoria: " + total);
 
// funcion
function contarNumPares(arreglo){
var total = 0;

for (var i = 0; i < arreglo.length; i++){
    if(arreglo[i] % 2 == 0){
    total++;
}
}
return total;
}
console.log(contarNumPares([5, 3, 4, 5, 1, 2]));
// ----------------------- */
/* // ---------------------- FOR ANIDADO ---------------------
var miArreglo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (var i = 0; i < miArreglo.length; i++){
    console.log("Nueva iteracion: " );
    var arregloAnidado = miArreglo[i];
    console.log("Arreglo: " + arregloAnidado);
    
    for (var j = 0; j < arregloAnidado.length; j++){
        console.log("Ciclo anidado" );
        console.log("Elemento: " );
        console.log(arregloAnidado[j]);
    }
}
// ------------------ */
/* // ---------------------- DO WHILE ------------------------
// ejectua la accion una vez aunque la condicion sea falsa
var x = 16;
do {
console.log(x);
x++;
} while (x < 10);
// ----------------------- */
/* // ---------------------- BUSCAR PERFIL -------------------
var contactos = [
    {
        "nombre": "Drake",
        "apellido": "Deschain",
        "numero": "454355345",
        "gustos": ["Pizza", "Programación"]
    },
    {
        "nombre": "Michael",
        "apellido": "Korvak",
        "numero": "112312312",
        "gustos": ["Finlandia", "Drogas"]   
    },
    {
        "nombre": "Sherlock",
        "apellido": "Holmes",
        "numero": "19021821908",
        "gustos": ["Casos interesantes", "Sexo"]
    }
];


function buscarPerfil(nombre, propiedad){
    for(var i = 0; i< contactos.length; i++){
        if(contactos[i].nombre === nombre){
            return contactos[i][propiedad] || "La propiedad no existe.";
        }
    } 
    return "El contacto no está en la lista";
}

console.log(buscarPerfil("Sherlock", "gustos"));
// ------------------ */
/* // ---------------------- NUMERO ALEATORIO ----------------
function generarFracAleatoria(){
    return Math.random(); 
}
console.log(generarFracAleatoria());
// enteros entre 0 y 19
function enteroAleatorio(){
   return Math.floor(Math.random() * 20);
}
console.log(enteroAleatorio());

// funcion
function generalEnteroAleatorio(limiteSuperior){
    return Math.floor(Math.random() * limiteSuperior);
}
for (i = 0; i < 20; i++){
    console.log(generalEnteroAleatorio(15));
}
console.log(generalEnteroAleatorio(5));

// limitar entre rangos
function rangosLimitados(limiteInferior, limiteArriba){
    return Math.floor(Math.random() * (limiteArriba - limiteInferior + 1)) + limiteInferior;
}
console.log("Limitado: " + rangosLimitados(3, 10));
// ------------------------------ */
/* // ---------------------- PARSE INT -----------------------
console.log(parseInt("70"));
var a = parseInt(5);
var b = parseInt(7);
console.log(a + b);
// con base genera un numero con los caracteres como binario
 console.log(parseInt("110", 2));
// hexadecimal
 console.log(parseInt("3E0A", 16));
// ------------------------------ */
/* // ---------------------- FUNCION TERNARIA ----------------
function retornarMinimo(x, y){
    // es la misma wea
    return x < y ? x : y;
   // if(x < y){
   //     return x;
   // } else {
   //     return y;
   // }
}
console.log(retornarMinimo(20, 11));

function indiceDureza(a){
   return a < 50 ? "Suave" : a > 50 ? "Duro" : "Normal";
}
console.log(indiceDureza(30));

// combinar con multiples condicionales
function comparaNum(d, f){
    return d == f ? "d y f son iguales" : d > f ? "d es mayor que f" : "f es mayor que d";
}
console.log(comparaNum(20, 30));
// ------------------------ */
/* // ---------------------- CALCULAR AREA CIRCULO -----------
 function calcularAreaCirc(radio){
const PI = 3.1416;
if (radio < 0){
    return undefined;
}
return PI * (radio ** 2);
 }
 console.log(calcularAreaCirc(80));
// --------------------- */
/* // ---------------------- MUTAR ARREGLO CONST -------------
const MI_ARREGLO = [1, 2, 3, 4];
console.log(MI_ARREGLO);
MI_ARREGLO[0] = 5;
MI_ARREGLO[1] = 6;
MI_ARREGLO[2] = 7;
MI_ARREGLO[3] = 8;
console.log(MI_ARREGLO);

// imutable

let colores = {
    "verde": "#10e04b",
    "negro": "#000000",
    "blanco": "#ffffff"
};
Object.freeze(colores);

colores.amarillo = "#fff200";
console.log(colores);
// --------------------------- */
/* // ---------------------- FUNCIONES FLECHA ----------------
const fecha = () => new Date();
// con parametros
const sumarTres = x => x + 3;
console.log(sumarTres(3));

// dos parametros
const concatenarAr = (arr1, arr2) => arr1.concat(arr2);
console.log(concatenarAr([1,2], [3, 4, 5]));

// con llave 
const sumar = (a, b) => {
    let num = 6;
    return a + b + num;
};
console.log(sumar(1, 1));
// ---------------------- */
/* // ---------------------- VALORES POR DEFECTO -------------
const incrementar = (num, valor = 1) => num + valor;
console.log(incrementar(5)); // = 6
console.log(incrementar(5, 2)); // = 7
// ----------------- */
/* // ---------------------- FUNCIONES PITERAS ---------------
// ... es la funcion rest
function miFuncion(...a){
console.log(a);
}
miFuncion([1, 2, 3, 4], [5, 6, 7, 8]);

// reduce suma los elementos del array
// const sumar = (x, y, z) => {
// const args = [x, y, z];
// return args.reduce((a, b) => a + b, 0);
// }; 
// es lo mismo
const sumar = (...args) => {
return args.reduce((a, b) => a + b, 0);
}
console.log(sumar(1, 2, 3));

// spread
const numeros = [1, 2, 3];
function sumars (x, y, z){
    return x + y + z;
}
console.log(sumar(...numeros));

// desestructuracion
// const usuario = {
//     nombre: "Gino Smith",
//     edad: 34
// };
// const nombre = usuario.nombre;
// const edad = usuario.edad;

// const {nombre, edad} = usuario;

var coordenadas = {
    x: 4,
    y: 6,
    z: 12
};
const {x, y, z} = coordenadas;

console.log(x);
console.log(y);
console.log(z);
// ---------------------- */
/* // ---------------------- DESESTRUCT OBJS ANIDADOS --------
const usuario = {
    johnDoe: {
        edad: 27,
        correo: "johndoe@gmail.com"
    }
};

const {johnDoe: {edad, correo}} = usuario;
console.log(edad);
console.log(correo);
// para asignar id 
// const {johnDoe: {edad: edadDelsuario, correo: correoDelUsuario}} = usuario;

const PRONOSTICO_LOCAL = {
    "ayer": {
        minima: 61,
        maxima: 75
    },
    "hoy": {
        minima: 64,
        maxima: 77
    },
    "mañana": {
        minima: 68,
        maxima: 80
    }
}; 
const minimoHoy = PRONOSTICO_LOCAL.hoy.minima;
const maximaHoy = PRONOSTICO_LOCAL.hoy.maxima;

console.log(minimoHoy);
console.log(maximaHoy);
// ------------------- */
/* // ---------------------- DESESTRUCT ARREGLOS -------------
var a;
var b;
var c;
[a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a);
console.log(b);
console.log(c);

// intercambio
var x = 8;
var y = 6;

[y, x] = [x, y];

console.log("x: " + x);
console.log("y: " + y);

// arreglo ...arr
var i;
var j;
var arr;

[a, b, ...arr] = [1, 2, 3, 4, 5, 6, 7];

console.log(a);
console.log(b);
console.log(arr);

// -------------------------- */
/* // ---------------------- OBJETO COMO ARGUMENTO -----------
var perfCliente = {
    nombre: "jane doe",
    edad: 24,
    nacionalidad: "americana",
    ubicacion: "eeuu"
};
const actualizarPerfil = (informacionDePerfil) => {
    const {nombre, edad, nacionalidad, ubicacion} = informacionDePerfil;
    console.log(nombre);
    console.log(edad);
    console.log(nacionalidad);
    console.log(ubicacion);
};
actualizarPerfil(perfCliente);

// funcion
const estadisticas = {
    max: 56.78,
    desviacionEstander: 3.34,
    mediana: 34.54,
    moda: 23.87,
    min: -0.75,
    promedio: 35.85
};

const mitad = ({max, min}) => (max + min) / 2.0;

console.log(mitad(estadisticas));
// ------------------------- */
/* // ---------------------- PLANTILLAS LITERALES ------------
// dentro de ${} se pueden escribir expresiones con ``
var a = 10;
console.log(`El valor es de ${a}`);

var nombre = "Drake";
var edad = 24;
console.log(`Mi nombre es ${nombre} y tengo ${edad} años.`)

var miArreglo = [1, 2, 3, 4];
console.log(`El arreglo es ${JSON.stringify(miArreglo)}`);

var persona = {
    nombre: "Drake Deschain",
    edad: 23
};

const SALUDO = `Hola, mi nombre es ${persona.nombre} y tengo ${persona.edad} años.`
console.log(SALUDO);
// --------------------------- */
/* // ---------------------- OBJETOS CONCISOS ----------------
const crearPersona = (nombre, edad, idioma) => ({nombre, edad, idioma});
console.log(crearPersona("Drake Deschain", 23, "Español"));
// -------------------------- */
/* // ---------------------- METODOS -------------------------
// si el valor de una propiedad es una funcion, se llama metodo
const persona = {
    nombre: "Isabel",
    presentar(){
        return `Hola, mi nombre es ${this.nombre}`;
    }
};

console.log(persona.presentar());
// ----------------------- */
/* // ---------------------- DEFINIR CLASE -------------------
class TransbordadorEspacial {
    constructor(planeta){
        this.planeta = planeta;
    }
}

var zeus = new TransbordadorEspacial("Jupiter");
console.log(zeus.planeta);

var apolo = new TransbordadorEspacial("Marte");
console.log(apolo.planeta);

class Mascota {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}

var miMascota = new Mascota("Nora", 5);
var tuMascota = new Mascota("Gino", 2);

console.log(miMascota);
console.log(tuMascota);
// ------------------ */
/* // ---------------------- GETTERS Y SETTERS ---------------
class Libro {
    constructor(autor){
        this._autor = autor;
    }
// getter protege el objeto funjiendo como intermediario que entrega el objeto
    get autor(){
        return this._autor;
    }
// setter protege el objeto grabando  la informacion aqui y no en la clase
    set autor(nuevoAutor) {
        this._autor = nuevoAutor;
    }

}

const libro = new Libro("Anonimo")
console.log(libro.autor);

libro.autor = "Gino";
console.log(libro.autor)
// ---------------------- */
