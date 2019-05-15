//alert("hey");
/*console.log("holaaaaa");

const nombre = "robeto molango";

//number y string 
console.log(nombre);
console.log(typeof nombre);
console.log(typeof"robert molong");

nombre2 = new String("roberto arturo molong");
console.log(nombre2);

console.log("string 1 " + "string 2 " + nombre);

number1 = 3;
number2 = 2;

console.log("number1 is " + typeof number1);
console.log("number2 is " + typeof number2);
a = number1 + number2;
console.log(typeof a);
console.log(a);

//boolean 

let itIsRaining = true;
let isFriday = "false";
let x = !!0;



const lenguaje = ["spanish", "french", "polac"];
console.log(typeof lenguaje);
console.log(lenguaje);

console.log(lenguaje[0] + " " + lenguaje[1]);

const objetoLiteral = {
    id: 234,
    nombre: "roberto",
    apellido: "molongo"

};

console.log(objetoLiteral);
console.log(objetoLiteral.apellido);


//cambiar de tipo de variable
decimalVariable = parseInt("392.34");

console.log(
    "valor decimal =" + decimalVariable + " is " + typeof decimalVariable
);

floatVariable = parseFloat("392.34");

console.log(
    "valor float = " + floatVariable + " is " + typeof floatVariable
);

console.log(decimalVariable + floatVariable);
console.log(typeof (decimalVariable + floatVariable));

const one = "1";
const two = "2";

console.log(one + two);

//operaciones con Math.

let opt1, opt2, opt3;

opt1 = 100;
opt2 = 5;
opt3 = parseFloat("823.56");

let res = opt2 - opt1;
console.log("resultado = " + res);
console.log(Math.abs(res));
console.log(Math.round(opt3));
console.log(opt3);

console.log(Math.random());
console.log(Math.min(-123, 5, 656, 343));
console.log(Math.max(-123, 5, 656, 343));

res = Math.pow(4,2);

console.log("resultado = " + res)

res = Math.sqrt(res);
console.log("resultado = " + res)



let nombre = "Robert";
let apellido = "MOTES";

console.log(nombre.concat(apellido.toLowerCase()).toUpperCase());

const pets = ["dog", "cat"];
console.log(pets);

console.log(Array.isArray(pets));
*/

/*
const persona1 ={
    name: 'Nelly',
    apellido: 'cendejas',
    age: 21
}

const persona2 ={
    name: 'denisse',
    apellido: 'gomez',
    age: 19
}


const address = {
    street: 'rio de janeiro',
    city: 'monterrey',
    state: 'NL',
    country: 'Mex'
};

const clientes = [persona1];
const database = {
    clientes: clientes,
    

}

let val = 2;

console.log(val);
console.log(typeof val);

val = String(val);
console.log(typeof val);

const arreglo = [1,2,3,4,5];
const conjunto = "1 2 3 4 5 6 7 8 9";

console.log(arreglo);

prompt("What's ur name");

*/

//ejercicio dinero, entregado
// let dinero = prompt("¿Cuanto dinero tienes en tu cuenta?");

// if(dinero >= 1000000)
//         console.log("I'm rich!! I have $" + dinero);

// else
// {
//     const tresh = Math.random()*500; 
//     if(dinero >= tresh)
//         console.log("I'm not poor but I have $" + dinero);

//     else
//         console.log("I'm poor I have $" + dinero);

//     console.log("The treshold is: " + tresh);
// }


// funciones
// let vari = "adios";

// (function() {
//     const vari = "hola";
//     console.log(vari);
// })();

// console.log(vari);

//Pokemon

// const pokemon = {
//     nombre: "Charizard",
//     tipo: "fuego",
//     hambriento: true,
//     fuerza: 7,
//     resistencia: 5,

//     changeNombre (newNombre = this.nombre) 
//     {
//         if(typeof newNombre)
//             this.nombre = newNombre;
//     },

//     pokLleno: function() 
//     {
//         this.hambriento = false;
//     },

//     pokHambre: function() 
//     {
//         this.hambriento = true;
//     },

//     changeFuerza (newFuerza = this.fuerza) 
//     {
//         if(typeof newFuerza)
//             this.fuerza = newFuerza;
//     }

// };

// let pokeball = {

//     prop: "Carl",
//     pokemon: pokemon,
//     color: "roja",
    

//     changeProp (newProp = this.prop) 
//     {
//         if(typeof newProp)
//             this.prop = newProp;
//     },

//     changeColor (newColor = this.color) 
//     {
//         if(typeof newColor)
//             this.color = newColor;
//     }

// };

// accesar a un elemento

// const element = document.getElementById("task-title");
// console.log(element);

// console.log(element.id);
// console.log(element.innerText);

// element.innerText = "The awesome tasks";
// element.id = "newTask-title";
// element.className = "task";

// console.log(element.innerHTML);
// console.log(element.innerText);
// console.log(element);

//selector de query 

// const element = document.querySelector("#task-title");

//todos
// const element = document.querySelector("ul");
// console.log(element);

// element.style.color = "blue";

//selector por pares (odds)

// odds = document.querySelectorAll("li:nth-child(odd)");
// console.log(odds);



// //anadir un nuevo elemento en el html desde js

// const li = document.createElement("li");

// li.className = "collection-item s12";

// li.id = "new-li";

// li.setAttribute("title", "New li item");



// const newTextNode = document.createTextNode("New List Item");

// li.appendChild(newTextNode);



// ul = document.querySelector("ul");

// ul.appendChild(li);



// del = document.createElement("a");



// del.href = "#";

// del.className = "delete-item secondary-content";

// del.innerHTML = `<i class="fa fa-times"></i>`;

// li.appendChild(del);



// //replace node!!

// const newHeading = document.createElement("h2");
// const textParagraph = document.createTextNode("This is new Title");

// newHeading.id = "task-title";

// const oldHeading = document.getElementById("task-title");
// const parent = oldHeading.parentNode;

// console.log(parent);

// parent.replaceChild(newHeading, oldHeading); 



// // remove element/node

//remover todoooo

// let lis = document.querySelectorAll("li");
// lis.forEach(function(li) {
//     li.remove();
// });




// let list = document.querySelector("ul");
// console.log(list);

// //remover el primero apartir de li[0]
// let lis = document.querySelectorAll("li");

// let list = document.querySelector("ul");
// console.log(list);

// list.removeChild(lis[0]);


//  // event handler con el boton clear tasks  

// const clearButton = document.querySelector(".clear-tasks");



// clearButton.addEventListener("click", eventHandler);



// function eventHandler(e) {

//   console.log("clik!");



//   e.preventDefault();

//   console.log(e.target);

//   console.log(e.type);

//   console.log(e.x, e.y);

//   console.log(e);

// }




// Exercise delete all tasks and frame its done.

// const clearButton = document.querySelector(".clear-tasks");
// const p = document.createTextNode("Tareas borradas que tenga buen dia");
// const div = document.querySelector("div.card-action");

// clearButton.addEventListener("click", eventHandler);



// function eventHandler(e) {
//     e.preventDefault();
//     let lis = document.querySelectorAll("li");
//     lis.forEach(function(li) {
//         li.remove();
//     });
//     div.appendChild(p);
// }



// //eventos mouse 
// const clearButton = document.querySelector(".clear-tasks");
// const heading = document.querySelector("h5");
// const card = document.querySelector(".card");

// clearButton.addEventListener('click', eventHandler);
// card.addEventListener("mouseenter", eventHandler);
// card.addEventListener("mousemove", eventHandler);

// function eventHandler(event) {
//     console.log(`EVENT TYPE ${event.type}`);

//     heading.textContent = `Mouse X: ${event.offsetX} Mouse Y: ${event.offsetY}`;
  
  
//     event.preventDefault();
// }



// //add task y elimina todo 

// const form = document.querySelector("form");

// const taskInput = document.getElementById("task");

// const list = document.querySelector("ul");


// //console.log(form);

// form.addEventListener("submit", runEvent);


// function runEvent(e) {

//   //console.log(`Event type ${e.type}`);

//   //console.log(taskInput.value);

//   newTask = document.createElement("li");

//   newTask.setAttribute("class", "collection-item");

//   newTask.innerHTML = `${taskInput.value} 

//   <a href="#" class="delete-item secondary-content">

//   <i class="fa fa-times" />

//   </a>`;

//   list.appendChild(newTask);

//   console.log(newTask);

//   e.preventDefault();

// }

// //Exercise delete all tasks and frame its done.

// const clearButton = document.querySelector(".clear-tasks");

// clearButton.addEventListener("click", eventHandler);



// function eventHandler(e) {
//     e.preventDefault();
//     let lis = document.querySelectorAll("li");
//     lis.forEach(function(li) {
//         li.remove();
//     });
// }


// // EVENT DELEGATION



// const bodyNode = document.body;



// bodyNode.addEventListener("click", eventHandler);



// function eventHandler(e) {

//   if (e.target.className === "fa fa-times") {

//     console.log("Delete!");

//     e.target.parentElement.parentElement.remove();

//   }



//   e.preventDefault();

// }

// let roberto = {
//     firstName: "roberto",
// };

// console.log(roberto);

// function Person(name, bday) {
//     this.firstName = name;
//     this.birthday = new Date(bday);
//     this.calculateAge = function() {
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYearMath.abs() - 1970)
//     }
// }

// const alan = new Person('alan','01/01/1990');
// const cesar = new Person('cesar','02/03/2000');

// console.log(cesar.firstName);
// console.log(alan.calculateAge());

// //person constructor 
// function Person(firstName, lastName, bday) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(bday);
// }

// Person.prototype.calculateAge = function() {
//     const diff = Date.now() = this.birthday.getTime();
//     const apoch = new Date(diff);
// }


//objetos en javascript

// function Mammal(order, family, genus, species) {
//     this.order = order;
//     this.family = family;
//     this.genus = genus;
//     this.species = species;
// };

// Mammal.prototype.getFullClassification = function() {
//     return `${this.species}.${this.genus}.${this.family}.${this.order}`;
// };

// function Dog(name, breed, dob) {
//     Mammal.call(this, "Carnivora", "Canidae","Canis","Canis Lupus");

//     this.name = name;
//     this.breed = breed;
//     this.dob = new Date(dob);
// }

// //herencia prototype
// Dog.prototype = Object.create(Mammal.prototype);

// //set constructor
// Dog.prototype.constructor = Dog;

// coco = new Dog("coco","pug","1/January/2011");
// console.log(coco);
// console.log(`Mammal cassification: ${coco.getFullClassification()}`);

// console.log(`Dog classification: ${coco.getFullClassification()}`);

// const organPrototype = {
//     condition: function() {
//         return `Hello, im a ${this.isHealthy ? "healthy" : "sick"} ${this.organName} of the "${this.organSystem} system`;
//     }
// }

// //incomplete missing info

// const heart = Object.create(organPrototype, {
//     organName = { value: "heart"},
//     organSystem = {value: "cardiovascular"},
//     isHealthy: { value: true }
// });

//clase perro intro
// class Dog {
//     constructor (name, breed, dob) {
//         this.name = name;
//         this.breed = breed;
//         this.dob = new Date(dob);
//     }
// }

// const benjie = new Dog("benjie", "yorkie", "1/Jan/2011");
// console.log(benjie);

// clases 

// class Dog {
//     constructor (name, breed, dob) {
//         this.name = name;
//         this.breed = breed;
//         this.dob = new Date(dob);
//     }
// }

// const benjie = new Dog("benjie", "yorkie", "1/Jan/2011");
// console.log(benjie);

// class Person {
//     constructor (firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }

//     greeting() {
//         return `Hello there ${this.firstName} ${this.lastName}`;
//     }

//     //error en return 
//     calculateAge() {
//         const diff = Date.now() - this.dob.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYearMath.abs() - 1970);
//     }
// }
// const carlos = new Person("carlos", "ponce", "1/January/2011");
// console.log(carlos);
// console.log(carlos.greeting());
// console.log(carlos.calculateAge());



