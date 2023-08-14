// CODIGO JS

//------------------------- 19 - JULIO - 2023 ------------------------- 

//------------------------- INICIO DE REACT ------------------------- 

// const usuario = prompt("Digite su Name");
// const divtexto = document.querySelector('#texto'); //Referencia al id creado con #  
// const   welcome = <h1>Bienvenidos al curso de React {usuario}</h1>; 
// ReactDOM.render(welcome, divtexto);

//------------------------- REPASO JS (-- CONSTANTES Y VARIABLES --) ------------------------- 

// const nombre = "Diego";
// const edad = 19;
// console.log (`Tu nombre es ${nombre} y tienes ${edad} años de edad`);

//------------------------- REPASO JS (-- TEMPLATE STRING --) ------------------------- 

// const nombre2 = prompt("Dime tu nombre")
// const apellido = prompt("Dime tu apellido")

// // const nameCompleto = nombre2 + "" + apellido;
//  alert(`Bienvenido ${nombre2} ${apellido} al curso de React`);
// console.log(`Bienvenido ${nombre2} ${apellido} al curso de React`);


//------------------------- REPASO JS (-- TEMPLATE STRING CON FUNCION --) -------------------------

// const nombre3 = "DIEGO";
// const apellido3 = "BOLAÑOS";
// const nombreCompleto = `Welcome ${nombre3} ${apellido3} al repaso JS`;
// alert(nombreCompleto);

// function saludo (nombre3){
//     return 'Hola' + nombre3;
// }

// console.log(`Estamos saludando a ${saludo(nombre3)}`);

//------------------------- REPASO JS (-- OBJETOS --) -------------------------

// const materia = {
//     nombre4: "INGENIERO EN SISTEMAS, ANALISTA EN DATOS",
//     profesional: "Diego Bolaños",
//     IntensidadHoraria: "5 Horas"
// };

// const materia02 = {
//     nombre4: "BASES DE DATOS",
//     profesional: "Diego Bolaños",
//     IntensidadHoraria: "5 Horas"
// };

// const materia3 = {
//     nombre4: "FRONTEND",
//     profesional: "Diego Bolaños",
//     IntensidadHoraria: "5 Horas"
// };

// console.table(materia);
// console.table(materia2);
// console.table(materia3);

// const materia2 = {... materia};
// console.log(materia2)
// materia2.nombre="ESPAÑOL";
// materia2.profesional="Manuel";
// materia2.IntensidadHoraria="10 horas";


//------------------------- REPASO JS (-- ARREGLOS --) -------------------------

// const arreglo = new Array (7);
// arreglo.push(3);
// console.log(arreglo);

// const materia = ["BASES DE DATOS", "FRONTEND", "INGLÉS"];
// console.table(materia);

// const copyArreglo = {...materia};
// copyArreglo [0] = "Reemplazo";
// copyArreglo [2] = "Reemplazo2";
// console.table(copyArreglo);

// const numeros = [1,2,3,,4,5];
// let numero1 = [...numeros];

// const numeros2=numero1.map(function(numero) {return numero*2});
// console.table(numeros2);

//------------------------- REPASO JS (-- FUNCIONES --) -------------------------

// function inicioSesion(){

//     let nombre = prompt('Por favor ingresa tu nombre');
//     return `Hola Bienvenido, ${nombre}`; 
// }

// alert (inicioSesion());

//------------------------- REPASO JS (-- FUNCIONES FLECHA --) -------------------------


//     const inicioSesion2 = ()=> {
//     let nombre = prompt(`Ingrese su Nombre`);
//     return `Hola Bienvenido, ${nombre}`; 
// }

// alert (inicioSesion2());

// const getUser = ()=> 
//      ({ 
//         user: "DIEGO4515",
//         contraseña: "Hola123"
//     });

// console.log(getUser());

// const objeto = ()=>
//     ({
//         id: "1",
//         nombre: "Velasco"
//     });

// console.log(objeto());

// const usuario = (user, nombre) => 
// ({
//     user : user,
//     name : nombre
// });

// console.table(usuario('DFBZ0630', 'DIEGOFERNANDO'));


//------------------------- REPASO JS (-- DESESTRUCTURACIÓN --) -------------------------

// const aprendiz = {
//     nombres: 'DIEGO',
//     apellidos: 'BOLAÑOS',
//     edad: '19 YEARS OLD',
//     ficha: 2556678,
//     programa: 'ADSO'
// };  
// Creando constante para destructurar 
// const {nombres, edad, ficha} = aprendiz

// // Con el nombre del objeto + . para sacar lo que quieras destructurar 
// console.table(aprendiz.nombres)
// console.table(aprendiz.edad)
// console.table(aprendiz.ficha)
// console.table(aprendiz)

// const destructurarFlecha = (aprendiz)=> 
// {
//     const {nombres, edad, ficha} = aprendiz
//     console.table(nombres, edad, ficha )
// };

// destructurarFlecha(aprendiz);

// // Minimizar función ^^^^^^
// const destructurarFlecha2 = ({nombres, edad, ficha}) =>
// {
//     console.table(nombres, edad, ficha);
// }

// GENERE O CREE 

// const padres = {
//     nombres: 'JORGE',
//     Parentezco: 'PADRE',
//     Identificación: 10587896541,
   
// };  

// const tutores = ({nombres, Parentezco, id, sexo='Masculino', mesVinculacion='Junio'}) =>
// { 
//     console.table(nombres, Parentezco, id, sexo, mesVinculacion );
// }    

// tutores(padres);



// const tutores2 = ({nombres, Parentezco, id, sexo='Masculino', mesVinculacion='Junio'}) => {
// return {
//     nombre: nombres,
//     Familiar: Parentezco,
//     Identificación : id,
//     Sexo: sexo,
//     Mes: mesVinculacion
// }
// }

// const useContent = ({nombres, Parentezco, Identificación}) => {

//     return {
//         nombreAp : nombres,
//         familiar : Parentezco,
//         Detalles :{
//             Tipo: 'CC',
//             Lugar: 'Cali'
//         }
//     }
// }
// const {nombreAp, familiar, Detalles:{Tipo, Lugar}} = useContent(padres);
// console.log(nombreAp);
// console.log(familiar);
// console.log(Tipo, Lugar);

//------------------------- REPASO JS (-- ARRAYS --) -------------------------

// const menores = ['Andres', 'Maria', 'Fernando'];
// console.table(menores);

// console.log(menores[2]);
// console.log(menores[0]);
// console.log(menores[1]);

// const materias = [

//     nombre= 'Matemáticas',
//     profesor= 'Jorge',
//     Edad= 45
// ];

// const retornarArray = () =>{
//     return ['Matemáticas', 'Jorge', 45];
// }

// const [pos1, pos2, pos3] = retornarArray();
// console.log(pos1, pos2, pos3)

// const useState = (nombre) => {
//     return [nombre, () => {console.log("El usuario está activo");}];
// }

// const [nombre, setNombre] = useState('Diego');
// console.log(nombre);
// setNombre();

//------------------------- REPASO JS (-- EVENTOS --) -------------------------

// const nav = document.querySelector('#texto');
// nav.addEventListener('click', ()=> {
//     console.log('Diste click en el texto');
// });

// nav.addEventListener('mouseover', ()=> {
//     console.log('Estás sobre el texto');
//     nav.style.backgroundColor='red';
// });

// const buscar = document.querySelector('');
// buscar.addEventListener('input', (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.target.value);
// });

// const formulario = document.querySelector('.formulario');
// formulario.addEventListener('submit', (evt)=> {
//     evt.preventDefault();
//     console.log(evt.target.action)
// });

// //------------------------- REPASO JS (-- EVENTOS CON SCROLL --) -------------------------

// window.addEventListener('scroll', () => {
//     console.log('Estás escroleando sabroso');
// });


// window.addEventListener('scroll', () => {
//     const scrollPX= window.scrollY;
//     console.log(scrollPX);
// });

// // Ubicación 

// const premium = document.querySelector('.premium');
// const ubicacion = premium.getBoundingClientRect();
// console.log(ubicacion);

// if (ubicacion.top < 100){
//     console.log('Estas en la sección premium');
// }
// else {
//     console.log('No estás en la sección premium');
// }

// // PREVENIR EVENT BUBBLING 

// const padre = document.querySelector('.padre');
// const hijo = document.querySelector('.hijo');

// padre.addEventListener('click', (e)=>{
//     e.stopPropagation();
//     console.log('Estás en padre')
// });

// hijo.addEventListener('click', (e)=>{
//     e.stopPropagation();
//     console.log('Estás en hijos')
// });

// const padre2 = document.querySelector('.padre');
// padre2.addEventListener('click', (e) =>{
//     if(e.target.classList.contains('padre')){
//         console.log('Estás en el padre')
//     }

//     if (e.target.classList.contains('hijo')){
//         console.log('Estás en el hijo')
//     }
// });

//------------------------- REPASO JS (-- FECHAS --) -------------------------

    // const diaHoy = new Date();
    // // let valor;
    // // valor = diaHoy;
    // // console.log(valor)
    // // console.log(typeof valor);

    // let cumple = new Date ('30-06-2004');
    // cumple = new Date('Junio 30 2004');
    // console.log(cumple);
    // console.log(typeof cumple);

    // cumple.toString();
    // valor = cumple;

    // mes = diaHoy.getMonth();
    // console.log(mes);

    // dia = diaHoy.getDay();
    // console.log(dia);

    // hora = diaHoy.getHours();
    // console.log(hora); 

//------------------------- REPASO JS (-- SET MAPS & SYMBOLS --) -------------------------

// const tutores = new Set();
// tutores.add('Pedro');
// tutores.add('Mario');
// tutores.add('Carlos');
// tutores.add('Marta');
// tutores.add('Rosa');
// tutores.add('Pedro');

// console.log(tutores);

// // Tipo de DATO
// console.log('El tipo de Dato es:' ,typeof tutores);

// // Cantidad de DATOS ingresados en el Objeto
// console.log('La cantidad de datos en este objeto es de:', tutores.size);

// // Comprobar si el dato está dentro o si existe
// console.log(tutores.has('Pedrooooo'));

// // Eliminar el Dato del arreglo
// tutores.delete('Marta');

// // Ver los Tutores Responsables
// tutores.forEach(function(responsable){
//     console.log(`El responsable es ${responsable}`);
// });

// // Pasar un Arreglo a SET para no permitir duplicados
// const numeros = [10, 10, 20, 20, 30, 30, 40, 40, 50, 50];
// console.log(numeros);

// const eliminarValores = new Set (numeros);
// console.log(eliminarValores);

//------------------------- REPASO JS (-- WeakSET --) -------------------------

// const debiles = new WeakSet ();

// const tutores2 = {
//     nombre : 'Mario',
//     apellido: 'Rodriguez',
//     Edad: 17
// };

// debiles.add(tutores2);
// console.log(tutores2);

//------------------------- REPASO JS (-- MAPS --) -------------------------

// const padres = new Map ();
// padres.set('Nombre', 'Mariana');
// padres.set('Parentesco', 'Hermana');
// padres.set('Edad', 40);

// console.log(padres);

// console.log(padres.get('Parentesco'));
// console.log(padres.has('Nombre'));
// console.log(padres.delete('Edad'));

// console.log(padres);


// const motero = new Map ([['Nombre', 'Andres'], ['Edad', 40]]);

// console.log(motero);
// motero.set('Placa', 'ABC 52C');
// motero.set('Nombre', 'Mario');

//------------------------- REPASO JS (-- MAPS --) -------------------------

// function *crearGenerador() {
//     yield "Hola";
//     yield 'Diego';
//     yield 7*2;
//     yield false;
// }

// const iterador = crearGenerador();
// console.log(iterador)
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next().value);
// console.log(iterador.next());
// console.log(iterador.next());

// function *generadorMenores(menores){
//     for (let i=0; i < menores.length; i++ ){
//         yield menores[i]
//     }
// }

// const menores = [
// prompt('1 MENOR de Edad'), 
// prompt('2 MENOR de Edad'), 
// prompt('3 MENOR de Edad'), 
// prompt('4 MENOR de Edad'), 
// prompt('5 MENOR de Edad')];

// const iterador2 = generadorMenores(menores);
// console.log(iterador2.next());
// console.log(iterador2.next());
// console.log(iterador2.next());
// console.log(iterador2.next());

//------------------------- REPASO JS (-- ITERAR --) -------------------------


let menores = ['Manuel', 'Diego', 'Juan', 'Ruben', 'Nicol'];
let tutores = new Set (['Pablo', 'Javier', 'Marcos', 'Maria', 'Lucia']);
let rutas = new Map ();
rutas.set ('Ruta 1', 'Avenida A');
rutas.set ('Ruta 2', 'Calle B');

// ----------------------- VALUES - IMPRIME LLAVE VALOR -----------------------------

for (let entry of menores.entries()){
    console.log(entry)
}

for (let entry of tutores.entries()){
    console.log(entry)
}

for (let entry of rutas.entries()){
    console.log(entry)
}

// ----------------------- VALUES - IMPRIME SOLO VALORES -----------------------------

for (let entry of menores.values()){
    console.log(entry)
}

for (let entry of tutores.values()){
    console.log(entry)
}

for (let entry of rutas.values()){
    console.log(entry)
}

// ---------------------- KEYS - IMPRIME SOLO ÍNDICES --------------------------------

for (let entry of menores.keys()){
    console.log(entry)
}

for (let entry of tutores.keys()){
    console.log(entry)
}

for (let entry of rutas.keys()){
    console.log(entry)
}