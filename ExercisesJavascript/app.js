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

const pokemon = {
    nombre: "Charizard",
    tipo: "fuego",
    hambriento: true,
    fuerza: 7,
    resistencia: 5,

    changeNombre (newNombre = this.nombre) 
    {
        if(typeof newNombre)
            this.nombre = newNombre;
    },

    pokLleno: function() 
    {
        this.hambriento = false;
    },

    pokHambre: function() 
    {
        this.hambriento = true;
    },

    changeFuerza (newFuerza = this.fuerza) 
    {
        if(typeof newFuerza)
            this.fuerza = newFuerza;
    }

};

let pokeball = {

    prop: "Carl",
    pokemon: pokemon,
    color: "roja",
    

    changeProp (newProp = this.prop) 
    {
        if(typeof newProp)
            this.prop = newProp;
    },

    changeColor (newColor = this.color) 
    {
        if(typeof newColor)
            this.color = newColor;
    }

};