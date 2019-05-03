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